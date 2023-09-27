// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a new variable "name" and assign it the string 'Dane'
// We create a conditional that checks if "name" is 'Mary'.
// If "name" is 'Mary', then we log in the console 'Hi, Mary!'
// If "name" is not 'Mary' (else), we log in the console 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a new variable "secret" and leave it undefined.
// We declare a new variable "code" and assign it the number '123'.
// We create a conditional that check if "code" is equal to '123'.
// If "code" is equal to '123', then "secret" is assigned the string 'super', and "code" is multiplied by 2.
// If "code" is greater than 250, then "secret" is assigned the string 'duper'.
// We log into the console value of "secret" which in this case is 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a new variable "isStudent" with the boolean value 'true'.
// We declare a new variable "age" with the number '34'.
// We declare a new variable "zip" with the number '55407'
// We create a conditional that checks if "isStudent" is 'true' AND if "zip" is greater than '80000'
// If both conditions are met, we log into the console 'You're a student on the West Coast!'
// If both conditions are not met, we check a new condition:
// If "isStudent" is 'false' OR "age" is less than 30, we log into the console 'What are your hobbies?'
// If neither condition is met, we check a new condition:
// If "isStudent" equals 'true', we log into the console 'Welcome to Prime!'
// If this condition is not met, we log into the console 'How about the weather?'
// With the given values, our console would read 'What are your hobbies?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - the values of colorOne and colorTwo are swapped.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorTwo needs to also be changed to 'purple'. under the new colorOne value should read: "colorTwo = 'purple';".
if (mix === true) {
  colorOne = 'purple';
}
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

// FIX - time is set to a constant, but should be declared as a variable. Rewrite to: "let time = 4;".
let temp = 40;
const time = 4;

// FIX - instructions state both conditions must be true. There should be a && where it reads ||.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*

// FIX - both declarations should be variables, not constants. Rewrite to: "let minAge = 21;".
let age = 21;
const minAge = 21;

// FIX - the code under the if and else statements need to be swapped.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

