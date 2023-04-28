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

// if(w1.isAdult() === '1 1 is adult' ) {
//   alert('You are adult')
// }

// if (w2.isAdult()) {
//   alert('You are adult');
// }

/*

  Створити класс Order (Замовлення)
  у замовлення є замовник
  адреса
  статус
  товари

  в замовлення має бути метод print
  він повертє рядок в якому вказана кому що і куди їде
  і який поточний статус
*/

class Order {
  constructor(customer, address, status, product) {
    this.customer = customer;
    this.address = address;
    this.status = status;
    this.product = product;
  }

  print() {
    return `Order with customer ${this.customer.getFullName()} has status: ${
      this.status
    } and address: ${this.address}. Order contains ${this.product}`;
  }
}

const customer1 = new Worker('Test', 'Userenko', 33, 4);

const order1 = new Order(
  customer1,
  'vyl. Garna 5',
  'delivered',
  'pizza 4 cheese'
);
