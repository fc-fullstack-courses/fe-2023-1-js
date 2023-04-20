function MyArray() {
  this.length = 0;
}

// const myArrayProto = {
//   push: function (newElem) {
//     // записати елемент
//     this[this.length] = newElem;
//     // оновили довжину масиву
//     this.length++;
//     return this.length;
//   },
// };

function MyArrayProto() {
  this.push = function (newElem) {
    // записати елемент
    this[this.length] = newElem;
    // оновили довжину масиву
    this.length++;
    return this.length;
  };

  this.pop = function () {

    if(this.length > 0) {
      const lastItem = this[this.length - 1];
      delete this[--this.length];
  
      return lastItem;
    }

    return undefined;
  };
}

// const myArrayProto = new MyArrayProto();
// MyArray.prototype = myArrayProto;

MyArray.prototype = new MyArrayProto();

const myArr1 = new MyArray();

const arr = [];
