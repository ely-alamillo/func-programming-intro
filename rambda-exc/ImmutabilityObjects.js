const R = require('ramda');

// refactoring code from earlier
const wasBornInCountry = R.compose(equals(OUR_COUNTRY), R.prop('birthCountry'));
const wasNaturalized = R.compose(Boolean, R.prop('naturalizationData'));
const isOver18 = R.compose(R.gte(__, 18), R.prop('age'));

/**
 * Transforming properties
 */
const nextAge = R.compose(R.inc, R.prop('age'));
const celebrateBirthday = person => R.assoc('age', nextAge(person), person);
// we can use evolve instead, will not add new props though
celebrateBirthday = R.evolve({ age: R.inc });

/**
 * Merging objects
 *
 * Merge will return new obj containing all props
 * from both objects, if prop is duplicate the one
 * from the second obj will be used
 *
 * merge is shallow so no deep merging
 */
const f = (a, b, options = {}) => {
  const defaultOptions = { value: 42, local: true };
  const finalOptions = R.merge(defaultOptions, options);
};
