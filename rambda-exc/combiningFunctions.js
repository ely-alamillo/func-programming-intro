const R = require('rambda');
const numbers = [1, 2, 3, 4, 5];

// R.complement (HOF), returns the complement of the passed in fuction
// returns true when the original function returns a falsy value and false
// when the original function returns a truthy value
// complement is comparable to '!' function

const isEven = x => x % 2 === 0;
const isOdd = R.complement(isEven);

// find returns the first value that matches condition
find(isOdd, numbers);

/**
 * BOTH/EITHER
 */
//------------------ old way of doing it -----------------------------------------------
const wasBornInCountry = person => person.birthCountry;
const wasNaturalized = person => Boolean(person.naturalizationData);
const isOver18 = person => person.age >= 18;

const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person);
const isEligibleToVote = person => isOver18(person) && isCitizen(person);

// -------------------------- NEW WAY ------------------------------------------------
// both takes two functions, returns true if both function return true. false otherwise
const isEligibleToVote = both(isOver18, isCitizen);
// either takes two functions, returns true if either return truthy. false otherwise
const isCitizen = either(wasBornInCountry, wasNaturalized);

/**
 * PIPELINES
 */

const multiply = (a, b) => a * b;
const addOne = x => x + 1;
const square = x => x * x;

// pipe takes list of one or more functions and returns a new function
// first function can take multiple args
// subsequent function should only take one
const operate = R.pipe(multiply, addOne, square);

/**
 * COMPOSE
 */
// compose works the same as pipe, but in a right-to-left
// think of compose as compose(f,g)(value) === f(g(value))
const operateWithCompose = R.compose(square, addOne, multiply);
