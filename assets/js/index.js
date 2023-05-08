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

set.forEach((value, index, set) => {
  console.log(`value is ${value}`);
  console.log(`index is ${index}`); // те саме що і value
  console.log(set);
});

const set2 = new Set([1,2,3,76,8,3,587]);