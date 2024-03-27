import tranings from './js/programs.js';
import { increaseValue, decreaseValue } from './js/control.js';

document.addEventListener('DOMContentLoaded', function () {
   setTitleText('h1');
   let currentDay = new Date().getDay();

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
               startTimer('.timer', timeAproach, clouseTimer);
            }
         } else if (currentDay == 2) {
            if (approaches[length - 1] <= approaches[length - 2]) {
               tranings[currentDay]['approaches'] = approaches;
               localStorage.setItem('approaches', JSON.stringify(tranings))
               document.location.href = 'result.html';
            } else {
               startTimer('.timer', timeAproach, clouseTimer);
            }
         } else if (currentDay == 4) {
            if (approaches[length - 1] < approaches[length - 2]) {
               tranings[currentDay]['approaches'] = approaches;
               localStorage.setItem('approaches', JSON.stringify(tranings))
               document.location.href = 'result.html';
            } else {
               startTimer('.timer', timeAproach, clouseTimer);
            }
         }
      })
   }

   if (bodyBox.firstElementChild.classList.contains('result')) {
      let saveTrening = JSON.parse(localStorage.getItem('approaches'));
      let resultTrening = saveTrening[currentDay]['approaches'];

      setTableResults(resultTrening, '.table');

      complateButton.addEventListener('click', function () {
         document.location.href = '../index.html';
      })
   }
});

function setTitleText(selectorTitle) {
   let title = document.querySelector(selectorTitle);
   let currentDay = new Date().getDay();

   title.textContent = currentDay !== 0 || currentDay !== 6 ? `День ${currentDay}` : 'Выходной';
}

function startTimer(selectorTimer, time, clouseTimer) {
   let timerCount = document.querySelector(selectorTimer);
   timerCount.textContent = time;

   let timerValue = setInterval(function () {
      timerCount.textContent = Number(timerCount.textContent) - 1;
      if (timerCount.textContent == 0) {
         clearInterval(timerValue);
         clouseTimer(timerCount.parentElement)
      }
   }, 1000)
}

function clouseTimer(body) {
   body.dataset.stage = 'work';
}

function setTableResults(results, tableSelector) {
   let table = document.querySelector(tableSelector);

   for (let i = 0; i <= results.length; i++) {
      let li = document.createElement('li');
      li.classList.add('table__line');

      let approach = document.createElement('span');
      li.appendChild(approach);

      let amount = document.createElement('span');
      li.appendChild(amount);

      if (i == results.length) {
         approach.textContent = `Итого`;
         amount.textContent = results.reduce((sum, e) => sum + Number(e), 0);
      } else {
         approach.textContent = `Подход ${i + 1}`;
         amount.textContent = results[i];
      }

      table.appendChild(li);
   }
}