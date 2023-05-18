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
  setTimeout(() => console.log(`timeout 0.2 2 xxasd`),0)
  //sync
  console.log(`timeout 0.2 3`);
}

setTimeout(() => {
  console.log('timeout 1000');
}, 1000);

setTimeout(callback2, 0);

setTimeout(() => {
  console.log(`timeout 0`);
}, 0);

console.log('log');
