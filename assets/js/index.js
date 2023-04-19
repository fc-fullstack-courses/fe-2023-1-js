function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}

const user1 = new User('First User', 50, true);
const user2 = new User('Second User', 34, false);

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
user1.__proto__ = userPrototype;

