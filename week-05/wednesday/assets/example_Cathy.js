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