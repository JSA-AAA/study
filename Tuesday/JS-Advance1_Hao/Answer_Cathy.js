//--------------------------destructuring------------------------------//
//1. create a, b and c and make a equals 1, b equals 2, c equals 3
const values = [1, [[2], 3]];
//code here
const [a, [[b], c]] = values;

console.log(a, b, c);

//2. destruct only org and name and rename org to orgenization.
// also, give a default value 'jsa' to organization
const temp = {
  org: undefined,
  time: '2020',
  name: 'Bob'
}


function training(name, organization){
  console.log(`this is ${name} from ${organization}`)
}

const {org: organization='jsa', name} = temp

training(name, organization);

//---------------------this, bind, apply-------------------------------//

// 3. use this
const person1 = {
  name: "cathy",
  greeting: function() {
    console.log(this.name);
  }
}

// define person2's greeting function
const person2 = { 
    name: 'hao',
    greeting: person1.greeting
}; 

const name = 'arthur';
// print out 'arthur' with greeting function
// hint: use apply
person1.greeting.apply({name});

person1.greeting();
person2.greeting();

// 4. bind: give output of each function call
function f() {
  console.log(this.a);
}
f(); // undefined

const g = f.bind({a: 'hello'});
g(); //hello 

const h = g.bind({a: 'world'});
h(); // hello

h.apply({a: 'world'}); //hello
