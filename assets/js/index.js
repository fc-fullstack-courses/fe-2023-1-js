'use strict';

class Cat {
  // конструктор має бути від нуля до 1
  constructor(nickname, breed, age, gender = 'male') {
    this.nickname = nickname;
    this.breed = breed;
    this.age = age;
    this.gender = gender;
  }

  // метод екземпляру кота
  meow() {
    return `${this.nickname} is meowing`;
  }
}

const cat1 = new Cat('test', 'test', 5);

/*
  Створити класс Worker
  у робітника має бути:
    ім'я
    прізвище
    вік
    досвід роботи

    у робітника мають бути методи:
    метод отримання повного імені (ім'я + прізвище)
    метод перевірки повноліття 
*/

class Worker {
  constructor(firstName, lastName, age, yearsOfExpirience) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.yearsOfExpirience = yearsOfExpirience;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    // if (this.age >= 18) {
    //   return `${this.firstName} ${this.lastName} is adult`;
    // }
    // return `${this.firstName} ${this.lastName} isn't adult`;
    // if (this.age >= 18) {
    //   return true;
    // }

    // return false;

    return this.age >= 18;
  }
}

const w1 = new Worker('1', '1', 20, 1);
const w2 = new Worker('2', '2', 5, 2);

// if(w1.isAdult() === '1 1 is adult' ) {
//   alert('You are adult')
// }

// if (w2.isAdult()) {
//   alert('You are adult');
// }
