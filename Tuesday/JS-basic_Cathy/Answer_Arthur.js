1.	写出以下返回值：(在注释后)
type of null //: object
type of undefined //: undefined
const a = [ ]
b = a
console.log(a, b) //:[] []
b[0] = 1
console.log(a,b) //: error
console.log(null == undefined) //: true
console.log(NaN == NaN) //: false
console.log(0 == null) //: false
console.log(' \n\n\n' == false) //: true
2.	在严格模式下，以下哪个模块是正确的：（B ）
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
3.	写出输出结果: 0,1,2,3,4, error
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sayHello();
4.	在注释后写出输出结果 
  function exampleFunc() { 
    console.log( expFunc );  // ：a function with second? 
    function expFunc( ) { 
      alert( 'first' ); 
    } 
    function expFunc() { 
      alert( 'second' ); 
    }; 
    console.log( expFunc ); //：a function with second? 
    var expFunc = 'str'; 
    console.log( expFunc ); //：str
  } 
  exampleFunc();

let arr = [11, 22, 21, 23, 55]
let brr = arr.slice( -3, 4 )
console.log( brr ); //:【21，23】
5.	result of ["1", "2", "3"].map(parseInt), why?
[1, NaN, NaN]
parseInt(‘1’, 0); // radix为0时，使用默认的10进制。
parseInt(‘2’, 1); // radix值在2-36，无法解析，返回NaN
parseInt(‘3’, 2); // 基数为2，2进制数表示的数中，最大值小于3，无法解析，返回NaN
6.	运用位运算知识写一个function判断一个数是不是2的幂。
function check(n){
  return ((n > 0) && ((n & (n - 1)) == 0));   
}



