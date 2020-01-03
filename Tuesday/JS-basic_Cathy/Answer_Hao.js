1.	写出以下返回值：(在注释后)
typeof null //: object
typeof undefined //: undefined
const a = [ ]
b = a
console.log(a, b) //: [] []
b[0] = 1
console.log(a,b) //: [1] [1]
console.log(null == undefined) //: true
console.log(NaN == NaN) //: false
console.log(0 == null) //: false
console.log(' \n\n\n' == false) //: true

2.	在严格模式下，以下哪个模块是正确的：（ B ）
"use strict";
A.	
if （true）{
	function f（ ）{ }
	f( )；
}
B.	
function f1( ){
	function f2( ){ }
}
C.	
while (a===b){
	function f( ){ }
	f( );
}
3.	写出输出结果
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sayHello(); // 0 1 2 3 4 undefined
4.	在注释后写出输出结果
function exampleFunc() { 
	console.log( expFunc );  // ：function def 'second'
	function expFunc( ) { 
		alert( 'first' ); 
	} 
	function expFunc() { 
		alert( 'second' ); 
	}; 
	console.log( expFunc ); //：function def 'second'
	var expFunc = 'str'; 
	console.log( expFunc ); //： str
} 
exampleFunc();

let arr = [11, 22, 21, 23, 55]
let brr = arr.slice( -3, 4 ) 
console.log( brr ); //: 21 23
5.	result of ["1", "2", "3"].map(parseInt), why?
  array indices will be supplied to the radix parameter requiored by parseInt,
  parseInt('1', 0)
  parseInt('2', 1) // 1 is not valid radix numebr 
  parseInt('3', 2) // 3 is not valid binary number

6.	运用位运算知识写一个function判断一个数是不是2的幂。
function isExponentOfTwo (number) {
  return Boolean(!(number & (number - 1)) && number) 
}

// plus

//1.注释后写出结果
const a = [[1,2],[3,4]];
const ws = new WeakSet(a);
console.log(ws.size());//: error
ws.forEach(element => {
  console.log(element)
})//: error

const map = new Map();

map.set(1,'a');
map.set(1,'b');
console.log(map.get(1))//: b

const map2 = new Map();
const k1 = ['a'];
const k2 = ['b'];

map.set(k1, 1);
map.set(k2, 2);
console.log(map.get(k1))//: 1

console.log(c); //: undefined
var c = 'c';

//reduce,map, filter, find, every, some, entries, etc 
const arr = [11,22,23,24,25,26];
console.log(arr.shift());//: 11
console.log(arr.reduce((a,b)=>a+b));//: 120
console.log(arr.find((n)=>n>22));//: 23
for (let [index, element] of arr.entries()){
  console.log(index, element) //: [0, 22], [1, 23], [2, 24], [3, 25], [4, 26]
}
console.log(arr.filter(x=>true))//: [22, 23, 24, 25, 26]
console.log(arr.every(x => x==='22'))//: false
console.log(arr.map(x=>1))//: [1, 1, 1, 1, 1]
console.log(arr.some(x=> x>22))//: true

//2.使用arrow function 的好处
easy to use
function context(this) is bound with the defined context