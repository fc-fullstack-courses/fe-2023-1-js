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

let test = myFunction();
console.log(test);
myFunction();
// myFunction();

const userInput = 12345;
