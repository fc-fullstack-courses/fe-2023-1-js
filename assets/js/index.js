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

const tree1 = {
  value: 5,
  left: {
    value: 10,
    left: {
      value: 7,
    },
  },
  right: {
    value: 3,
  },
};

function reduceTree(tree) {
  // debugger;
  let result = tree.value;

  if (tree.left) {
    const leftBranch = reduceTree(tree.left);
    result += leftBranch;
  }

  if (tree.right) {
    result += reduceTree(tree.right);
  }

  return result;
}

function toPower(number, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return number;
  }

  if (exp > 1) {
    return number * toPower(number, exp - 1);
  }

  return 1 / toPower(number, -exp);
}

// toPower(5,3) => 5 * 5 * 5
// toPower(5,2) => 5 * 5
// toPower(5,1) => 5

/*
  зробити рекурсивну функцію яка буде повртати значення
  факторіалу числа. 

  5 = 1 * 2 * 3 * 4 * 5 = 120
  4 = 1 * 2 * 3 * 4 = 24
  3 = 1 * 2 * 3 = 6

*/

function getFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  if (number > 1) {
    return number * getFactorial(number - 1);
  }

  if (number < 0) {
    throw new RangeError(
      'Факторіал можу розраховуватися тількі від ненагатичвних чисел'
    );
  }
}

/*

  зробити функцію, якій ми будемо передавати число
  функція маєповернути стількі відкриваючих та закриваючих дужок
  скільки було вказано


  4 => (((())))
  3 => ((()))
  2 => (())
  1 => ()
*/

function getCircles(number) {
  if (number < 1) {
    throw new RangeError('Некоректне значення number');
  }

  if (number === 1) {
    return '()';
  }

  // return '(' + getCircles(number - 1) + ')';

  return `(${getCircles(number - 1)})`;
}
