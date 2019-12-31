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