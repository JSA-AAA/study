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