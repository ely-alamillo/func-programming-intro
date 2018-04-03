// Refactor to remove all arguments by partially applying the function.

// words :: String -> [String]
// const words = str => split(' ', str);

// Curry the function words
// words() -> takes string and splits it
// break out split

const R = require('ramda');

const words = R.split(' ');

console.log(words('hello'));
