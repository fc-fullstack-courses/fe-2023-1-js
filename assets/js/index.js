// // console.log(typeof null);
// /* Math */
// // console.log(270 / 4);
// // console.log(270 % 4);
// // console.log(270 * 4);
// // console.log((-2) ** 2);
// /*
// let counter = 5;
// console.log(counter);
// console.log(++counter);
// console.log(counter);
// console.log(counter++);
// console.log(counter);

// console.log(+10);
// console.log(-100);
// let value = '0xFF';
// console.log(+value); // перевести до числа
// */
// /* Логічні оператори */
// console.log(!false);
// console.log(!!true);
// let notBoolean = '';
// console.log(!!notBoolean); // перевести до булевеого

// let maxValue = 100;
// let data = 50000000;
// console.log(10 < 5);
// console.log(data <= maxValue);
// console.log('test' > 'text');
// console.log('============================')
// let number = -305;
// console.log(number >= 0);
// console.log(number <= 100);
// console.log(number >= 0 && number <= 100); // лог І
// console.log(number >= 0 || number <= 100); // лог АБО
// // console.log(number >= 0 || number <= -500000);
// console.log( NaN && undefined && false);
// console.log( NaN || 5 || 10);
// // bad
// // console.log(500 != 5000); // true
// // console.log(100 == 100); // true
// // console.log(50 == '50'); // true

// console.log( 50 === '50'); // false
// console.log( 50 !== 100); // true
// console.log('======= Присвоєння ==================');
// let test1;
// test1 = 'asddsfgfdd';
// let number1 = 30;

// // number1 = number1 + 10;
// // number1 += 10;
// number1 /= 3;

// console.log(number1);

// console.log('first');

let condition = false;

let a;
let b;

// alert(condition);
let userAnswer;
// userAnswer = prompt('Це ми дали промпту');

// console.log(userAnswer);

// if (a > b) {
//   // особлива зона
//   // виконується тількі якщо вираз в () істиний
//   console.log('second');
// } else if (b > a) {
//   // виконується якщо блоки перед ним не виконалися
//   // і якщо його вираз істинний
//   console.log('else if');
// } else {
//   // виконується коли інші умови не виколалися
//   console.log('condition was false');
// }

/*
  в файлі записати в змінну якийсь пароль
  при запуску сторінки спитати у користувача пароль

  якщо пароль збігається з паролем який збережено у файлі
  то сказати користувачу що він увійшов в систему

  якщо не збігається- то сказати що він не війшов
*/

//  в файлі записати в змінну якийсь пароль
// let password = 12345;
// // при запуску сторінки спитати у користувача пароль
// let userPassword = +prompt('Вкажіть пароль');
// console.log(typeof userPassword);
// //  якщо пароль збігається з паролем який збережено у файлі
// //  то сказати користувачу що він увійшов в систему
// if (password === userPassword) {
//   alert('Ви увійшли');
// } else {
//   // якщо не збігається - то сказати що він не війшов
//   console.log('Ви не ввійшли');
// }

// за допомогою prompt отримати у користувача число
// і вивести значення квадрату числа
// let number1 = +prompt();
// let result1 = number1 ** 2;
// console.log(number1 ** 2);
// console.log(number1 * number1);
// console.log(result1);
// за допомогою prompt отримати у користувача число хвилин
// вивести йому кількість секунд
// let minutes = +prompt();
// console.log(minutes * 60);

// if () {

// } else {}

// if () {

// } else if {}

// if () {

// } else if {

// } else {

// }

// let number = +prompt();

// // кладемо значення змінної
// switch (number) {
//   // описуємо варанти значененя вказаної змінної
//   // number === case
//   case 0: {
//     // що потрібно зробити
//     alert('Нуль');
//     break; // потрібно щоб switch не падав далі
//   }
//   case 1: {
//     alert('Один');
//     break;
//   }
//   case 2: {
//     alert('Два');
//     break;
//   }
//   default: {
//     // має бути останнім,
//     // праціює якщо нічого іншого не підійшло
//     alert('Число не підтримується');
//   }
// }

let number = 5;

switch (number) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5: {
    console.log('small number');
    break;
  }
  case 100:
  case 101:
  case 102: {
    console.log('big number');
    break;
  }
  default: {
    console.log('unknown number');
  }
}
