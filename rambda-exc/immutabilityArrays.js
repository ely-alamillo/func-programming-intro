const R = require('rambda');

/**
 * Array methods
 *
 * handy methods
 * head === first element of array
 * last === last element of array
 * tail === all elements except the first
 * init === all elements except the last
 * take === takes first N elements
 * takeLast === takes the last N elements, starts form the back
 */
const numbers = [10, 20, 30, 40, 50, 60];
R.nth(3, numbers); // --> 40
R.nth(-2, numbers); // --> 50, negative numbers start from the right
// slices takes 2 indexes and returns sub-array, slice(inclusive, exclusive, array)
R.slice(2, 5, numbers); // --> [30, 40, 50, 60]
R.slice(20, numbers); // -->

/**
 * Handy methods in action
 */
R.head(numbers); // --> 10
R.tail(numbers); // --> [20, 30, 40, 50, 60]

R.last(number); // --> 60
R.init(number); // --> [10, 20, 30, 40, 50]

R.take(3, numbers); // --> [10, 20, 30]
R.takeLast(3, numbers); // --> [40, 50, 60]

/**
 * Adding, Updating, and Removing
 * all methods return new array
 *
 * insert === inserts element, does not replace i item
 * update === same as insert, replaces i with with new value
 * append === adds to tail
 * prepend === adds head
 * concat === merges arrays
 *
 * remove === removes by index, remove(index, # of elements to delete, array)
 * without === removes by value
 * drop === drops N from the head
 * dropLast === drops N from the end
 *
 * update === updates an array with the provided value, update(index, value)
 * adjust === updates the array with the function, update(function, index, array)
 */
R.insert(3, 35, numbers); // --> [10, 20, 30, 35, 40, 50, 60]
R.append(70, number); // --> [10, 20, 30, 40, 50, 60, 70]
R.prepend(0, numbers); // --> [0, 10, 20, 30, 40, 50, 60]
R.update(1, 15, numbers); // --> [10, 15, 30, 40, 50, 60]
R.concat(numbers, [70, 80, 90]); // --> [10, 20, 30, 40, 50, 60, 70, 80, 90]

R.remove(2, 3, numbers); // => [10, 20, 60]
R.without([30, 40, 50], numbers); // => [10, 20, 60]
R.drop(3, numbers); // => [40, 50, 60]
R.dropLast(3, numbers); // => [10, 20, 30]

/**
 * Transforming Elements
 */
R.update(2, R.multiply(10, R.nth(2, numbers)), numbers); // => [10, 20, 300, 40, 50, 60]
R.adjust(R.multiply(10), 2, numbers);
