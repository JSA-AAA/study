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

// a: x += await 2; // result: line 7: 2  line 12: 1
// b: x += 2; // result: line 7: 2  line 12: 3
// c: x = await 2 + x; // result: line 7: 3  line 12: 1
// d: x = await (2 + x); // result: line 7: 3  line 12: 1
// e: x = await x + 2; // result: line 7: 3  line 12:1

//---------------------------------------------------------------------  

// // 2.  1 5 6 3 8 7 2 4
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
// 3. rewrite below promise chain to use async/await
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

//----------

async function demo() {
  let result1 = await result*2
  let result2 = await result1*2
  let result3 = await result2*2
  return result3;
}
demo().then(result =>{
  console.log(result);
})

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
 async function fetchAllCounts(){
   let user1 = fetchCountByName('hao');
   let user2 = fetchCountByName('cathy')+user1;
   let user3 = fetchCountByName('arthur')+user2;
   return user3;
 }

fetchAllCounts(Object.keys(DATA)); // this shall print out the total count of 600

