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
  constructor(customer, address, status, products) {
    this.customer = customer;
    this.address = address;
    this.status = status;
    this.products = products;
  }

  print() {
    return `Order with customer ${this.customer.getFullName()} has status: ${
      this.status
    } and address: ${this.address}. Order contains ${this.products
      .map(
        (productData) =>
          `${productData.amount} units of product ${productData.productName}`
      )
      .join(', ')}`;
  }
}

const customer1 = new Worker('Test', 'Userenko', 33, 4);

const order1Products = [
  {
    productName: 'pizza 4 cheese',
    amount: 3,
  },
  {
    productName: 'cola',
    amount: 4,
  },
];

// const order1Products2 = ['pizza 4 cheese', 'cola'];

// enumeration
const ORDER_STATUS = {
  DELIVERED: 'delivered',
  IN_TRANSIT: 'in transit',
  ORDERED: 'ordered',
  PENDING_PAYMENT: 'pending payment'
};

const order1 = new Order(
  customer1,
  'vyl. Garna 5',
  ORDER_STATUS.DELIVERED,
  order1Products
);
const order2 = new Order(
  customer1,
  'vyl. Garna 5',
  ORDER_STATUS.IN_TRANSIT,
  order1Products
);
const order3 = new Order(
  customer1,
  'vyl. Garna 5',
  ORDER_STATUS.ORDERED,
  order1Products
);

if(order1.status === ORDER_STATUS.DELIVERED) {
  console.log('order 1 is delivered')
}
