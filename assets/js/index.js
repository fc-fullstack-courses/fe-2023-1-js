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

/*
  зробити геттери та сеттери для Worker
  для наступних властивостй
  firstName
  lastName
  age
  yearsOfExpirience

  ще має бути геттер fullName
  
*/
class Worker {
  constructor(firstName, lastName, age, yearsOfExpirience) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.yearsOfExpirience = yearsOfExpirience;
  }

  get fullName() {
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

  static isWorker(object) {
    return object instanceof Worker;
  }

  static test = 4;
}

// Worker.isWorker = function (object) {
//   return object instanceof Worker;
// }

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
  #private;
  #status;
  #test = 21345;
  #customer;

  constructor(customer, address, status, products) {
    this.customer = customer;
    this.address = address;
    this.status = status;
    this.products = products;

    this.#private = 'secret';
  }

  get customer() {
    return this.#customer;
  }

  set customer(customerObj) {
    if (!Worker.isWorker(customerObj)) {
      throw new TypeError('customer must be Worker instance');
    }

    this.#customer = customerObj;
  }

  // getStatus() {
  //   return this._status;
  // }

  get status() {
    return this.#status;
  }

  // setStatus(newStatus) {
  //   if (!Object.values(ORDER_STATUS).includes(newStatus)) {
  //     throw new TypeError('Incorrect status value');
  //   }

  //   this._status = newStatus;
  // }

  set status(newStatus) {
    if (!Object.values(ORDER_STATUS).includes(newStatus)) {
      throw new TypeError('Incorrect status value');
    }

    this.#status = newStatus;
  }

  get abc() {
    return this._products;
  }

  set products(products) {
    if (!Array.isArray(products)) {
      throw new TypeError('products must be array');
    }

    this._products = products;
  }

  get address() {
    return this._address;
  }

  set address(address) {
    if (typeof address !== 'string' || address === '') {
      throw new TypeError('Invalid data for address');
    }

    this._address = address;
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
  PENDING_PAYMENT: 'pending payment',
};

const order1 = new Order(
  customer1,
  'vyl. Garna 5',
  ORDER_STATUS.DELIVERED,
  order1Products
);

// console.log(order1.#private);
// order1.#private = 'asdsaddsa';

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

const order4 = new Order(
  customer1,
  'vyl. Garna 5',
  ORDER_STATUS.DELIVERED,
  order1Products
);

// if(order1.status === ORDER_STATUS.DELIVERED) {
//   console.log('order 1 is delivered')
// }

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isBanned = false;
  }

  createMessage(message) {
    console.log(message);
  }

  static isUser(user) {
    return user instanceof User;
  }
}

const u1 = new User('User', '1', 21);

class Moderator extends User {
  constructor(name1, name2, age1, permissions) {
    // даємо все що потрібно конструктру батьківського
    // класу
    super(name1, name2, age1);
    // тількі після виклику super
    this.permissions = permissions;
  }

  deleteMessage(message) {
    console.log('message deleted');
  }
}

const m1 = new Moderator('Moder', '2', 324);

/*
  Створити клас Admin який спадкується від Moderator
  адміни мають вміти банити користувачів

  При цьому у будья кого користувача має бути властивість
  isBanned яка показує чи забанен він
*/

class Admin extends Moderator {
  constructor(name1, name2, age1, permissions) {
    super(name1, name2, age1, permissions);
  }

  static isAdmin(user) {
    return user instanceof Admin;
  }

  ban(user) {
    if (!User.isUser(user)) {
      throw new TypeError('You can only ban users');
    }
    if (Admin.isAdmin(user)) {
      throw new TypeError('You can`t ban admins');
    }

    if (user.isBanned) {
      throw new Error('User already banned');
    }

    user.isBanned = true;

    // return true;
  }

  unBan(user) {
    if (!User.isUser(user)) {
      throw new TypeError('You can only unban users');
    }

    if (!user.isBanned) {
      throw new Error('User is not banned');
    }

    user.isBanned = false;
  }
}

// Інкапсуляція
class Hamster {
  #mood;

  constructor() {
    this.#mood = 'good';
  }
  #bite(target) {}

  eat(food) {
    if (food === 'nuts') {
      this.#mood = 'good';
    } else {
      this.#mood = 'bad';
    }
  }
}

const hamster = new Hamster();

// Поліморфізм
class Figure {
  constructor(name) {
    this.name = name;
  }

  getArea() {}
}

const figure1 = new Figure('figure');

class Triangle extends Figure {
  constructor(a, h) {
    super('triangle');
    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h * 0.5;
  }
}

const triangle1 = new Triangle(5, 7);

class Square extends Figure {
  constructor(a) {
    super('square');
    this.a = a;
  }

  getArea() {
    return this.a * this.a;
  }
}

const square1 = new Square(8);

/*
  Зробіті клас фігур Circle (круг)
  і змусть його показвати вам коректну площу для нього
*/

class Circle extends Figure {
  constructor(r) {
    super('circle');
    this.r = r;
  }

  getArea() {
    // return 3.14 * this.r * this.r;
    // return 3.14 * (this.r ** 2);
    // return 3.14 * Math.pow(this.r, 2);
    return Math.PI * this.r * this.r;
  }
}

const circle1 = new Circle(10);

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }

  throw new TypeError('You must provide Figure instance');
}
