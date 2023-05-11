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

const root = document.getElementById('root');
const body = document.body;

// function btnHandler(eventObject) {
//   // console.log(eventObject);

//   console.group();
//   // той на кого клікнули
//   console.log(eventObject.target);
//   // той, на кому висть обробник події
//   console.log(eventObject.currentTarget);
//   console.groupEnd();
// }

// root.addEventListener('click', btnHandler);
// body.addEventListener('click', btnHandler);
// window.addEventListener('click', btnHandler);

// btn.addEventListener('click', () => {
//   alert('You are subscribed to newsletter');

//   btn.removeEventListener('click', btnHandler);
// });

// const fakeClick = new PointerEvent('click');

// btn.dispatchEvent(fakeClick);

let counter = 0;

const display = document.getElementById('display');
const btn = document.getElementById('btn');

function btnHandler(event) {
  display.textContent = `You have clicked ${++counter} times`;
  // перезаписуємо стилі для тексту
  // display.className = 'test';

  // console.log(display.classList)

  // додає класи до існуючих
  display.classList.add('new-1','new-2');
  // прибирає класи з елемента
  display.classList.remove('class-1', 'new-2');
  // "перемикає" клас
  display.classList.toggle('bold');
}

btn.addEventListener('click', btnHandler);
