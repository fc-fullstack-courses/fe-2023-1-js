'use strict';

const objectStr = new String('test');
const primitiveStr = 'test';

// console.log(objectStr.length);
// console.log(primitiveStr.length);

// перетоврити значення на булеве
// !!'test'
const test = Boolean('test');
// console.log(test);

const str = 'Test string';

// console.log(str.includes('test'));
// console.log(str.indexOf('s')); findIndex

// str.toUpperCase()
// str.toLowerCase()

const badString =
  '                                                                         Anton                             Antonenko              ';
const trimmedString = badString.trim();

const fixedString = str.replace('string', 'Null');

const testSubstring = fixedString.substring(0, 4);

const stringsArr = fixedString.split('');
const testString = 'Word antoher       test 12345. X23';
const stringsArr2 = testString.split(' ');

function betterTrim(str) {
  const words = str.split(' ');

  const filteredWords = words.filter(function (word) {
    return word !== '';
  });

  const trimmedString = filteredWords.join(' ');
  return trimmedString;
}

/*
  Створити функцію яка приймає рядок
  і повертає нову версію цього рядка,
  у якому у кожного символу буде випадковий регістр
*/
/**
 * @param {string} str
 * @returns {string}
 */
function toRandomCase(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (Math.random() < 0.5) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

/*
  Створити функцію яка приймає рядок
  і повертає нову версію цього рядка,
  у якому кожне слово гарантовано написано 
  з великої літери

  'test string abc' => 'Test String Abc'
*/
/**
 *
 * @param {string} str
 * @returns {string}
 */
function capitilizeString(str) {
  const words = str.split(' ');
  // console.log(words);

  for (let i = 0; i < words.length; i++) {
    // const firstLetter = words[i][0] ;
    const word = words[i];
    const firstLetter = word[0].toUpperCase();

    words[i] = firstLetter + word.slice(1);
  }

  return words.join(' ');
}

/**
 *
 * @param {string} str
 * @returns {string}
 */
function capitilizeString2(str) {
  const words = str.split(' ');

  const capitalizedWords = words.map(function (word) {
    // const firstLetter = word[0].toUpperCase();
    // return firstLetter + word.slice(1);
    return word[0].toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(' ');
}

const capitilizeTest = 'test string abc tst zcjno dgijds';
