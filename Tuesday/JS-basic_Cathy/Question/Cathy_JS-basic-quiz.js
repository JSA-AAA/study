1.	写出以下返回值：(在注释后)
type of null //: 
type of undefined //:
const a = [ ]
b = a
console.log(a, b) //:
b[0] = 1
console.log(a,b) //:
console.log(null == undefined) //:
console.log(NaN == NaN) //:
console.log(0 == null) //:
console.log(' \n\n\n' == false) //:
2.	在严格模式下，以下哪个模块是正确的：（ ）
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
sayHello();
4.	在注释后写出输出结果
function exampleFunc() { 
	console.log( expFunc );  // ：
	function expFunc( ) { 
		alert( 'first' ); 
	} 
	function expFunc() { 
		alert( 'second' ); 
	}; 
	console.log( expFunc ); //：
	var expFunc = 'str'; 
	console.log( expFunc ); //：
} 
exampleFunc();

let arr = [11, 22, 21, 23, 55]
let brr = arr.slice( -3, 4 )
console.log( brr ); //:
5.	result of ["1", "2", "3"].map(parseInt), why?
6.	运用位运算知识写一个function判断一个数是不是2的幂。
Plus:
//1.注释后写出结果
const a = [[1,2],[3,4]];
const ws = new WeakSet(a);
console.log(ws.size());//:
ws.forEach(element => {
  console.log(element)
})//:

const map = new Map();

map.set(1,'a');
map.set(1,'b');
console.log(map.get(1))//:

const map2 = new Map();
const k1 = ['a'];
const k2 = ['b'];

map.set(k1, 1);
map.set(k2, 2);
console.log(map.get(k1))//:

console.log(c); //:
var c = 'c';

//reduce,map, filter, find, every, some, entries, etc 
const arr = [11,22,23,24,25,26];
console.log(arr.shift());//:
console.log(arr.reduce((a,b)=>a+b));//:
console.log(arr.find((n)=>n>22));//:
for (let [index, element] of arr.entries()){
  console.log(index, element) //:
}
console.log(arr.filter(x=>true))//:
console.log(arr.every(x => x==='22'))//:
console.log(arr.map(x=>1))//:
console.log(arr.some(x=> x>22))//:

//2.使用arrow function 的好处












