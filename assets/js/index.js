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
// while (counter <= 10) {
//   counter++;
//   if(counter % 2 !== 0) {
//     continue; // достроково перейти на наступну ітерацію
//   }
//   console.log(counter);
// }

// do {
//   // одна гарантована ітерація
//   counter++;
//   // if(counter % 2 !== 0) {
//   //   continue; // достроково перейти на наступну ітерацію
//   // }
//   console.log(counter);
// } while(false)

// for ( ініціалізація ; умова ; крок ) {

// }

// for (let counter = 0; counter <= 10; counter++) {
//   //
//   // if (counter % 2 === 0) {
//   //   console.log(counter);
//   // }

//   // if (counter % 2 !== 0) {
//   //   continue;
//   // }
//   // console.log(counter);
// }

for (let counter = 0; counter <= 10; counter+=2) {
  console.log(counter);
}

// for(;;) {
  // безкінечний
// }

/*
  запитуйте у користувача пароль і порівнюйте його зі
  збереженим паролем доти, доки він не введе правильноий пароль
  можете використовувати будь-який цикл
  зробіть обмеження на кількість спроб (наприклад не більше 5)


  зробіть наступні завдання за допомогою усіх циклів:
  виведіть числа від 30 до 0 (у порядку зменшення)
  * знайдіть суму всіх чисел від 0 до 100 (1+2+3+...+99+100)
*/

let password;