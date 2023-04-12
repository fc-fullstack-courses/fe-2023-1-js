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
    console.log('meow')
  }
};

const constructedCat = new Cat(
  'Test',
  'Test breed',
  'transparent',
  -5,
  0,
  false
);

const constructedCat2 = Cat('Test 2', 'Test breed 1', 'transparent 1',213, 1230, true);
