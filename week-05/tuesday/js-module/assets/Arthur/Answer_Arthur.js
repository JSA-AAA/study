//1. 为什么commonJS被用于服务器端？ AMD应用于哪一方？为什么？
// CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。
// AMD规范则是非同步加载模块，允许指定回调函数。
// 由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，
// 不用考虑非同步加载的方式，所以CommonJS规范比较适用。
// 但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。
// 此外AMD规范比CommonJS规范在浏览器端实现要来着早。

// 2. UMD的特性？根据其特性，你会选在将他应用于哪一端？
// UMD 先判断是否支持 Node.js 的模块（ exports ） 是否存在，存在则使用 Node.js 模块模式。
// 然后再判断是否支持 AMD （ define 是否存在 ），存在则使用 AMD 方式加载模块。
//集大成者，便可应用于跨平台

//3. export these three variable below
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

//可以使用大括号指定所要输出的一组变量
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export { firstName, lastName, year };

//4. 使用export default时，对应的import语句不需要使用大括号
export default function () { console.log("hello!") }

import foo from "foo";
foo();

//不使用export default时，对应的import语句需要使用大括号
let foo = () => { console.log("hello!") }
export { foo };
import { foo } from 'crc';