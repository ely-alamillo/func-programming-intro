// Refactor to remove all arguments by partially applying the functions.

// filterQs :: [String] -> [String]
// const filterQs = xs => filter(x => x.match(/q/i), xs);

const R = require('ramda');

const filter = R.filter;
// used R.test because R.match return an array not a boolean
// R.filter uses a boolean to determine the filter
const match = R.test;
const filterQs = filter(match(/q/i));

console.log(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']));
