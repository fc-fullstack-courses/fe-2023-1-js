// const user1Email = 'test@test.com';
// const user2Email = 'test2@test.com';
// const user3Email = 'test3@test.com';

const userEmails = {
  0: 'test@test.com',
  1: 'test2@test.com',
  2: 'test3@test.com',
  3: 'test4@test.com',
};

const userEmailsArr = new Array(
  'test@test.com',
  'test2@test.com',
  'test3@test.com',
  'test4@test.com'
);

// console.log(userEmails);
// console.log(userEmailsArr);

// Array.isArray(userEmailsArr)

const names = ['Anton', 'Victoria', 'Maxim', 'Oleg', 'Tetiana'];

names.push('Kyrylo');

names.push('Andriy');

names.push('Natalka', 'Taras', 'John');

const deletedName = names.pop();
names.pop();

// names.pop();
// names.pop();
// names.pop();

// додає до початку масиву
names.unshift('Test');
names.unshift('Test 2', 'Test 3');

// видаляє елемент з початку масиву
const deletedName2 = names.shift();

// звідки починати видаляти (індекс в масиві)
// const holidayTeam = names.splice(7);
// const holidayTeam = names.splice(-4);

// скільки видалити
// const soloHoliday = names.splice(-4, 1);

// після видалення додати ще значень
const soloHoliday = names.splice(-4, 0, 'New 1', 'New 2', 'New 3');

// створиту повну копію старого масиву
// const copy1 = names.slice();

// скопіювати з 3 елемента і до кінця
const copy2 = names.slice(3);

// скопіювати з 3 елемента і до 7 не включно
const copy3 = names.slice(3, 7);

/*
  Скопіюйте у нову змінну першу половину існуючого масиву
*/
const solution1 = names.slice(0, names.length / 2);

// новий масив на базі names з двома новими значеннями в кінці
const concated1 = names.concat('Concated', 'Concated 2');

// при конкатенації масиву конкат переносить у новий масив
// дані з масиву-параметру
const concated2 = names.concat(
  'Not array',
  ['Name', 'Name2', 'Name 3', [1, 2, 3]],
  'Not array'
);

// шукає елемент в масиві і овертає вулеву відповідь
// про його наявність
const isAntonInArray = names.includes('Anton');
const isAbracadabraInArray = names.includes('Abracadabra');

// розвертає порядок елементів в масиві
names.reverse();

const everest = [1, -2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, [13]]]];

// стоврє новий масив, я якому розрівнює
// певну кількість рівнів підмассивів
const everest1 = everest.flat(1);

const everest2 = everest.flat(5);
const everest3 = everest.flat(Infinity);

// створює на осонві масиву стрінгу
const namesString1 = names.join();

// вказати розділювач між елементами масиву
const namesString2 = names.join(' -|- ');

// сортування масиву
names.sort();

function sortingFunction(currentValue, nextValue) {
  if (currentValue > nextValue) {
    // сортуємо так щоб nextValue йшов попереду
    return 1;
  } else {
    // сортуємо так щоб nextValue йшов позаду
    return -1;
  }
}

everest3.sort(sortingFunction);

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

function logNames(value, i, arr) {
  // console.log(`========START=========`);
  console.log(`${value} Test`);
  // console.log(i);
  // console.log(arr);
  // console.log(`========END=========`);
}

// names.forEach(logNames);

const numbers = [1, 2, 5, 8, 25, 13];

// function square(number) {
//   console.log(number * number);
// }

// numbers.forEach(square);

numbers.forEach(function (number) {
  console.log(number * number);
});

function mapCallback(number) {
  return number * number;
}

const squaredNumbers = numbers.map(mapCallback);

const allNumbers = [2, 4, 7, 9, 11, 50, -625, 30, 42];

function isOdd(number, i, arr) {
  // if(number % 2 !== 0) {
  //   return true;
  // }
  // return false;
  return number % 2 !== 0;
}

const oddNumbers = allNumbers.filter(isOdd);
const evenNumbers = allNumbers.filter(function (number) {
  return number % 2 === 0;
});

const foundValue = allNumbers.find(function (number, i, arr) {
  return number === 11;
});

const index = allNumbers.findIndex(function (number) {
  return number > 3000000000000000000;
});

const is7There = allNumbers.some(function(number){

  return number === 74545345345345345;
});

const isPositive = allNumbers.every(function(number) {
  return number >=0;
});

