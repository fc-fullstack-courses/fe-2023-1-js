'use strict';

// const btn = document.querySelector('button');

// const btnHandler = () => {
//   for (let i = 0; i < 5_000; i++) {
//     console.log('test');
//   }

//   setTimeout(() => {
//     console.log('timeout')
//   }, 2000);

// }

// btn.addEventListener('click', btnHandler);

// async
function callback2() {
  // sync
  console.log(`timeout 0.2`);
  console.log(`timeout 0.2 2`);
  // async
  // setTimeout(() => console.log(`timeout 0.2 2 xxasd`),0)
  //sync
  console.log(`timeout 0.2 3`);
}

// setTimeout повертає id таймера
// const timeout1 = setTimeout(callback2, 0);
// // зупинити таймер з певним id
// clearTimeout(timeout1);

// const intervalId = setInterval(() => {
//   console.log('interval');
// }, 1000);

// clearInterval(intervalId);

const ADMIN_PASSWORD = '12345';

// const intervalId2 = setInterval(() => {
//   const userPass = prompt('password');

//   if (userPass === ADMIN_PASSWORD) {
//     clearInterval(intervalId2);
//   }
// }, 5000);

/*
  Створити функцію, яка буде виводити в консоль числа
  від 1 до 20 з проміжком часу між логіми в 100 мс

  Можливі рішення через 
    setInterval - if, clearInterval
    setTimeout - рекурсія і if

*/

function countInterval() {
  let i = 0;

  const id = setInterval(() => {
    console.log(++i);

    if (i >= 20) {
      clearInterval(id);
    }
  }, 100);
}

function countTimeout() {
  let i = 0;

  function callback () {
    if(i < 20) {
      console.log(++i);
      setTimeout(callback,100);
    }
  }

  setTimeout(callback,100);
}