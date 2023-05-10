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

// const buttons = document.getElementsByTagName('button');
const [firstButton] = document.getElementsByTagName('button');

// target.addEventListener(type, listener);
firstButton.addEventListener('click', btnAlert);

// пошук елементів
const par = document.getElementById('par');

const sections = document.getElementsByClassName('article-section');
// const [firstButton] = document.getElementsByTagName('button');

const par2 = document.querySelector('section.article-section > p#par');
const paragraphs = document.querySelectorAll('body p');