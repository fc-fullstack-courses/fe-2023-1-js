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
