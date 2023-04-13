const obj = {
  display: 'flex',
  justifyContent: 'center',
  lineHeight: 1.5,
};

const vukladach = {
  name: 'Kyrylo',
  height: 3.5,
  weight: 1500,
  isMale: true,
  pc: {
    cpu: {
      manufacturer: 'AMD',
      model: 'Ryzen 2700x',
    },
    ram: 16,
  },
  password: 'admin',
  email: 'test@test.test',
};

const phone = {
  color: 'red',
  price: 15000,
  manufacturer: 'Somebody',
  call: function (somebody) {
    console.log('calling ' + somebody);
  },
};
// Способи створення об'єктів
const obj1 = {
  property1: null,
}; // літеральне
const obj2 = Object();
const obj3 = new Object();

const cat = {
  color: 'black',
  weight: 9,
  breed: 'Maine Coon',
  nickname: 'Ceasar',
  age: 5,
  isSleeping: false,
};

// читання даних з ооб'єктів
console.log(cat);

// alert(cat);

console.log('Коту ' + cat.nickname + ' ' + cat.age + ' років');

// зміна властивостей об'єкта
let age = 5;
// age = age +1;
// age += 1;
// age++;

// cat.age = cat.age + 1;
cat.age++;
cat.color = 'white';

// додати нову властиість об'єкту
cat.isMale = true;

// видалення даних об'єкта
delete cat.isMale;
cat.isSleeping = undefined;

const Cat = function (nickname, breed, color, age, weight, isSleeping) {
  // debugger;

  this.name = nickname;
  this.breed = breed;
  this.color = color;
  this.age = age;
  this.weight = weight;
  this.isSleeping = isSleeping;

  this.meow = function () {
    console.log('meow');
  };
};

const constructedCat = new Cat(
  'Test',
  'Test breed',
  'transparent',
  -5,
  0,
  false
);

const constructedCat2 = Cat(
  'Test 2',
  'Test breed 1',
  'transparent 1',
  213,
  1230,
  true
);

/*
  створити функцію конструктор для об'єктів користувачів
  у користувача має бути:
  ім'я
  прізвище
  стать
  вік
  метод speak

  * властивість (?) повне ім'я, яке повинно повертати стрінгу з ім'ям і прізвищем
  (Петро Іваненко)

*/

const User = function (firstName, lastName, isMale, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isMale = isMale;
  this.age = age;

  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };

  this.speak = function () {
    return 'Hello, my name is ' + this.fullName() + '.';
  };
};

const user1 = new User('Петро', 'Іваненко', true, 30);

console.log(user1.fullName()); // 'Петро Іваненко'

user1.speak(); // 'Hello, my name is Петро Іваненко.'

let a = 10;
let b = 15;
/*
  a + b = x

  10 + 15 = 25
*/

// const text = 'Глава 1\nІм\'я користувача \\';

// alert(text)
// alert(`Глава 1
// Ім'я користувача \\`);

// alert(a + ' + ' + b + ' = ' + (a + b) );
alert(`${a} + ${b} = ${a + b}`);
