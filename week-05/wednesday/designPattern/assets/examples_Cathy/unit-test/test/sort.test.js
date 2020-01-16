var expect = require('chai').expect;
const sort = require('../src/sort.js')

describe('sort.js的测试',function(){
  it('长度相同',function(){
      expect(sort([1,2,3,4,5]).length).to.be.equal(5);
  })
  it('原数组中的每一个元素都仍然存在',function(){
    expect(
      [1,2,3,4,5].forEach(element => {
        sort([1,2,3,4,5]).indexOf(element)
      })
    ).to.not.be.equal(-1);
})



})