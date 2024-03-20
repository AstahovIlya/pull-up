import trenings from './js/programs.js';
let numberApproaches = 1;


document.addEventListener('DOMContentLoaded', function () {
   let contentBlock = document.querySelector('.body');
   let childrenBlock = contentBlock.firstElementChild;
   let dayTrening = document.querySelector('h1');
   let today = new Date().getDay();

   dayTrening.textContent = today !== 6 || today !== 0 ? `День ${today}` : 'Выходной';

   let buttonIncrease = childrenBlock.querySelector('.pull-up__button_increase');
   let buttonLower = childrenBlock.querySelector('.pull-up__button_lower');
   let counter = childrenBlock.querySelector('.pull-up__counter');
   let timer = contentBlock.querySelector('.timer');
   let buttonComplate = document.querySelector('.complate');

   counter.textContent = trenings[today][numberApproaches];

   buttonComplate.addEventListener('click', function () {
      contentBlock.dataset.stage = 'rest';
      timer.textContent = today !== 2 ? trenings[today]['time'] : trenings[today]['time'] * numberApproaches;
      let restTime = setInterval(function () {
         timer.textContent = Number(timer.textContent) - 1;
         if (timer.textContent == '0') {
            clearInterval(restTime);
            contentBlock.dataset.stage = 'work';
         }
      }, 1000);
      trenings[today][numberApproaches] = Number(counter.textContent);
      console.log(trenings[today])
      numberApproaches++;
   })
   buttonIncrease.addEventListener('click', function () {
      counter.textContent = Number(counter.textContent) + 1;
   })
   buttonLower.addEventListener('click', function () {
      if (counter.textContent !== '0') {
         counter.textContent = Number(counter.textContent) - 1;
      }
   })

})