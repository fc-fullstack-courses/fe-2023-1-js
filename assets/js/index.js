'use strict';

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number[]} otherNumbers
 * @returns
 */
const sum = (a, b, ...otherNumbers) => {
  console.log(otherNumbers);
  // console.log(arguments);
  let result = a + b;

  // for (let i = 0; i < otherNumbers.length; i++) {
  //   result += otherNumbers[i];
  // }

  return result;
};

const sum1 = (...numbers) => {
  //   let result = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     result += numbers[i];
  //   }
  //   return result;

  const result = numbers.reduce((accumulator, number, index, arr) => {
    return accumulator + number;
  });

  return result;
};

const sum2 = (...numbers) => numbers.reduce((acc, number) => acc + number);

const multiply = (...numbers) =>
  numbers.reduce((acc, number) => acc * number, 1);

// Синтаксис розширення (spread)
const numbers = [500, 123, 546, 9878, -5662, 31, 2321];
const numbers2 = [-152, 546, 3213, -456, -6546];

/*
  створіть мені третій масив у фкому будуть всі елементи з двох попередніх масивів. Конкат не використовувати
*/

const allNumbers = [...numbers, 'asdsadsa', ...numbers2];

// const result = sum2(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);

// sum2(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers2[0], numbers2[1])
const result = sum2(...numbers, ...numbers2);

console.log(result);

const obj1 = {
  name: 'Test',
  age: 21312,
};

const obj2 = {
  lastName: 'User',
  age: 12
};

const user = {
  ...obj2,
  ...obj1,
  age: 5
};

/*

  Створіть функцію, яка приймає необмежену кількість параметрів
  і повертає кількість стрінгів (або інших типів даних за вашим бажанням) у цих параметрах

  (1, 2, 'test', true, 'false', null) => 2

*/