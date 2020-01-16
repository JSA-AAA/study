//arr = [1,2,3,4,5]

function sort(arr){
  const length = arr.length;
  arr2 = []
  for (let i = 0; i<length ; i ++){
    let index = Math.floor(Math.random()*arr.length); 
    arr2.push(...arr.splice(index,1))
  }
  return arr2
}

//console.log(sort(arr));

module.exports = sort;