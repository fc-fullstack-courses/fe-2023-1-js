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

function betterTrim (str) {
  const words = str.split(' ');

  const filteredWords = words.filter(function(word) {
    return word !== '';
  });

  const trimmedString = filteredWords.join(' ');
  return trimmedString;
}