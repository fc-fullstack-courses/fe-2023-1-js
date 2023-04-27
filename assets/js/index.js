'use strict';

// let i = 0;

// function test() {
//   i++;
//   // debugger;
//   test();
// }

function countdown (number) {
  // debugger;
  console.log(number);
  if(number > 0) {
    // рекурсивний випадок
    countdown(number - 1);
  }

  return 'end'; // база рекурсії
}