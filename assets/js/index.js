'use strict';
/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
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

// блок, в якому можливе виникнення помилки
try {
  console.log(1);
  sum(2,2);
  console.log(2);
} catch (err) {
  // виконується якщо в try відбулася помилка
  // місссція для виправлення наслідків помилки
  console.log('помилка');
  console.log(err.message);
} finally {
  // блок виконуєтсья після try або після catch
  console.log('finally');
}

console.log('test');
