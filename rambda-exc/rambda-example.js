/**
 * http://fr.umio.us/favoring-curry/
 *
 */

const R = require('rambda');
const { data } = require('./ajaxData');

const formatName = R.curry((first, middle, last) => {
  return `${first} ${middle} ${last}`;
});

formatName('John', 'Paul', 'Jones'); // --> 'John Paul Jones'

const jp = formatName('John', 'Paul'); // --> loads the curried func with intial values
jp('Jones'); // --> 'John Paul Jones'
jp('Stevens'); // --> 'John Paul Stevens'
jp('Wall'); // --> 'John Paul Wall'
[('Jones', 'Stevens', 'Wall')].map(jp); // --> produces same results

const james = formatName('james'); // --> loads curried function w/ firstname only
james('Ridley', 'Fox'); // -- > 'James Ridley Fox'
james('John', 'Wiley'); // -- > 'James John Wiley'

const je = formatName('James', 'Earl'); // --> Loads curried functin with first+middle
je('Carter'); // --> 'James Earl Carter'
je('Jones'); // --> 'James Earl Jones'

/**
 * EX. 2, ARRAYS
 */

const numbers = [1, 2, 3, 4, 5];
const add = (a, b) => a + b;
const total = R.reduce(add, 0); // --> returns a function, http://ramdajs.com/docs/#reduce
const sum = total(numbers); // --> pass in the numbers to complete R.reduce, returns 15
const sum2 = R.reduce(add, 0, numbers); // --> same func w/o currying

/**
 * EX. # AJAX
 */
const fetchData = () => {
  const randomNumber = Math.floor(Math.random() * (10 - 1) + 1); // --> # between 1 - 10;
  const sendData = randomNumber < 10 ? true : false;
  return new Promise((resolve, reject) => {
    if (sendData) {
      resolve(data);
    }
    reject({ failed: true });
  });
};
const getIncompleteTaskSummaries = membername => {
  return fetchData()
    .then(R.prop('tasks')) // --> pulls out the tasks from data
    .then(R.filter(R.propEq('username', membername))) // --> finds single user
    .then(R.reject(R.propEq('complete', true))) // --> finds tasks not completed
    .then(R.map(R.pick(['id', 'dueDate', 'title', 'priority']))) // --> extracts only these fields to obj
    .then(R.sortBy(R.prop('dueData'))); // --> sorts by dueData
};
console.log(getIncompleteTaskSummaries('Scott'));

/**
 * 
 *  This is the js equivalent of curried implementation
    var getIncompleteTaskSummaries = function(membername) {
    return fetchData()
        .then(function(data) {
            return R.get('tasks', data)
        })
        .then(function(tasks) {
            return R.filter(function(task) {
                return R.propEq('username', membername, task)
            }, tasks)
         })
        .then(function(tasks) {
            return R.reject(function(task) {
                return R.propEq('complete', true, task);
            }, tasks)
        })
        .then(function(tasks) {
            return R.map(function(task) {
                return R.pick(['id', 'dueDate', 'title', 'priority'], task);
            }, tasks);
        })
        .then(function(abbreviatedTasks) {
            return R.sortBy(function(abbrTask) {
                return R.get('dueDate', abbrTask);
            }, abbreviatedTasks);
        });
};
 */
