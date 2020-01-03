//Question 1
//Careful read the code below
function Person(name, age) {
  this.name = name || 'unknow'
  this.age = age || 0
}

Person.prototype.say = function () {
  console.log('I am a person')
}

function Student(name) {
  this.name = name
  this.score = 80
}

Student.prototype = new Person()

Student.prototype.study = function () {
  console.log('I am studing')
}

var stu = new Student('lucy')
//  1. console.log(stu.name)  
// 2. console.log(stu.age)   
// 3. console.log(stu.score) 
// 4. stu.say()              
// 5. stu.study()            

//give the expect output.
1. lucy
2. 0
3. 80
4. I am a person
5. I am studying


// Question 2
/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old!`;
  }
}

let person = new Person('Alice', 24);
console.log(person.greeting());
*/

//The above is a standard class to create a person. 
//Please change it to The Prototype Pattern

//start from here
function Person(name, age) { 
  //your code here
  this.name = name;
  this.age = age;
}

Person.prototype.greeting = function () {
  return `Hello, my name is ${this.name}, I am ${this.age} years old!`;
}


//Question 3
//base on the question 1, can you create a Male class which will inherit Person. 
//Furthermore, Male class will have one more property which is gender: male. 
//again you should use prototype pattern

function Male (name, age, gender='male') {
  Person.call(this, name, age);
  this.gender = gender;
}

Male.prototype = new person();


//question 4
// Copy the below code and run it at Browser
// Can you fix it
function Person() { }
Person.prototype = {
  constructor: Person,
  name: "Nicholas",
  age: 29,
  job: "Software Engineer"
}
let friend = new Person();
friend.job;


//Question 5
//You have to read the article about prototype I gave you
//give the result
function Parent(name) {
  this.name = name;
}

let p = new Parent('Peter');

console.log(Parent.prototype); // { constructor: f}
console.log(p.prototype); // error
console.log(Parent.__proto__);// constructor?
console.log(p.__proto__); // Parent.prototype


//Question 6
//You have to read the article about new operator I gave you
// function Animal(name){
//   this.name = name;
// }
// let cat = new Animal("cat");


//this is not a real world code, but can use code to explain your understanding
function newOperator(name){
  //write what happen inside new operator 
// 1. 首先创建一个空对象
var o = new Object();
// 2. 将空对象的原型赋值为构造器函数的原型
o.__proto__ = A.prototype;
// 3. 更改构造器函数内部this，将其指向新创建的空对象
A.call(o);
return o;

// 作者：tokenl
// 链接：https://juejin.im/post/5a379d78f265da43305e91bd
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

}

