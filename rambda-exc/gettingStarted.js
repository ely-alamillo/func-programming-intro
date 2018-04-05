const R = require('rambda');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = x => x * 2;
const isEven = x => x % 2 === 0;

// map is the most common, return a new array
map(double, numbers); // --> doubles each number

// filter keeps values that return truthy to the function
filter(isEven, numbers);

// reject keeps values that return 'false' to the function
reject(isEven, numbers);

// find returns the first element that matches the condition
find(isEven, number);

// reduce takes
const add = (accum, val) => accum + val;
reduce(add, 5, [1, 2, 3, 4]); // --> 15
