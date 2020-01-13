//1.
const arr = [10, 12, 15, 21];

function delayPrint() {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(function (clo) {
      return function () {
        console.log(clo);
      }
    }(i), 3000)
  }
}

delayPrint();



//2.
1



//3.
Promise1
1
Promise2
setTimeout



//4.
str="jQuery";
str = str.split("");
str = str.reverse();
str = str.join("");
alert(str);
