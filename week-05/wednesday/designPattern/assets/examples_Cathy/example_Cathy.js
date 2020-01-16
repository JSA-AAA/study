//=================strategy===========
var compute = {
  sum : function(arr){
    let sumAmount = 0 ;
    for (let n = 0 ; n < arr.length ; n++){
      sumAmount = sumAmount + arr[n];
    }
    return sumAmount;
  },
  count : function(arr){
    return arr.length
  }

}

arr = [1,2,3,4];
console.log(compute.sum(arr));

//=============singleton=========
let mySingleton = (function (){
  let instance;
  function init(){
    function makeSense(){
      console.log('init one')
    }
    return {
      getInit :function (){
        if (!instance){
          instance = init();
        }
      }
    }

  }
})();

let A = mySingleton;
let B = mySingleton;
console.log(A===B)