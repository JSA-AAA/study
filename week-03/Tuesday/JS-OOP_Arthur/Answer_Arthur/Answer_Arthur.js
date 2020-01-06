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
// 1. lucy
// 2. 0
// 3. 80
// 4. I am a person
// 5. I am studing


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
//Please show the complete result
function Parent(name) {
  this.name = name;
}

let p = new Parent('Peter');

console.log(Parent.prototype);
//Parent {
//   constructor => Parent(name)
//   __proto__=> Object
// }

console.log(p.prototype);
// Undefined----instance do not have prototype property 



console.log(Parent.__proto__);
//Function.prototype
//Parent is our function to create object, its __proto__ will point to 
//father of every function which is Function.



console.log(p.__proto__);
//Parent.prototype
//which is 
//Parent {
//   constructor => Parent(name)
//   __proto__=> Object
// }





//Question 6
//You have to read the article about new operator I gave you
// function Animal(name){
//   this.name = name;
// }
// let cat = new Animal("cat");


//this is not a real world code, but can use code to explain your understanding
function newOperator(name) {
  var o = {};
  o.__proto__ = Animal.prototype;
  A.call(o, name);
  return o;
}
