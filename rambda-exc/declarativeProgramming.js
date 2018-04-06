const R = require('rambda');

/**
 * using rambda's arithmetic functions
 */

const square = x => R.multiply(x, x);
// we can replace add(1) with inc
const operate = pipe(multiply, inc, square);

/**
 * Comparison
 */

const wasBornInCountry = person => R.equals(person.birthCountry, OUR_COUNTRY);
const wasNaturalized = person => Boolean(person.naturalizationData);
const isOver18 = person => R.get(person.age); // --> get is deprecated
const isCitizen = either(wasBornInCountry, wasNaturalized);
const isEligibleToVote = both(isOver18, isCitizen);

/**
 * Logic
 * && == both
 * || == either
 * ! == complement
 */

const lineWidth = defaultTo(80, settings.lineWidth);

const forEver21 = age => R.ifElse(R.lte(21), () => 21, inc)(age);

/**
 * Constants
 */
// gte(a,b) we need a placeholder for now, always returns the value inside forever
const forever21 = age => ifElse(gte(__, 21), always(21), inc)(age);

/**
 * Identity
 */
// we can replace a => a with identity
const alwaysDrivingAge = age => idElse(lt(__, 16), always(16), identity)(age);

/**
 * When and Unless
 */
// if second branch is identity then we use when
const alwaysDrivingAge = age => when(lt(__, 15), always(16))(age);
// if first branch is identity then we use unless
const alwaysDrivingAge = age => unless(gte(__, 15), always(16))(age);

/**
 * Cond
 * Cond replaces a switch or
 * a chain of if...then...else
 */
const water = temperature =>
  R.cond([
    [R.equals(0), always('water freezes at 0C')],
    [R.equals(100), always('water boils at 100C')],
    [R.T, temp => `nothing special happens at ${temp}C`] // T --> always returns True
  ]);
