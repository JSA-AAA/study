## Q1: is this valid
YES
```javascript
  const something = {
    value: 'hello',
    type: 'range'
  };

  <input {...something} />
```

## Q2: fill in \_?_

```javascript
  let obj = { food: ['Pizza', 'apple', 'burger'] }

  function order(text) {
    return text + ' ' + this.food;
  }

  let text = 'I\'d like';
  order.call(obj, text); // expecxted output: "I'd like Pizza,apple,burger"
```

## Q3: rewrite above code to use bind
  let obj = { food: ['Pizza', 'apple', 'burger'] }

  function order(text) {
    return text + ' ' + this.food;
  }

  let text = 'I\'d like';
  order.bind(obj, text)();