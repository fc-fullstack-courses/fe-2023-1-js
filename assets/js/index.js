'use strict';

// 1. знайти контейнер для коментів
const commentsContainer = document.querySelector('#root');

//  2. динамічно створити верстку для кожного об'єкту в масиві
//    2.1 створити функцію яка буде перетворювати об'єкт на html-елемент

function createUserComment(comment) {
  const liElement = document.createElement('li');

  // ...

  return liElement;
}

//    2.2 викликати функцію з 2.1 для кожного коментаря і зберігаємо результат
const HTMLLiElements = responseData.map((comment) =>
  createUserComment(comment)
);

// 3. розмістити отриману верстку в контейнері
commentsContainer.append(...HTMLLiElements);
