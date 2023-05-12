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
const img = document.querySelector('#wrong-h1+img');

function btnHandler(event) {
  display.textContent = `You have clicked ${++counter} times`;
  // перезаписуємо стилі для тексту
  // display.className = 'test';

  // console.log(display.classList)

  // додає класи до існуючих
  display.classList.add('new-1', 'new-2');
  // прибирає класи з елемента
  display.classList.remove('class-1', 'new-2');
  // "перемикає" клас
  display.classList.toggle('bold');

  // встановлюємо елементу в указаний атрибут
  // вказане значення
  // img.setAttribute(
  //   'src',
  //   'https://e1.pxfuel.com/desktop-wallpaper/115/130/desktop-wallpaper-really-cute-backgrounds-on-markinternational-info-really-pretty-backgrounds-thumbnail.jpg'
  // );
}

btn.addEventListener('click', btnHandler);

/*

  У вас має бути картинка 
  по натисканню кнопки змініть src та alt

  * у вас буде змінна-масив, в якому зберігаються 
  2 об'єкти з властивостями src та alt
  при натисканні на кнопку змінювати на картинці
  властивості між тими що є в масиві
*/

const image = document.querySelector('#img');
const switchBtn = document.querySelector('#switch');

const animals = [
  {
    src: 'https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Kenya_112367/story_full_width/qxyqxqjtu_WW187785.jpg',
    alt: 'Elephant',
  },
  {
    src: 'https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amlyYWZmZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    alt: 'Jiraffe',
  },
];

// let currentAnimal = 0;

const imageAlt = image.getAttributeNode('alt');
const imageSrc = image.getAttributeNode('src');

const imageTitle = document.createAttribute('title');
imageTitle.value = 'this will be image title';
image.setAttributeNode(imageTitle);

switchBtn.addEventListener('click', (event) => {
  // if (currentAnimal === 0) {
  //   currentAnimal = 1;
  // } else {
  //   currentAnimal = 0;
  // }

  // currentAnimal = currentAnimal === 0 ? 1 : 0;

  // image.setAttribute('src', animals[currentAnimal].src);
  // image.setAttribute('alt', animals[currentAnimal].alt);

  // const imageAlt = image.getAttribute('alt');

  // console.dir(imageAlt);

  // const nextAnimal = imageAlt === animals[0].alt ? animals[1] : animals[0];

  imageAlt.value =
    imageAlt.value === animals[0].alt ? animals[1].alt : animals[0].alt;

  imageSrc.value =
    imageSrc.value === animals[0].src ? animals[1].src : animals[0].src;
  // image.setAttribute('src', nextAnimal.src);
  // image.setAttribute('alt', nextAnimal.alt);
});

const newElement = document.createElement('p');

newElement.textContent = 'this element is generated in JS';
// newElement.setAttribute('class', 'appended')
// newElement.className = 'appended';
newElement.classList.add('appended');

newElement.id = 'appended';
newElement.style.border = '5px solid black';

root.append(newElement);

// 1 видалити у батька
root.removeChild(display);

// 2 елемент сам видаляє себе
btn.remove();

/*
  створити кнопку, при натисканні на яку вона буде видалятися
  * при видаленні кнопки не користуватися змінною, через яку її створювали
*/

const kamikazeBtn = document.createElement('button');
kamikazeBtn.textContent = 'X';
document.body.append(kamikazeBtn);

kamikazeBtn.addEventListener('click', (event) => {
  // kamikazeBtn.remove();
  event.target.remove();
});

// отримання батьківського елементу
// document.body.parentElement;

// отримання списку дітей
// document.body.children;

/*
  створити базовий todo-list
  по натисканню на кнопку запитати у користувача задачу
  потім створити елменент з текстом задачі і розмістити його на сторінці

  * поруч з текстом задачі розмістит кнопку delete
    при натисканні на неї видалити задачу і кнопку
*/

const propmptText = prompt('explanation');
