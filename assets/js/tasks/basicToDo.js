'use strict';

/*
  створити базовий todo-list
  по натисканню на кнопку запитати у користувача задачу
  потім створити елменент з текстом задачі і розмістити його на сторінці

  * поруч з текстом задачі розмістит кнопку delete
    при натисканні на неї видалити задачу і кнопку
*/

const addTask = document.querySelector('.question-btn');
const todoList = document.querySelector('.todo-list');
// const deleteBtn = document.querySelector('.btn');

function deleteHandler(event) {
  event.target.parentElement.remove();
}

addTask.addEventListener('click', function () {
  const newTask = prompt('Write new task');

  if (newTask === '') {
    alert('Write something');
    return;
  }

  const newSection = document.createElement('li');
  newSection.classList.add('section-question');

  const newButtonDelete = document.createElement('button');
  newButtonDelete.classList.add('btn');
  newButtonDelete.innerText = 'Delete';
  newButtonDelete.addEventListener('click', deleteHandler);

  const newElem = document.createElement('p');
  newElem.textContent = newTask;
  newElem.classList.add('text');

  newSection.append(newElem, newButtonDelete);
  todoList.append(newSection);
});
