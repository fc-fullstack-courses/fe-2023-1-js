'use strict';

// 1. знайти контейнер для коментів
const commentsContainer = document.querySelector('#root');

//  2. динамічно створити верстку для кожного об'єкту в масиві
//    2.1 створити функцію яка буде перетворювати об'єкт на html-елемент

function createUserComment(comment) {
  const {
    authorImg,
    authorName: authorNameString,
    title,
    mark: markText,
    text,
  } = comment;

  const liElement = document.createElement('li');
  liElement.classList.add('commentWrapper');

  const article = document.createElement('article');
  article.classList.add('commentArticle');

  const authorData = document.createElement('div');
  authorData.classList.add('authorData');

  const imageWrapper = createImage({ src: authorImg, alt: authorNameString });

  const authorName = document.createElement('p');
  authorName.classList.add('authorName');
  authorName.textContent = authorNameString;

  const commentBody = document.createElement('div');
  commentBody.classList.add('commentBody');

  const commentTitle = document.createElement('h2');
  commentTitle.classList.add('commentTitle');
  commentTitle.textContent = title;

  const mark = document.createElement('p');
  mark.classList.add('mark');
  mark.textContent = `${markText} / 10`;

  const commentText = document.createElement('p');
  commentText.classList.add('commentText');
  commentText.textContent = text;

  commentBody.append(commentTitle, mark, commentText);
  authorData.append(imageWrapper, authorName);
  article.append(authorData, commentBody);
  liElement.append(article);
  return liElement;
}

function createImage({ src, alt }) {
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('imageWrapper');

  const image = document.createElement('img');
  image.classList.add('authorImg');
  // image.setAttribute('src', src);
  image.src = src;
  image.alt = alt;

  imageWrapper.append(image);

  return imageWrapper;
}

//    2.2 викликати функцію з 2.1 для кожного коментаря і зберігаємо результат
const HTMLLiElements = responseData.map((comment) =>
  createUserComment(comment)
);

// 3. розмістити отриману верстку в контейнері
commentsContainer.append(...HTMLLiElements);
