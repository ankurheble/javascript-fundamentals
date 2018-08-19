/**
 * In this exercise, we'll see how we can create objects in JavaScript.
 *
 * You can `export` object from this file so they may used in other files.
 *
 * Here's how you can export your code from this file :
 *  module.exports = {
 *    dog: dog
 * }
 *
 * When we want import the same in another file, we can do the following:
 * let objects = require('./Exercise1.js');
 * let dog = objects.dog;
 *
 * All objects that you create in this file need to be exported using the syntax
 * above.
 */

// Method 1 - Object literal
var dog = {
  name: "Shadow",
  bark: function() {
    console.log("Bow bow!");
  },
};

// Method 2 - Object constructor
var dog = new Object();
dog.name = "Shadow";
dog.bark = function() {
  console.log("Bow bow!");
};

/**
 * Now, it's your turn!
 *
 * Create a person object using the Object literal syntax.
 * The object must have the following properties:
 * - name (string)
 * - age (number)
 * - gender (string)
 * - talk (function)
 *
 *
 * In the `talk` function, return the concatenated string of
 * the person's name, age and gender.
 *
 * Ex: "My name is John. I am a 32 year old male."
 */

// TODO: your code goes here.
let person = {
  name : 'Ankur',
  age : 27,
  gender : 'male',
  talk : function() {
    console.log(`My name is ${this.name} and i'm ${this.age} years old ${this.gender}`);
  }
}
// uncomment the line below once you have written your code
module.exports.person = person

/**
 * Create an animal object using the Object constructor.
 *
 * The object must have the following properties:
 * - type (string): example 'dog', 'cat'
 * - breed (string): example 'persian'
 * - name (string)
 * - age (number)
 * - talk (function) - Animals can talk too! 😁
 *
 * The talk function can do whatever you want it to do.
 * To keep things simple, just console.log("Talking...")
 *
 */

// TODO: your code goes here
let animal = {
  type : '',
  breed : '',
  name : '',
  age : 0,
  talk : function(){}
}

// uncomment the line below once you have written your code
module.exports.animal = animal