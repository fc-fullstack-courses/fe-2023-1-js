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

// let shouldContinue = true;
// while (shouldContinue) {
//   console.log('ітерація');

//   shouldContinue = confirm('Продовжувати цикл?');
// }
/*
  у циклі залогуйте в консолі парні числа від 0 до 10 
*/

let counter = 0;
// while (counter <= 10) {
//   console.log(counter);

//   counter += 2;
// }
while (counter <= 10) {
  counter++;

  if(counter % 2 !== 0) {
    continue; // достроково перейти на наступну ітерацію
  }

  console.log(counter);

}
