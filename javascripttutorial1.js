// javascript tutorial. See YouTube video JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]

// This is my first JavaScript code!
console.log('Hello World');

// Variables
let name = 'Chris'; // name is a variable
// variables cannot be a reserved keyword
// variables should be meaningful
// cannot start with a number
// cannot contain a space or hyphen (-)
// are case-sensitive

console.log(name);

let firstName = 'Dereck';
let lastName = 'Rose';

// Constants
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Primitive Types
let name = 'Chris'; // String Literal
let age = 27; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let lastName = null; // use null when you want to clear the variable
let selectedColor = 'red';

// Dynamic Typing


// Objects
// next two lines are completed by the following lines
// let name = 'Chris';
// let age = 27;
let person = {
  name: 'Chris',
  age: 27
};

// Dot Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Maverick';

console.log(person.name);

// Arrays
let selectedColors = ['red', 'blue']; // square brackets are called an Array Literal
selectedColors[2] = 'green';
selectedColors[3] = 5;
console.log(selectedColors);
console.log(selectedColors.length);

// Functions
function greet(name, lastName) {
  console.log('Hello ' + name + lastName);
}

greet('John', 'Smith');

// Types of Functions

// Calculating a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);

console.log(square(3));
