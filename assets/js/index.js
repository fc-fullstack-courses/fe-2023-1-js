'use strict';

// window // глобальний об`єкт

// DOM
// window.document
// document

function outerFunc() {
  let counter = 0;

  return function () {
    alert(++counter);
  };
}

const btnAlert = outerFunc();

// // const buttons = document.getElementsByTagName('button');
// const [firstButton] = document.getElementsByTagName('button');

// // target.addEventListener(type, listener);
// firstButton.addEventListener('click', btnAlert);

// // пошук елементів
// const par = document.getElementById('par');

// const sections = document.getElementsByClassName('article-section');
// // const [firstButton] = document.getElementsByTagName('button');

// const par2 = document.querySelector('section.article-section > p#par');
// const paragraphs = document.querySelectorAll('body p');

const h1 = document.querySelector('.article > h1');
const img = document.querySelector('#wrong-h1+img');
const span = document.querySelector('section > p > span');

const btn = document.getElementById('btn');

function btnHandler() {
  alert('You are subscribed to newsletter');

  // btn.removeEventListener('click', btnHandler);
}

btn.addEventListener('click', btnHandler, { once: true });

// btn.addEventListener('click', () => {
//   alert('You are subscribed to newsletter');

//   btn.removeEventListener('click', btnHandler);
// });
