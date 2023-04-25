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

