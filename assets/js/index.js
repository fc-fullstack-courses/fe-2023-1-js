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
const startingPrice = +prompt('Яка сума вашої покупки в грн.?');
let totalPrice;
// if(startingPrice >= 500 && startingPrice < 1500) {
//   // totalPrice = startingPrice * 0.95;
//   totalPrice = startingPrice - (startingPrice * 0.05);
// } else if (startingPrice >= 1500) {
//   totalPrice = startingPrice - (startingPrice * 0.1);
// } else {
//   totalPrice = startingPrice;
// }

if(startingPrice >= 1500) {
  totalPrice = startingPrice - (startingPrice * 0.1);
} else if (startingPrice >= 500) {
  totalPrice = startingPrice - (startingPrice * 0.05);
} else if (startingPrice >= 0) {
  totalPrice = startingPrice;
} 

if(totalPrice > 0) {
  alert('Vy zaplatuly: '+ totalPrice + ' uah');
} else {
  alert('Помилкове введення');
}