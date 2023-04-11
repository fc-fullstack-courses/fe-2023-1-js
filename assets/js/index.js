// let condition = true;

// let counter = 0;
// while (counter < 3) {
//   // тіло циклу
//   counter++;
//   console.log('ітерація');
// }

// let counter = 0;

// while (true) {
//   console.log('ітерація');

//   if(counter++ > 2) {
//     break; // зупиняє виконання циклу
//   }
//   console.log('ітерація 2');
// }

let shouldContinue = true;
while (shouldContinue) {
  console.log('ітерація');

  shouldContinue = confirm('Продовжувати цикл?');
}