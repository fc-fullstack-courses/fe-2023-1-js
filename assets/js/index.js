'use strict';

// window // глобальний об`єкт

// DOM
// window.document
// document

function btnAlert() {
  alert('Hello World! We pressed the Button');
}

// const buttons = document.getElementsByTagName('button');
const [firstButton] = document.getElementsByTagName('button');

// target.addEventListener(type, listener);
firstButton.addEventListener('click', btnAlert );