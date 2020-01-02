// this is fro disscussions

// Q1:

let x = 0;
async function test() {
  // code here
  x = await (2 + x);
  console.log('hello', x); 
}

setTimeout(() => {
  x += 1;
  console.log('world', x); 
}, 0)
test();
x += 1;
console.log(x);