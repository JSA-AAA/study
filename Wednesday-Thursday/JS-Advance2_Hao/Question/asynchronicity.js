// 1. write result for case a, b, c d and e, 
// also give line number in the logged order
// for example: line 6: 1, line 11: 1
let x = 0;
async function test() {
  // code here
  console.log(x); 
}

test();
x += 1;
console.log(x); 

// a: x += await 2; // result: 
// b: x += 2; // result: 
// c: x = await 2 + x; // result: 
// d: x = await (2 + x); // result: 
// e: x = await x + 2; // result: 

//---------------------------------------------------------------------  

// // 2. 
console.log(1);
    
setTimeout(function() {
  console.log(2);
});

function fn() {
    console.log(3);
    setTimeout(function() {
      console.log(4);
    }, 500);
}

new Promise(function(resolve, reject){
    console.log(5);
    resolve();
    console.log(6);
}).then(function() {
    console.log(7);
})

fn();
console.log(8);
