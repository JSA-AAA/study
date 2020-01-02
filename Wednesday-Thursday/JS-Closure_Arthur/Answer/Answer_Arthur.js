//Question 1
//Which type belongs to Closure feature: [D]
a).
let a = 1;
function aaa() {
  alert(a++);
}
b).
function aaa() {
  let a = 1;
  alert(a++);
}
c).
let a = 1;
function aaa() {
  return () => alert(a++)
}
d).
function aaa() {
  let a = 1;
  return () => alert(a++)
}




//Really classic question about closure
//Question 2-a
var arr = [];
for (var i = 0; i < 3; i++) {
  arr[i] = function () {
    console.log(i);
  };
}

arr[0]();
arr[1]();
arr[2]();
//what is the output
3
3
3


//Question 2-b
//Modify the code and add closure feature into above code
var arr = [];
for (var i = 0; i < 3; i++) {
  arr[i] = (function (i) {
    return function () {
      console.log(i);
    }
  })(i);
}

arr[0]();  //  0
arr[1]();  //  1
arr[2]();  //  2





//Question 3
//Before doing this question please read the article I gave you in the list
//Write the execution context of below function A() and B()
function A() {
  var a = 2;
  function B() {
    console.log(a)
  }
  return B;
}

//Your answer here
//--------------------------------------------------------------------------------------
ExecutionContext_A = {
  //Write your answer to replace ....
  variableObject: {
    a: 2,
    B: [reference to B]
  },
  this: thisValue,
  Scope: [
    ExecutionContext_A.variableObject,
    globalContext.variableObject   // 全局执行环境window的变量对象
  ]
};

ExecutionContext_B = {
  //Write your answer to replace ....
  variableObject: {
  },
  this: thisValue,
  Scope: [
    ExecutionContext_B.variableObject，
    ExecutionContext_A.variableObject,
    globalContext.variableObject
  ]
};