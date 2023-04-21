function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}

const arr1 = [123];
// const arr2 = ['asdsadsa'];

const user0 = {
  name: 'Test',
  age: 99999999,
  isMale: true,
};

const userPrototype = {
  speak: function (words) {
    return `${this.name} says: ${words}`;
  },
};

const userPrototypeProtype = {
  test: function () {
    return 'userPrototypeProtype';
  },
};

userPrototype.__proto__ = userPrototypeProtype;
user0.__proto__ = userPrototype;
// user1.__proto__ = userPrototype;

User.prototype = userPrototype;

const user1 = new User('First User', 50, true);
const user2 = new User('Second User', 34, false);

// const prototype1 = {
//   x: function () {},
//   y: function () {},
//   abc: 12345
// };

// const obj1 = {
//   test1: 123465,
// };

// obj1.__proto__ = prototype1;

// const me = {
//   name: 'Test',
//   age: 15,
//   hairColor: 'green'
// };

// const brother = {
//   name: 'Test brother',
//   age: 2358,
// };

// const familyGenes = {
//   eyeColor: 'blue',
//   hairColor: 'black',
//   walk: function () {

//   }
// };

// me.__proto__ = familyGenes;
// brother.__proto__ = familyGenes;

function Product(name, price) {
  this.name = name;
  this.price = price;
}

const productPrototype = {
  name: 'Product',
  price: 1,
  buy: function (cost) {
    // console.log(this);
    if (cost > this.price) {
      console.log(`you have bought ${this.name}`);
    } else {
      console.log(`Not enought money`);
    }
  },
};

Product.prototype = productPrototype;

const p1 = new Product('P1', 1000);

function Phone(name, price, brand) {
  this.name = name;
  this.price = price;
  this.brand = brand;
}

const phonePrototype = {
  call: function (number) {
    console.log(`You have called ${number}`);
  },
};

phonePrototype.__proto__ = productPrototype;

Phone.prototype = phonePrototype;

const phone1 = new Phone('phone', 12354, 'brand');

/*

  створити функцію конструктор Ladder
  у Ladder е властивість currentStep

  у об'єктів сходинок є методи
  up - підіймаємося на одну сходинку
  down - спускаємося на одну сходинку
  showStep - показує на якій сходинці ми знаходимось

  зробити завдання з використанням прототипів

*/

function Ladder(maxSteps) {
  this.currentStep = 0;
  this.maxSteps = maxSteps;
}

const ladderProto = {
  up: function () {
    if (this.currentStep < this.maxSteps) {
      this.currentStep++;
    }
    return this.currentStep;
  },
  down: function () {
    if (this.currentStep > 0) {
      this.currentStep--;
      return this.currentStep;
    }

    throw new RangeError('Не можемо ступати нижче');
  },
  showStep: function () {
    return this.currentStep;
  },
};

Ladder.prototype = ladderProto;

const ladder1 = new Ladder(5);

try {
  ladder1.up();
  ladder1.down();
} catch (err) {
  console.log(err.message);
}
