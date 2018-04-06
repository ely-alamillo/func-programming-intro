const R = require('rambda');
/**
 * Lenses
 * They let you focus in on a specific part of an object or array.
 *
 * they let you use a getter and a setter function
 * at the same time
 */
const person = {
  name: 'John',
  socialMedia: {
    github: 'johnnyfive',
    twitter: 'johnnyfive'
  }
};

const nameLens = R.lens(R.props('name'), assoc('name'));
const twitterLens = lens(
  R.path(['socialMedia', 'twitter']),
  R.assocPath(['socialMedia', 'twitter'])
);

/**
 * Doing the above using better rambda functions
 */

const nameLens = R.lensProps('name');
const twitterLens = R.lensPath(['socialMedia', 'twitter']);

/**
 * How to use lenses
 *
 * view === reads the value of the lense
 * set === updates the value of the lense
 * over === applies a transformation function to the lens, over(lens, function, obj)
 */
R.view(nameLens, person); // --> 'John'
R.set(twitterLens, '@johnnyfive', person); // --> returns whole object with socialMedia.twitter updated to '@johnnyfive'
R.over(nameLens, toUpper, person); // --> returns whole obj with name === 'JOHNNY
