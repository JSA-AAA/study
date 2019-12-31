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
