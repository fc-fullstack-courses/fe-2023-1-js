'use strict';

// window // глобальний об`єкт

// DOM
// window.document
// document

let counter = 0;

function btnAlert() {
  alert(++counter);
}

// const buttons = document.getElementsByTagName('button');
const [firstButton] = document.getElementsByTagName('button');

// target.addEventListener(type, listener);
firstButton.addEventListener('click', btnAlert );
