'use strict';

// const btn = document.querySelector('button');

// const btnHandler = () => {
//   for (let i = 0; i < 5_000; i++) {
//     console.log('test');
//   }

//   setTimeout(() => {
//     console.log('timeout')
//   }, 2000);

// }

// btn.addEventListener('click', btnHandler);

// async
function callback2() {
  // sync
  console.log(`timeout 0.2`);
  console.log(`timeout 0.2 2`);
  // async
  // setTimeout(() => console.log(`timeout 0.2 2 xxasd`),0)
  //sync
  console.log(`timeout 0.2 3`);
}

// setTimeout повертає id таймера
// const timeout1 = setTimeout(callback2, 0);
// // зупинити таймер з певним id
// clearTimeout(timeout1);

// const intervalId = setInterval(() => {
//   console.log('interval');
// }, 1000);

// clearInterval(intervalId);

const ADMIN_PASSWORD = '12345';

// const intervalId2 = setInterval(() => {
//   const userPass = prompt('password');

//   if (userPass === ADMIN_PASSWORD) {
//     clearInterval(intervalId2);
//   }
// }, 5000);

/*
  Створити функцію, яка буде виводити в консоль числа
  від 1 до 20 з проміжком часу між логіми в 100 мс

  Можливі рішення через 
    setInterval - if, clearInterval
    setTimeout - рекурсія і if

*/

function countInterval() {
  let i = 0;

  const id = setInterval(() => {
    console.log(++i);

    if (i >= 20) {
      clearInterval(id);
    }
  }, 100);
}

function countTimeout() {
  let i = 0;

  function callback() {
    if (i < 20) {
      console.log(++i);
      setTimeout(callback, 100);
    }
  }

  setTimeout(callback, 100);
}

const user = {
  id: 0,
  login: 'test2134',
  phoneNumber: null,
  friends: undefined,
  logout: function () {
    console.log('logout');
  },
};

// створення JSON (серіалізація)
const jsonUser = JSON.stringify(user);

// отримання даних з JSON (десеріалізація)
const restoredUser = JSON.parse(jsonUser);

const obj = {};

const objCopy = JSON.parse(JSON.stringify(obj));
const objCopy2 = structuredClone(obj);

function someAsyncFunc() {
  setTimeout(() => {
    // дія 1
    setTimeout(() => {
      // дія 2
      setTimeout(() => {
        // 3
        if (Math.random() > 0.5) {
          setTimeout(() => {
            // 4
          }, 0);
        } else {
          setTimeout(() => {
            // 5
          }, 0);
        }
      }, 0);
    }, 1000);
  }, 1000);
}

const executor = (resolve, reject) => {
  console.log(2);
  // кажемо що проміс виконано і резульат роботи - 10
  setTimeout(() => resolve(10), 3000);
  // кажемо що проміс відхилено і резульат роботи - 'bad stuff happened'
  // при відхиленні промісу викидається помилка
  setTimeout(() => reject('bad stuff happened'), 10);
};

console.log(1);

// const promise = new Promise(executor);

// promise.then(
//   (fullfilledValue) => {
//     // виконується при успішному завершені промісу
//     console.log('promise fullfilled');
//     console.log(fullfilledValue);
//   },
//   (rejectedValue) => {
//     // запускається при відхиленні промісу
//     console.log(rejectedValue);
//   }
// );

// promise.catch((rejectedValue) => {
//   // запускається при відхиленні промісу
//   console.log(rejectedValue);
// });

console.log(3);

// const result = fetch('./../user.json');

// const promise1 = result.then((response) => {
//   // console.log(response);
//   // const jsonPromise = response.json();

//   // результат колбеку повертається у promise1
//   return response.json();
// });

// const promise2 = promise1.then((users) => {
//   console.table(users);

//   return users.filter((user) => user.phoneNumber);
// });

// promise2.then((users) => {

// })

// fetch('./../usr.json')
//   .then(
//     (response) => {
//       console.log('then 1');
//       return response.json();
//     }
//     // (err) => {
//     //   console.log('error in 1 promise');
//     //   console.log(err);
//     // }
//   )
//   .then(
//     (users) => {
//       console.log('then 2');
//       return users.filter((user) => user.phoneNumber);
//     }
//     // (err) => {
//     //   console.log('error in 2 promise');
//     //   console.log(err);
//     //   return err;
//     // }
//   )
//   .then(
//     (userWithPhones) => {
//       console.log('then 3');
//       console.log(userWithPhones);
//     }
//     // (err) => {
//     //   console.log('error in 3 promise');
//     // }
//   )
//   .catch((err) => {
//     console.log('error happened somewhere');
//     console.log(err);
//   });
//   console.log(err);

// fetch('./../user.json')
//   .then((response) => response.json())
//   .then((users) => users.filter((user) => user.phoneNumber))
//   .then((userWithPhones) => {
//     console.table(userWithPhones);
//   });

const root = document.querySelector('#root');
const spinner = document.querySelector('#spinner');

fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((photos) => {
    root.append(JSON.stringify(photos, null, 4));
  })
  .catch((err) => {
    root.append('Error loading photos!');
  })
  .finally(() => {
    spinner.remove();
  });
