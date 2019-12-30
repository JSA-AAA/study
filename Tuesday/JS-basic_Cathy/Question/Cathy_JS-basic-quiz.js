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



