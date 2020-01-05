//----------console--------------------
// 1. print desired output in console
const arr = [[1, 2], [3, 4], [5, 6]];
//code here
console.table(arr);
// desired output
// ┌─────────┬───┬───┐
// │ (index) │ 0 │ 1 │
// ├─────────┼───┼───┤
// │    0    │ 1 │ 2 │
// │    1    │ 3 │ 4 │
// │    2    │ 5 │ 6 │
// └─────────┴───┴───┘

// 2. what are the differences between console.debug() and console.log()
//

// 3. write a simple timer 
// hint: console methods and time interval and timeout
console.time('simple timer')

let simpleTimer = setInterval(()=>{
  console.timeLog('simple timer');
}, 1000);

setTimeout(() => {
  clearInterval(simpleTimer);
  console.timeEnd('simple timer');
}, 5000);


//--------------------------events--------------------------------






//------------------------process----------------------------------