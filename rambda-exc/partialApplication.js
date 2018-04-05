const R = require('rambda');

// try to solve this program
// we should try to combine map and filter but they both
// take 2 arguments
const publishedInYear = (book, year) => book.year === year;

const titlesForYear = (books, year) => {
  const selected = filter(book => publishedInYear(book, year), books);

  return map(book => book.title, selected);
};

// we can transform publishedInYear to return a function instead
publishedInYear = year => {
  return book => {
    return book.year === year;
  };
};

titlesForYear = (books, year) => {
  const selected = filter(publishedInYear(year), books);
  return map(book => book.title, selected);
};

// refactor using partialRight
// must provide arguments in array form
titlesForYear = (book, year) => {
  const selected = R.filter(R.partialRight(publishedInYear, [year]), books);
  return map(book => book.title, selected);
};

/**
 * CURRY
 */

publishedInYear = R.curry((year, book) => book.year === year);
const titlesForYear = (books, year) => {
  const selected = filter(publishedInYear(year), books);

  return map(book => book.title, selected);
};

/**
 * FINAL PIPELINE
 */

publishedInYear = curry((year, book) => book.year === year);

titlesForYear = (books, year) => {
  const selected = filter(publishedInYear(year), books);
  return map(book => book.title, selected);
};

titlesForYear = curry((year, books) => {
  R.pipe(R.filter(publishedInYear(year)), R.map(book => book.title))(books);
});
