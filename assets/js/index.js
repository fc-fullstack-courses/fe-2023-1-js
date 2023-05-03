'use strict';

// 1 створити функцію
// function sum() {

// }

// 2 дати необхідні параметри
// function sum (num1, num2) {

// }

// 3 скласти два числа та зберігти результат
// function sum (num1 , num2 ) {
//   const result = num1 + num2;
// }

// 4 повернути результат
// function sum (num1 , num2 ) {
//   const result = num1 + num2;
//   return result;
// }

/*
x = y - лінійна
x = log y - логаріфмічна
x = y ^ 2 - квадратична
x = 2 ^ y - експоненціальна
x = y! - факторіал

*/

/*
n - вхідні дані / кількість операцій які треба виконати

x = n^2  (1) => O(n^2)
x = 2^n  (2) => O(2^n)
x = n!  (3)  => O(n!)
*/

/*
O(n!)
O(2^n)
O(n^2)
O(n) - лінійна
O(log n)
O(7) - константна 
*/

// константна
const arr = [1,4,58,7,8,3];
arr[1];

// лінійна - проходимось по всьому масиву один раз у найгішому випадку
function linearSearch(arr, value) {

  for(let i =0; i <arr.length; i++) {
    if(arr[i] === value) {
      return i;
    }
  }

  return -1;
}

