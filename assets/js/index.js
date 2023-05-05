// function MyArray() {
//   this.length = 0;
// }

class MyArray {
  constructor() {
    this.length = 0;
  }

  push(newElem) {
    // записати елемент
    this[this.length] = newElem;
    // оновили довжину масиву
    this.length++;
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

  
}

const myArr1 = new MyArray();
myArr1.push(1);
myArr1.push(5);
myArr1.push(8);

// for (const number of myArr1) {
//   console.log(number);
// }

const arr = [];
