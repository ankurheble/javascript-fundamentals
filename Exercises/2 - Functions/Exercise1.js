/**
 * In this exercise, we'll create 4 functions.
 *
 * 1 - sum
 * 2 - multiply
 * 3 - fullName
 * 4 - createPerson
 */

/**
 * 1 - sum
 *
 * This function must take 2 arguments are return their sum
 * */

// TODO: your code goes here
function sum(a,b){
    return a+b;
}
// uncomment the line below once you have written your code
module.exports.sum = sum

/**
 * 2 - multiply
 *
 * This function must take 2 arguments are return their product
 * */

// TODO: your code goes here
function multiply(x,y){
    return x*y;
}
// uncomment the line below once you have written your code
module.exports.multiply = multiply

/**
 * 3 - fullName
 *
 * This function must take 2 arguments - the firstName and lastName and return a concatenated
 * string of firstName and lastName
 * */

// TODO: your code goes here
function fullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}
// uncomment the line below once you have written your code
module.exports.fullName = fullName

/**
 * 4 - createPerson
 *
 * The work of this function is to take 4 arguments - name(string), age(number), gender(string)
 * and return an object with the properties name, age and gender with values correctly set on the objec
 * */

// TODO: your code goes here
function createPerson(name,age,gender){
    if(typeof name !== 'string' && typeof age !== 'number' && typeof gender !== 'string'){
        console.log('Please provide correct data types');
    }
    return{
        name : name,
        age : age,
        gender : gender
    }
}
// uncomment the line below once you have written your code
module.exports.createPerson = createPerson
