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

// for ( let counter = 100 ; counter < 10 ; counter++ ) {

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

for (let counter = 0; counter <= 10; counter += 2) {
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
  * знайдіть суму всіх чисел від 1 до 100 (1+2+3+...+99+100)
*/

const SAVED_PASSWORD = 'admin';
const MAX_TRIES = 5;

// for(let tries = 0; tries < MAX_TRIES; tries++) {
//   const userPassword = prompt('enter password');

//   if(userPassword === SAVED_PASSWORD) {
//     alert('Ви впориались за '+ (tries + 1) + ' спроб');
//     break;
//   }
// }
let tries = 0;

// while(tries < MAX_TRIES) {
//   const userPassword = prompt('enter password');

//   if(userPassword === SAVED_PASSWORD) {
//     alert('Ви впориались за '+ (tries + 1) + ' спроб');
//     break;
//   }

//   tries++;
// }

// let userPassword;
// while (userPassword !== SAVED_PASSWORD) {
//   userPassword = prompt('enter password');

//   tries++;
// }

// alert('Ви впориались за ' + tries  + ' спроб');

// for (let counter = 30; counter >= 0; counter--) {
//   console.log(counter);
// }

// let countdown = 30;

// while(countdown >= 0) {
//   console.log(countdown);
//   countdown--;
// }

// let i = 0;
let result = 0;
// while (i <= 100) {
//   result = result + i;
//   i++;
// }

// for(let i = 0;i <= 100; i++) {
//   result += i;
// }

// console.log(result);

