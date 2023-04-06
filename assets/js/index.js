// console.log(typeof null);
/* Math */
// console.log(270 / 4);
// console.log(270 % 4);
// console.log(270 * 4);
// console.log((-2) ** 2);

let counter = 5;
console.log(counter);
console.log(++counter);
console.log(counter);
console.log(counter++);
console.log(counter);

console.log(+10);
console.log(-100);
let value = '0xFF';
console.log(+value); // перевести до числа

/* Логічні оператори */
console.log(!false);
console.log(!!true);
let notBoolean = '';
console.log(!!notBoolean); // перевести до булевеого

let maxValue = 100;
let data = 50000000;
console.log(10 < 5);
console.log(data <= maxValue);
console.log('test' > 'text');
console.log('============================')
let number = -305;
console.log(number >= 0);
console.log(number <= 100);
console.log(number >= 0 && number <= 100); // лог І
console.log(number >= 0 || number <= 100); // лог АБО
// console.log(number >= 0 || number <= -500000);
console.log( NaN && undefined && false);
console.log( NaN || 5 || 10);
// bad
// console.log(500 != 5000); // true
// console.log(100 == 100); // true
// console.log(50 == '50'); // true

console.log( 50 === '50'); // false
console.log( 50 !== 100); // true
console.log('======= Присвоєння ==================');
let test1;
test1 = 'asddsfgfdd';
let number1 = 30;

// number1 = number1 + 10;
// number1 += 10;
number1 /= 3;

console.log(number1);