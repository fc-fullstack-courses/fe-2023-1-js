// function MyArray() {
//   this.length = 0;
// }

class MyArray {
  constructor() {
    this.length = 0;
  }

  push(...elements) {
    for (const elem of elements) {
      this[this.length] = elem;
      this.length++;
    }

    return this.length;
  }

  pop() {
    if (this.length > 0) {
      const lastItem = this[this.length - 1];
      delete this[--this.length];

      return lastItem;
    }

    return undefined;
  }

  [Symbol.iterator]() {
    let i = 0;
    const context = this;
    return {
      next: function () {
        return {
          done: i >= context.length,
          value: context[i++],
        };
      },
    };
  }
}

const myArr1 = new MyArray();
myArr1.push(1);
myArr1.push(5);
myArr1.push(8);

for (const number of myArr1) {
  console.log(number);
}

const arr = [1, 3, 4];
const iter = arr[Symbol.iterator]();
