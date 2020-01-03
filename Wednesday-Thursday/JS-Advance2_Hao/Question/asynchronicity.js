// // 1. write result for case a, b, c d and e, 
// // also give line number in the logged order
// // for example: line 7: 1, line 11: 1
let x = 0;
async function test() {
  // code here
  console.log(x); 
}

test();
x += 1;
console.log(x); 

// a: x += await 2; // result: 7:1     12:2
// b: x += 2; // result: 7:2    12:3
// c: x = await 2 + x; // result: 7:1     12:3
// d: x = await (2 + x); // result:  7:1     12:3
// e: x = await x + 2; // result:  7:1     12:2

//---------------------------------------------------------------------  

// 2. 
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


//---------------------------------------------------------------------  

// 3. give log result of below code
// and rewrite below promise chain to use async/await


let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 500);
});

promise.then(function(result) {
  console.log(result); //
  return result * 2;
});

promise.then(function(result) {
  console.log(result); //
  return result * 2;
}).then(function(result) {
  console.log(result);  //
  return result * 2;
});

//--------------------------------------------------------------------------
// 4. get total counts
// write an async to print out total number of count 
const DATA = {
  hao: { count: 100 },
  cathy: { count: 200 },
  arthur: { count: 300 }
}

const fetchCountByName = async(userName) => await DATA[userName].count;
 // write fetchAllCount here

fetchAllCounts(Object.keys(DATA)); // this shall print out the total count of 600
<<<<<<< HEAD

//addition: 1 hello 2 world 3
=======
>>>>>>> rebase from master
