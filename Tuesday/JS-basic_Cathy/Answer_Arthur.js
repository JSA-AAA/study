1.	写出以下返回值：(在注释后)
type of null //: object
type of undefined //: undefined
const a = []
b = a
console.log(a, b) //:[] []
b[0] = 1
console.log(a, b) //: error
console.log(null == undefined) //: true
console.log(NaN == NaN) //: false
console.log(0 == null) //: false
console.log(' \n\n\n' == false) //: true
2.	在严格模式下，以下哪个模块是正确的：（B ）
"use strict";
A.
  if （true）{
  function f（ ）{ }
  f() ；
}
B.
function f1() {
  function f2() { }
}
C.
  while(a === b){
  function f() { }
  f();
}
3.	写出输出结果: 0, 1, 2, 3, 4, error
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sayHello();
4.	在注释后写出输出结果
function exampleFunc() {
  console.log(expFunc);  // ：a function with second? 
  function expFunc() {
    alert('first');
  }
  function expFunc() {
    alert('second');
  };
  console.log(expFunc); //：a function with second? 
  var expFunc = 'str';
  console.log(expFunc); //：str
}
exampleFunc();

let arr = [11, 22, 21, 23, 55]
let brr = arr.slice(-3, 4)
console.log(brr); //:【21，23】
5.	result of["1", "2", "3"].map(parseInt), why ?
  [1, NaN, NaN]
parseInt(‘1’, 0); // radix为0时，使用默认的10进制。
parseInt(‘2’, 1); // radix值在2-36，无法解析，返回NaN
parseInt(‘3’, 2); // 基数为2，2进制数表示的数中，最大值小于3，无法解析，返回NaN
6.	运用位运算知识写一个function判断一个数是不是2的幂。
function check(n) {
  return ((n > 0) && ((n & (n - 1)) == 0));
}



//1.注释后写出结果
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
console.log(ws.size());//:weakset does not have size func
ws.forEach(element => {
  console.log(element)
})//:cannot use foreach because we can not make sure if the reference still there or not

const map = new Map();

map.set(1, 'a');
map.set(1, 'b');
console.log(map.get(1))//:b

const map2 = new Map();
const k1 = ['a'];
const k2 = ['b'];

map.set(k1, 1);
map.set(k2, 2);
console.log(map.get(k1))//:1

console.log(c); //:undefined
var c = 'c';

//reduce,map, filter, find, every, some, entries, etc 
const arr = [11, 22, 23, 24, 25, 26];
console.log(arr.shift());//:11
console.log(arr.reduce((a, b) => a + b));//:120
console.log(arr.find((n) => n > 22));//:23
for (let [index, element] of arr.entries()) {
  console.log(index, element) //:
}
//0 22
//1 23
//2 24
//3 25
//4 26
console.log(arr.filter(x => true))//:[22, 23, 24, 25, 26]
console.log(arr.every(x => x === '22'))//:false
console.log(arr.map(x => 1))//:[1,1,1,1]
console.log(arr.some(x => x > 22))//:true

//2.使用arrow function 的好处
1. this对象的指向是可变的，但是在箭头函数中，它是固定的。
2. 简化函数声明过程


