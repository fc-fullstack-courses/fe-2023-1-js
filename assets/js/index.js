// alert
// prompt
// console.log

// alert('parameter'); // функція з параметром

// functional expression - функціональний вираз
const myFunction = function () {
  // тіло функціі - виконуюєтьс коли функцію запускають

  const userInput = prompt('Введіть ваше ім`я');

  const greetingText = 'Hello ' + userInput;

  console.log(greetingText);

  // повертаємо дані з функції
  // завершує роботу функції
  return greetingText;

  // тут нічого не буде працювати
  alert('test');
};

// let test = myFunction();
// console.log(test);
// myFunction();
// myFunction();

const userInput = 12345;

/*
Завдання на if ... else
Користувач придбав товар у магазині, у якому діє наступна система знижок: при загальній сумі покупок більше ніж 500 грн. застосовується знижка 5%, а якщо чек більше ніж 1500 то знижка складатиме 10%. Запитайте у користувача ціню його покупки та виведіть йому підсумкову ціну з урахуванням можливої знижки.

Завдання на switch
Покупець хоче купити продукт з магазину. В магазині за кожним продуктом закріплена ціна за одиницю. Запитайте у користувача який саме товар і в якій кількості він хоче придбати та поверніть вартість покупки. Ціни товарів зберігайте у окремих змінних

Bonus task
після виконання завдань зробіть функції, які мають містити логіку завдань, але замість простого виводу результати розрахунків потрібно повертати з функцій
*/

// 1
// const startingPrice = +prompt('Яка сума вашої покупки в грн.?');
// let totalPrice;
// // if(startingPrice >= 500 && startingPrice < 1500) {
// //   // totalPrice = startingPrice * 0.95;
// //   totalPrice = startingPrice - (startingPrice * 0.05);
// // } else if (startingPrice >= 1500) {
// //   totalPrice = startingPrice - (startingPrice * 0.1);
// // } else {
// //   totalPrice = startingPrice;
// // }

// if(startingPrice >= 1500) {
//   totalPrice = startingPrice - (startingPrice * 0.1);
// } else if (startingPrice >= 500) {
//   totalPrice = startingPrice - (startingPrice * 0.05);
// } else if (startingPrice >= 0) {
//   totalPrice = startingPrice;
// }

// if(totalPrice > 0) {
//   alert('Vy zaplatuly: '+ totalPrice + ' uah');
// } else {
//   alert('Помилкове введення');
// }

// 2
// const breadPrice = 23;
// const milkPrice = 40;
// const colaPrice = 42;

// const userProduct = prompt('Оберіть ваш товар: хліб, молоко або кола');
// const userProductQuantity = +prompt('Скількі одиниць товару вам потрібно?');

// switch (userProduct) {
//   case 'хліб': {
//     if (userProductQuantity >= 1) {
//       console.log('You pay: ' + userProductQuantity * breadPrice + ' uah');
//     } else {
//       console.log('bad quantity');
//     }
//     break;
//   }
//   case 'молоко': {
//     if (userProductQuantity >= 1) {
//       console.log('You pay: ' + userProductQuantity * milkPrice + ' uah');
//     } else {
//       console.log('bad quantity');
//     }
//     break;
//   }
//   case 'кола': {
//     if (userProductQuantity >= 1) {
//       console.log('You pay: ' + userProductQuantity * colaPrice + ' uah');
//     } else {
//       console.log('bad quantity');
//     }
//     break;
//   }
//   default: {
//     console.log('No such product');
//   }
// }

const getSumOfTwoNumbers = function (number1, number2) {
  // if (
  //   typeof number1 !== 'number' ||
  //   typeof number2 !== 'number' ||
  //   isNaN(number1) ||
  //   isNaN(number2)
  // ) {
  //   return null; // потім тут будемо кидати помилку
  // }

  // const result = number1 + number2;

  // return result;

  if (
    typeof number1 === 'number' &&
    typeof number2 === 'number' &&
    !isNaN(number1) &&
    !isNaN(number2)
  ) {
    const result = number1 + number2;

    return result;
  }

  // якщо ми тут то все погано
  return null;
};

// const res = getSumOfTwoNumbers();
// console.log(res);

// const num1 = +prompt('1');
// const num2 = +prompt('2');

// const res1 = getSumOfTwoNumbers(num1, num2);

// const phoneMaker = function(color, ram, cpu, hasFrontalCamera) {
//   // створюємо телефон

//   return 'phone created';
// }

// зовнішній світ
// const test = 12345;

// if (true) {
//   // тонована машина
//   // const test = false;

//   if (true) {
//     let test = 'asddfdfdsgsds';

//     console.log(test);
//   }

//   console.log(test);

// }

// console.log(test);

// const test1 = function () {
//   var test = 1;

//   console.log(test);
// }

// test1();

// console.log(test);

var test = 98765;

if (true) {
  let test = 12345;
  console.log(test);
}

console.log(test);
