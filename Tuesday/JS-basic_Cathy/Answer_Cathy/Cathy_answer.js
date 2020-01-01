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

Plus:
//1.注释后写出结果
const a = [[1,2],[3,4]];
const ws = new WeakSet(a);
console.log(ws.size());//:error weakset无遍历
ws.forEach(element => {
  console.log(element)
})//:error weakset无遍历

const map = new Map();

map.set(1,'a');
map.set(1,'b');
console.log(map.get(1))//:b

const map2 = new Map();
const k1 = ['a'];
const k2 = ['b'];

map.set(k1, 1);
map.set(k2, 2);
console.log(map.get(k1))//:1

console.log(c); //:c
var c = 'c';

//reduce,map, filter, find, every, some, entries, etc 
const arr = [11,22,23,24,25,26];
console.log(arr.shift());//:11
console.log(arr.reduce((a,b)=>a+b));//:120
console.log(arr.find((n)=>n>22));//:23
for (let [index, element] of arr.entries()){
  console.log(index, element) //:0 22 1 23 2 24 3 25 4 26
}
console.log(arr.filter(x=>true))//:[22,23,24,25,26]
console.log(arr.every(x => x==='22'))//:false
console.log(arr.map(x=>1))//:[1,1,1,1,1]
console.log(arr.some(x=> x>22))//:true

//2.使用arrow function 的好处
// 箭头函数写代码拥有更加简洁的语法；
// 不会绑定this。