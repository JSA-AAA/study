//1. yes

//2. apply

//3. 
let obj = { food: ['Pizza', 'apple', 'burger'] }

function order(text) {
  return text + ' ' + this.food;
}

let text = 'I\'d like';
order.bind(obj, text)();