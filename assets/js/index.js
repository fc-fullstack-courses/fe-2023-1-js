'use strict';

// деструктурізація - особливий спосіб створення змінних

const phone = {
  manufacturer: 'Motorola',
  color: 'blue',
  isOn: true,
  screenDimensions: {
    width: 2400,
    height: 1080,
  },
  weight: {
    unit: 'gram',
    value: 330,
  },
  cpu: {
    name: 'Snapdragon 730',
    cores: [
      {
        id: 0,
        name: 'Cortex 70',
        frequency: {
          unit: 'GHz',
          value: 2.2,
        },
      },
      {
        id: 1,
        name: 'Cortex 70',
        frequency: {
          unit: 'GHz',
          value: 2.2,
        },
      },
      {
        id: 2,
        name: 'Cortex 53',
        frequency: {
          unit: 'GHz',
          value: 1.8,
        },
      },
      {
        id: 3,
        name: 'Cortex 53',
        frequency: {
          unit: 'GHz',
          value: 1.8,
        },
      },
    ],
  },
};

// console.log(phone.color);
// console.log(phone.screenDimensions.width);
// console.log(phone.cpu.cores[0].frequency.value);

// const firstCore = phone.cpu.cores[0];
// const phoneColor = phone.color;

const cpu = {};

const {
  color: phoneColor,
  manufacturer,
  weight: { value: phoneWeight },
  screenDimensions: { width },
  screenDimensions,
  cpu: phoneCpu,
} = phone;
// const { value: phoneWeight } = weight;

// console.log(phoneColor);
// console.log(screenDimensions);

const user = {
  id: 135465446,
  email: 'sadsadsa',
  password: '3ji0wdn084jht0ewifdsa0fne0gfr',
  age: 42,
  isMale: false,
};

const { password, email, ...restOfUser } = user;

const numbers = [10, 45, 79, 3218, 87987, -45, -61, 3.13, -645546];

// const firstNumber = numbers[0];
const [, , third, , , sixth] = numbers;

const [first, , , forth, ...restNumbers] = numbers;

let value1 = 10;
let value2 = 20;

// let temp = value1;
// value1 = value2;
// value2 = temp;

[value1, value2] = [value2, value1];

const testArr = [10, 20];

let test1;
let test2;

[test1, test2] = testArr;
