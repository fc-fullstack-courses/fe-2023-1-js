'use strict';

function sum(num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    // варівнт для поганих значень
    const error = new TypeError('Вхідні дані мають бути числами');
    // console.log(error);

    // Текст помилки
    // console.log(error.message);

    throw error;
  }

  // гарні значення
  return num1 + num2;
}

sum();

console.log('test');
