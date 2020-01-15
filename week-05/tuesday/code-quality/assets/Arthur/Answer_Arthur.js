// 1. What will be your standards to measure the code quality ?
// Reliability

// Maintainability

// Testability

// Reusability

//2. Try to optimize the code:
for (int i = 0; i < list.size(); i++)
{... }


for (int i = 0, int length = list.size(); i < length; i++)
{... }

//hint:lazy load
String str = "aaa";
if (i == 1) {
  list.add(str);
}


if (i == 1) {
  String str = "aaa";
  list.add(str);
}


//优化前
if (key === 1 || key === 3 || key === 9) {
  //some codes here
}
//优化后
let codesOptionArr = [1, 3, 9]
if (codesOptionArr.includes(key)) {
  //some codes here
}


// 优化前
function fn(age) {
  if (age) {
    let _age = age
  } else {
    let _age = 0
  }
  console.log(_age)
}
// 优化后
function fn(age = 0) {
  console.log(age)
}