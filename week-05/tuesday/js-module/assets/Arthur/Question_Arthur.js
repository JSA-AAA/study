//1. 为什么commonJS被用于服务器端？ AMD应用于哪一方？为什么？


// 2. UMD的特性？根据其特性，你会选在将他应用于哪一端？


//3. export these three variable below
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;


//4.
export default function () { console.log("hello!") }


//5
let foo = () => { console.log("hello!") }
export { foo };