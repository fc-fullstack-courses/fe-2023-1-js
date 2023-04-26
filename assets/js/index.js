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

  return {
    increment: function () {
      return ++i;
    },
    decrement: function () {
      return --i;
    },
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

/*
  написати функцію createAdder 
  функція приймає число і повертає іншу функцію
  повернена функція приймає число і повинна складати його
  з аргументом createAdder

  const adder = createAdder(10)  
  adder(30) // 40
  adder(20) // 60
  adder(40) // 100
*/

function createAdder(number) {
  let accumulator = number;

  function adder(num) {
    return (accumulator += num);
  }

  return adder;
}

const adder = createAdder(10);
const res1 = adder(30); // 40
const res2 = adder(20); // 60
const res3 = adder(40); // 100
