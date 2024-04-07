import traning from './js/programs.js';
import { increaseValue, decreaseValue } from './js/control.js';

let dayMasege = [
   'Хорошенько отдохни и восстанови свои силы.',
   'Выполните 5 подходов классических подтягиваний прямым хватом на максимум. Остановитесь, когда не получится сделать следующее повторение с хорошей техникой.',
   'Выполняйте подходы по принципу пирамиды. Начните тренировку с 1 подтягивания. Пирамида закончится, когда не сможете сделать на одно повторение больше, чем в предыдущем подходе.',
   'Сделайте 9 подходов 3 разными хватами. Колличество повторений в каждом подходе должно быть одним и тем же.',
   'Сделайте максимум рабочих подходов. Должно получиться не менее 9 подходов.',
   'Повторите тренировочный день, который показался вам самым сложным.',
   'Хорошенько отдохни и восстанови свои силы.'
];

document.addEventListener('DOMContentLoaded', function () {
   setTitleText('h1');
   let currentDay = new Date().getDay();
   document.querySelector('p').textContent = dayMasege[currentDay];
   if (document.querySelector('.body').classList.contains('result')) {
      let saveTrening = JSON.parse(localStorage.getItem('approaches'));
      let resultTrening = saveTrening[currentDay]['approaches'];

      setTableResults(resultTrening, '.table');

      document.querySelector('.complate').addEventListener('click', function () {
         document.location.href = '../index.html';
      })
   } else {
      if (currentDay == 5) {
         getCurrentDay.then(function (result) {
            startProgram(result, traning);
         })
      } else {
         document.querySelector('.menu').style.display = 'none'
         startProgram(currentDay, traning)
      }
   }


});

function setTitleText(selectorTitle) {
   let title = document.querySelector(selectorTitle);
   let currentDay = new Date().getDay();

   title.textContent = currentDay !== 0 && currentDay !== 6 ? `День ${currentDay}` : 'Выходной';
}

function startTimer(selectorProgressLine, selectorTimer, time, clouseTimer) {
   let timerCount = document.querySelector(selectorTimer);
   timerCount.textContent = time;
   let progress = document.querySelector(selectorProgressLine);
   let radius = progress.r.baseVal.value;
   let circumference = (radius * 2 * Math.PI).toFixed(0);
   progress.style.strokeDasharray = circumference;
   progress.style.strokeDashoffset = 0;
   let step = circumference / time;

   let timerValue = setInterval(function () {
      timerCount.textContent = Number(timerCount.textContent) - 1;
      progress.style.strokeDashoffset = Number(progress.style.strokeDashoffset) + step;
      if (timerCount.textContent == 0) {
         clearInterval(timerValue);
         clouseTimer(timerCount.parentElement.parentElement)
      }
   }, 1000)
}

function clouseTimer(body) {
   body.dataset.stage = 'work';
   console.log(body.lastElementChild)
   body.lastElementChild.disabled = false;
}

function setTableResults(results, tableSelector) {
   let table = document.querySelector(tableSelector);

   for (let i = 0; i <= results.length; i++) {
      let li = document.createElement('li');

      let approach = document.createElement('span');
      li.appendChild(approach);

      let amount = document.createElement('span');
      li.appendChild(amount);

      if (i == results.length) {
         approach.textContent = `Итого`;
         amount.textContent = results.reduce((sum, e) => sum + Number(e), 0);
         li.style.fontWeight = 700;
      } else {
         approach.textContent = `Подход ${i + 1}`;
         amount.textContent = results[i];
      }

      table.appendChild(li);
   }
}


let getCurrentDay = new Promise(function (resolve) {
   let listDays = document.querySelectorAll('.menu__day');
   let menu = document.querySelector('.menu');

   for (let day of listDays) {
      day.addEventListener('click', function () {
         menu.style.display = 'none';
         resolve(this.value);
      })
   }
})

function startProgram(numberDay, tranings) {
   let currentDay = numberDay;

   let bodyBox = document.querySelector('.body');
   let complateButton = document.querySelector('.complate');
   let timeAproach = tranings[currentDay]['time'];
   let limitApproach = tranings[currentDay]['limit'];
   let approaches = tranings[currentDay]['approaches'];

   if (bodyBox.dataset.stage == 'work') {
      let counter = bodyBox.querySelector('.pull-up__counter');

      let buttonIncreaseValue = bodyBox.querySelector('.pull-up__button_increase');
      buttonIncreaseValue.addEventListener('click', function () {
         counter.textContent = increaseValue(counter);
      })

      let buttonDecreaseValue = bodyBox.querySelector('.pull-up__button_lower');
      buttonDecreaseValue.addEventListener('click', function () {
         counter.textContent = decreaseValue(counter);
      })

      complateButton.addEventListener('click', function () {
         approaches.push(counter.textContent);
         bodyBox.dataset.stage = 'rest';
         if (currentDay == 1 || currentDay == 3) {
            if (approaches.length == limitApproach) {
               tranings[currentDay]['approaches'] = approaches;
               localStorage.setItem('approaches', JSON.stringify(tranings))
               document.location.href = 'result.html';
            } else {
               startTimer('.timer__line', '.timer', timeAproach, clouseTimer);
               this.disabled = true;
            }
         } else if (currentDay == 2) {
            if (approaches.at(-1) <= approaches.at(-2)) {
               tranings[currentDay]['approaches'] = approaches;
               localStorage.setItem('approaches', JSON.stringify(tranings))
               document.location.href = 'result.html';
            } else {
               startTimer('.timer__line', '.timer', timeAproach * approaches.length, clouseTimer);
               this.disabled = true;
            }
         } else if (currentDay == 4) {
            if (approaches.at(-1) < approaches.at(-2)) {
               tranings[currentDay]['approaches'] = approaches;
               localStorage.setItem('approaches', JSON.stringify(tranings))
               document.location.href = 'result.html';
            } else {
               startTimer('.timer__line', '.timer', timeAproach, clouseTimer);
               this.disabled = true;
            }
         }
      })
   }
}

