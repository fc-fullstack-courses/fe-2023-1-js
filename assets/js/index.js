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

// names.pop();
// names.pop();
// names.pop();

// додає до початку масиву 
names.unshift('Test');
names.unshift('Test 2', 'Test 3');

// видаляє елемент з початку масиву
const deletedName2 = names.shift();