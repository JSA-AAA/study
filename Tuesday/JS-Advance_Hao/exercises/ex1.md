# Questions

***please duplicate this file and rename under your name***

## Q1: is this valid

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
  order._?_(obj, text); // expecxted output: "I'd like Pizza,apple,burger"
```

## Q3: rewrite above code to use bind
