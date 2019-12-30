# JS bacis Answer
1.	写出以下返回值：(在注释后)
type of (null) //: object
type of (undefined) //: undefined
const a = [ ]
b = a
console.log(a, b) //:[ ],[ ]
b[0] = 1
console.log(a,b) //:1,1
console.log(null == undefined) //:TRUE
console.log(NaN==NaN) //:False
console.log(0 == null) //:False
console.log(' \n\n\n' == false) //:TRUE
2.	B
3.	0
	1
	2
	3
	4
	'i' is not defined
4.	
function exampleFunc() { 
	console.log( expFunc ); // function expFunc() {alert( 'second' )} 
	function expFunc( ) { 
		alert( 'first' ); 
	} 
	function expFunc() { 
		alert( 'second' ); 
	}; 
	console.log( expFunc ); // function expFunc() {alert( 'second' )} 
	var expFunc = 'str'; 
	console.log( expFunc ); // str 
} 
	exampleFunc();
let arr = [11, 22, 21, 23, 55]
let brr = arr.slice( -3, 4 )
console.log( brr ); //: 21, 23
5.	
[ 1, NaN, NaN]
parseInt(‘1’, 0); // radix为0时，使用默认的10进制。
parseInt(‘2’, 1); // radix值在2-36，无法解析，返回NaN
parseInt(‘3’, 2); // 基数为2，2进制数表示的数中，最大值小于3，无法解析，返回NaN

6.	运用位运算知识写一个function判断一个数是不是2的幂

将2的幂次方写成二进制形式后，很容易就会发现有一个特点：二进制中只有一个1，并且1后面跟了n个0； 因此问题可以转化为判断1后面是否跟了n个0就可以了。

如果将这个数减去1后会发现，仅有的那个1会变为0，而原来的那n个0会变为1；因此将原来的数与去减去1后的数字进行与运算后会发现为零。

最快速的方法：
	function (number){
		let b = number & (number-1)
		return b
	}
如果b为0，则是。

