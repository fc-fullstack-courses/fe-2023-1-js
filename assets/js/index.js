'use strict';

let value = 10;

function log() {
  let test = 50;
  console.log(`value in log: ${value}`);
}

function wrapper() {
  let value = 20;

  if (true) {
    const test1 = 12343;
    console.log('true');
  }

  console.log(`value in wrapper: ${value}`);

  console.log(`log is next`);

  // замыкание
  function log() {
    // debugger;
    let test = 50;
    console.log(`value in log: ${value}`);
  }

  log(); // 10
}

// log(); // 10

wrapper(); // 20

// console.log(`value outside: ${value}`);

function createCounter() {
  let i = 0; // замкнена змінна для counter

  function counter() {
    i++;
    return i;
  };

  return counter;
}

const counter1 = createCounter();
const counter2 = createCounter();
