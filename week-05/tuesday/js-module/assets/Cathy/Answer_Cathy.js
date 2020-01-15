//1.xports实际上初始时是module.exports的一个引用。给exports赋一个新值后，module.exports并没有改变，还是指向空对象。最后返回的对象是module.exports，没有addTwoNumber接口。
//2.
// 错误，导出值1，模块中没有对应
export 1;

// 错误，实际上也是导出1，模块中没有对应
var m = 1;
export m;

// 可以这样来导出，导出的m与模块中的变量m对应
export var m = 1;

// 可以这样导出
var m = 1;
export {m};