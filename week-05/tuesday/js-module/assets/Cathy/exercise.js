//1.下面的代码为啥导出是错误的？
function addTwoNumber(a, b) {
  return a + b;
}

exports = {
    addTwoNumber: addTwoNumber;
}

//2.以下哪几个导出方式是正确的？

1.
export 1;

2.
var m = 1;
export m;

3.
export var m = 1;

4.
var m = 1;
export {m};
