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
// 1. are registered events executed synchronously or asynchronously?
 synchronous

// 2. base on your answer of Q1, give the output of below code
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();
myEmitter.on('event', function() {
  console.log('listener1');
});
myEmitter.on('event', async function() {
  console.log('listener2-1');
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('listener2-2');
      resolve(1);
    }, 1000);
  });
});
myEmitter.on('event', function() {
  console.log('listener3');
});
myEmitter.emit('event');
console.log('end');

// 作者：Randal
// 链接：https://juejin.im/post/5b0189fe51882567161ad8ef
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


listener1
listener2-1
listener3
end
listener2-2


// 3. give output of below code
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
myEE.emit('foo');
myEE.emit('foo');

b
a

// 3. where can we receive the return value of a event callback function.
// for example, 100 in below code

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event',() => {
  console.log('haha');
  return 100;
})

myEmitter.emit('event');

// can not, since return value of a event callback function will be ignored
