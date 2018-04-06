const R = require('rambda');

/**
 * Pointfree is a way to abstract the data we are using
 * in the function
 */
// regular
const forever21 = age => ifElse(gte(__, 21), always(21), inc)(age);
// pointfree
const forever21 = R.ifElse(R.get(__, 21), R.always(21), R.inc);

// regular
const alwaysDrivingAge = age => ifElse(lt(__, 16), always(16), identity)(age);
// pointfree
const alwaysDrivingAge = R.when(lt(__, 16), always(16));

// regular
const water = temperature =>
  cond([
    [equals(0), always('water freezes at 0°C')],
    [equals(100), always('water boils at 100°C')],
    [T, temp => `nothing special happens at ${temp}°C`]
  ])(temperature);
// pointfree
const water = cond([
  [equals(0), always('water freezes at 0°C')],
  [equals(100), always('water boils at 100°C')],
  [T, temp => `nothing special happens at ${temp}°C`]
]);

/**
 * Multi-argument functions
 */
// regular
const titlesForYear = curry((year, books) =>
  pipe(filter(publishedInYear(year)), map(book => book.title))(books)
);
// pointfree
const titlesForYear = year => {
  R.pipe(filter(publishedYear(year)), map(book => book.title));
};

// regular
const isCitizen = person => R.either(wasBornInCountry, wasNaturalized);
const isEligibleToVote = person => R.both(isOver18, isCitizen)(person);

// pointfree
const isCitizen = R.either(wasBornInCountry, wasNaturalized);
const isEligibleToVote = R.both(isOver18, isCitizen);
