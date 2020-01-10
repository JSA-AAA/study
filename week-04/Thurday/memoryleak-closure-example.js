var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {//用到外部作用域
    if (originalThing)
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log(someMessage);
    }
  };
};
setInterval(replaceThing, 1000);