'use strict';

// const symbol1 = Symbol('test');

// const symbol2 = Symbol('test');

// console.log(symbol1 === symbol2);

const user = {
  userName: 'aonfeuf2324',
  password: '39j20jn483gndlsdnf48tqjd094',
  email: 'test@test.test',
  [Symbol('test')]: 'secret',
  0: 'asdasf',
};

// const userSymbols = Object.getOwnPropertySymbols(user);
// user[userSymbols[0]]
const [symbol1] = Object.getOwnPropertySymbols(user);
