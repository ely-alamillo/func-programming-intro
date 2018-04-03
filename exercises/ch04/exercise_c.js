// Considering the following function:
//
//   const keepHighest = (x, y) => (x >= y ? x : y);
//
// Refactor `max` to not reference any arguments using the helper function `keepHighest`.

// max :: [Number] -> Number
// const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);

const R = require('ramda');

const reduce = R.reduce;

const keepHighest = (x, y) => (x >= y ? x : y);
const max = reduce(keepHighest, -Infinity);

console.log(max([110, 1990, 30000000, 650]));
