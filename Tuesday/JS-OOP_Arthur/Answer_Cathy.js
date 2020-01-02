//Question 1
//give the expect output.
1.lucy
2.0
3.80
4.I am a person
5.I am studing

//Question 2
function Person(name, age){
	this.name = name;
	this.age = age;
}

Person.prototype.greeting = function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old!`)
}

let person = new Person('Alice', '24');
person.greeting();

//Question 3

function Person(name, age) {

  this.name = name || 'unknow'

  this.age = age || 0

}

function Male(name, age) {
	this.gender = 'male';
}

Male.prototype = new Person
let male = new Male('Zack', 23);
console.log(male.gender);

//question 4
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

console.log(Parent.prototype); //{constructor: function Parent(name) { this.name = name; }}
console.log(p.prototype); //undefine
console.log(Parent.__proto__);//function
console.log(p.__proto__); //{constructor: function Parent(name) { this.name = name; }}


//Question 6
//You have to read the article about new operator I gave you
// function Animal(name){
//   this.name = name;
// }
// let cat = new Animal("cat");


//this is not a real world code, but can use code to explain your understanding
function newOperator(name){
  //write what happen inside new operator 
  const obj = {};
  obj.__proto__ = Animal.prototype;
  const result = Animal.call(obj,"cat");
  return typeof result === 'obj'? result : obj;
}