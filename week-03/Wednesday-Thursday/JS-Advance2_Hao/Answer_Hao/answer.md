## Q1
a: line 12: 1, line 7: 2

b: line 7: 2, line 12: 3

c: line 12: 1, line 7: 3

d: line 12: 1, line 7: 2

e: line 12: 1, line 7: 2

## Q2
1 5 6 3 8 7 2 4

## Q3
1 1 2

```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 500);
});

(async () => {
  let result = await promise
  console.log(result);
  return result * 2
})();

(async () => {
  let result = await promise;
  console.log(result);
  result *= 2
  console.log(result);
  return result * 2;
})();

```

## Q4
```javascript
async function fetchAllCounts(users) {
  const promises = users.map(async username => {
    return await fetchCountByName(username);
  });
  const counts = await Promise.all(promises);
  console.log(counts.reduce((a, b)=> a+b));
}

// or
async function fetchAllCounts(users) {
  const counts = await users.reduce(async (a, b) => {
    let prev = (await a) || 0;
    let count = await fetchCountByName(b);
    return count + prev;
  }, Promise.resolve());
  console.log(counts);
}
```