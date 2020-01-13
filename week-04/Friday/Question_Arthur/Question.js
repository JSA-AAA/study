//编写一个函数，该函数将遍历整数列表，并在延迟3秒后打印每个元素的索引。
//提示：闭包



//What is the result?
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)



//Show us the output
setTimeout(()=>{
  console.log('setTimeout')
})
let p1 = new Promise((resolve)=>{
  console.log('Promise1')
  resolve('Promise2')
})
p1.then((res)=>{
  console.log(res)
})
console.log(1)


//翻转一个字符
//Eg.input "abcd" => output "dcba"
