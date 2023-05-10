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
