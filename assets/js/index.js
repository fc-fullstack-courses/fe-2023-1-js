'use strict';

// const symbol1 = Symbol('test');

// const symbol2 = Symbol('test');

// console.log(symbol1 === symbol2);

const user = {
  userName: 'aonfeuf2324',
  password: '39j20jn483gndlsdnf48tqjd094',
  email: 'test@test.test',
  [Symbol('test')]: 'secret',
  0: 'asdasf',
};

// const userSymbols = Object.getOwnPropertySymbols(user);
// user[userSymbols[0]]
const [symbol1] = Object.getOwnPropertySymbols(user);

const arr = [1, 2, 45, 3, 6, 98];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (const number of arr) {
  console.log(number);
}

/*
  створіть функцію, яка приймає необмежену кількість параметрів (чисел)
  перемножте всі числа і поверніть результат.
  Використовувати цикл for .. of

  2,3,4 => 24
  5,5,10, 10 => 2500
*/

function multiply (...numbers) {
  let result = 1;

  for(const number of numbers) {
    result *= number;
  }

  return result;
}