const fs = require('fs');
let counts = 0;

// 定义一个 wait 方法
function wait (mstime) {
  let date = Date.now();
  while (Date.now() - date < mstime) {
    // do nothing
  }
}

// 读取本地文件 操作IO
function asyncOperation (callback) {
  fs.readFile(__dirname + '/' + __filename, callback);
}

const lastTime = Date.now();

// setTimeout
setTimeout(() => {
  console.log('timers', Date.now() - lastTime + 'ms');
}, 0);

// process.nextTick
process.nextTick(() => {
  // 进入event loop
  // timers阶段之前执行
  wait(20);
  asyncOperation(() => {
    console.log('poll');
  });  
});

作者：快乐叮当
链接：https://juejin.im/post/5dd24ecce51d453fb903ff37
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。