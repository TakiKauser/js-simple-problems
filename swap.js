let first = 7;
let second = 9;

console.log(first, second);

// first approach
let temp = first;
first = second;
second = temp;

console.log(first, second);

// distructing
[first, second] =[second, first];

console.log(first, second);