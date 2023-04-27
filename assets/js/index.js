'use strict';

// let i = 0;

// function test() {
//   i++;
//   // debugger;
//   test();
// }

function countdown(number) {
  // debugger;
  console.log(number);
  if (number > 0) {
    // рекурсивний випадок
    countdown(number - 1);
  }

  return 'end'; // база рекурсії
}

function logRange(start, end) {
  console.log(start);

  if (start < end) {
    // debugger;
    logRange(start + 1, end);
  }
}

const tree = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 2,
    },
    right: {
      value: 3,
    },
  },
  right: {
    value: 4,
    left: {
      value: 2,
      right: {
        value: 1,
        left: {
          value: 4,
        },
      },
    },
  },
};

function reduceTree (tree) {
  debugger;
  let result = tree.value;

  if(tree.left) {
    result += reduceTree(tree.left);
  }

  if(tree.right) {
    result += reduceTree(tree.right);
  }

  return result;
}