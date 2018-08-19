/**
 * In this exercise, we'll see how we can iterate (loop) over an object.
 *
 * There are two ways we can iterate over an object.
 */

/**
 * Method 1 - using `for...in`
 *
 * Syntax:
 * for (variable in object) {
 *   ...
 * }
 *
 * variable - A different property name is assigned to variable on each iteration
 * object - The object we want to iterate.
 */

var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`${prop} = ${obj[prop]}`);
}

// Output:
// "a = 1"
// "b = 2"
// "c = 3"

/**
 * Now it's your turn!
 *
 * Create an object with a few properties in it. If you'd like,
 * reuse the person object from the previous exercise.
 *
 * Use a `for...in` loop to iterate over your object.
 * The loop must `console.log` each key and it's value
 */

// TODO: write your `for...in` loop here
let person = require('./Exercise1').person;
for( key in person){
  console.log(`${key} = ${person[key]}`)
}
/**
 * Method 2 - using `Object.keys()`
 *
 * The Object.keys() method returns an array of a given object's property names,
 * in the same order as we get with a normal loop.
 *
 * Syntax:
 * Object.keys(objectToIterate)
 *
 * objectToIterate - The object that we want to iterate (loop) over
 */

var obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
// Output: ["a", "b", "c"]

var keysInObj = Object.keys(obj);
keysInObj.forEach(key => {
  console.log(`${key} = ${obj[key]}`);
});
// Output:
// "a = 1"
// "b = 2"
// "c = 3"

/**
 * Now it's your turn!
 *
 * Create an object with a few properties in it. If you'd like,
 * reuse the person object from the previous exercise.
 *
 * Use the `Object.keys(obj)` syntax to iterate over your object.
 * The loop must `console.log` each key and it's value
 */

// TODO: write your `Object.keys(obj)` loop here
let persianCat = require('./Exercise1').persianCat;
let keys = Object.keys(persianCat);
keys.forEach((key) => {
  console.log(`${key} = ${keys[key]}`);
})