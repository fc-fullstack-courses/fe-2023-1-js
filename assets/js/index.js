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
const obj1 = {}; // літеральне
const obj2 = Object();
const obj3 = new Object();

const cat = {
  color: 'black',
  weight: 9,
  breed: 'Maine Coon',
  nickname: 'Ceaser',
  age: 5,
  isSleeping: false,
}

