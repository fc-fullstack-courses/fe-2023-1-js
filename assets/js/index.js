'use strict';

let value = 10;

function log() {
  let test = 50;
  console.log(`value in log: ${value}`);
}

function wrapper() {
  let value = 20;

  console.log(`value in wrapper: ${value}`);

  console.log(`log is next`);



  log(); // 10
}

// log(); // 10

wrapper(); // 20

// console.log(`value outside: ${value}`);
