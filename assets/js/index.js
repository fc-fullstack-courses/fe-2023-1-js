'use strict';

// const names = ['Name 1', 'Name 2', 'Name 3', 'Name 1'];

const arr1 = [1, 2, 3, 4];

const arr2 = arr1;

const set = new Set();

// додати значення до сету
set.add(10);
set.add('test');
set.add([1, 2, 3]); // різні
set.add(arr1); // однакові
set.add('10');
set.add('test');
set.add([1, 2, 3]); // різні
set.add(arr2); // однакові

// перевірка існування в сеті
const isNameInSet = set.has('Test Name');
const is10InSet = set.has(10);

// видалення елемента з сету
const isArr1Deleted = set.delete(arr1);
const isArr2Deleted = set.delete(arr2);

// видалити всі значення з сету
// set.clear();

// set.forEach((value, index, set) => {
//   console.log(`value is ${value}`);
//   console.log(`index is ${index}`); // те саме що і value
//   console.log(set);
// });

const set2 = new Set([1, 2, 3, 76, 8, 3, 587]);

for (const key of set2.keys()) {
  console.log(key); // однаково з value
}

for (const entry of set2.entries()) {
  console.log(entry);
}

/*
  з двох масивів отримати набір унікальних значень
*/

const names1 = ['Test', 'User', 'Anton', 'Petro'];
const names2 = ['Anna', 'Andriy', 'User'];

// const uniqueNames = new Set(names1.concat(names2));

// const allNames = [...names1, ...names2, 'Test'];
// const uniqueNames = new Set(allNames);

// names1.forEach((value) => {
//   uniqueNames.add(value);
// });

// const user = {
//   name: 1,
// };

// const name = 'Anton';

// const arr3 = [...uniqueNames];

const uniqueNames = [...new Set([...names1, ...names2, 'Test'])];

// Map
// пари ключ -> значення
// кожен ключ унікален
// зберігається порядок вставки значень
// ключем може бути будь-що
// є вбудований ітератор
// рахує свій розмір
// більш отимізована під часті ставки або видалення пар ключ -> значення

const map1 = new Map();

const keyMap = function () {};

// додавання пари до мапи
map1.set(12345, 'value 1');
map1.set('12345', 'value 2');
map1.set(null, 'why?');
map1.set(keyMap, true);
map1.set(12345, 'value 10'); // перезапис значення

// отримання значення, пов'язаного з ключем
const value1 = map1.get(12345);
const value2 = map1.get(123456); // undefined

// перевірка існування в мапі
const mapHas1 = map1.has('test');
const mapHas2 = map1.has(null);

// видалення з мапи
map1.delete(keyMap);

// видалити все
// map1.clear()

// forEach
// map1.forEach((value, key, map) => {
//   console.log(value);
//   console.log(key);
//   console.log(map);
// })

const map2 = new Map([
  ['key', 'value'], // tuple / кортеж - массив с певною кількістю значень
  ['key2', 213445],
  [213423543, false],
]);

const map3 = new Map(map2);

const mapIter = map3.keys();

// for (const key of mapIter) {
//   console.log(key);
// }

const mapValuesIter = map3.values();

// for (const value of mapValuesIter) {
//   console.log(value);
// }

// const mapEntriesIter = map3.entries();

// for (const entry of mapEntriesIter) {
//   // console.log(entry);
//   console.log(`key is: ${entry[0]}`);
//   console.log(`value is: ${entry[1]}`);
// }

for (const [key, value] of map3.entries()) {
  // const [key, value] = entry;

  console.log(`key is: ${key}`);
  console.log(`value is: ${value}`);
}

const vocabulary = new Map();

vocabulary.set('test', 'тест');
vocabulary.set('cat', 'кіт');
vocabulary.set('food', 'їжа');
vocabulary.set('go', 'йти');
vocabulary.set('dog', 'собака');
vocabulary.set('eats', 'їсть');
vocabulary.set('tomato', 'помідор');
vocabulary.set('boring', 'нудний');

const testString = 'Boring dog eats food dolphin test cat eats tomato';

// const translate = (str, vocab = vocabulary, separator = ' ') => {
//   const lowerCaseStr = str.toLowerCase();

//   const words = lowerCaseStr.split(separator);

//   const translatedWords = [];

//   for (const word of words) {
//     if (vocab.has(word)) {
//       const translatedWord = vocab.get(word);

//       translatedWords.push(translatedWord);
//     } else {
//       translatedWords.push(word);
//     }
//   }

//   const translatedString = translatedWords.join(separator);
//   return translatedString;
// };

const translate = (str, vocab = vocabulary, separator = ' ') =>
  str
    .toLowerCase()
    .split(separator)
    .map((word) => (vocab.has(word) ? vocab.get(word) : word))
    .join(separator);
