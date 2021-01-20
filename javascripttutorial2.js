// JavaScript Tutorial on Youtube -- JavaScript Crash Course for Beginners

// String, Numbers, Boolean, null, undefined

const name = 'john';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // should be undefined. let you can change, const you cannot
console.log(typeof name);

// Concatenation
console.log('My name is' + name + 'and my age is ' + age);

// Template String
console.log(`My name is ${name} and I am ${age}`);
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase()); // methods have ()
console.log(s.substring(0, 5)).toUpperCase());
console.log(s.split());
const t = 'technology, computers, IT, code';
console.log(s.split(', '));

// Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
console.log(fruits);

// Object Literals
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName, person.address.city, person.address.state);
console.log(person.hobbies[1]);
const {firstName, lastName, address: {city}} = person;
console.log(city);
person.email = 'john@gmail.com';
console.log(person);
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text:'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For loop
for(let i = 0; i < 10; i++) {
  console.log(i);
  console.log(`For Loop Number: ${i}`);
}

// While loop
let i = 0;
while(i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}


for(let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}


for(let todo of todos) {
  console.log(todo.text);
  console.log(todo.id);
}

// forEach, map, filter
todos.forEach(function(todo) {
  console.log(todo.text);
});


const todoText = todos.map(function(todo) {
  return todo.text;
});
console.log(todoText);


const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
})
console.log(todoCompleted);


const x = 10;
if (x === 10) {
  console.log('x is 10');
} else {
  console.log('x is not 10');
}

const y = 20;
if (y > 10) {
  console.log('y is greater than 10');
} else {
  console.log('y is less than 10');
}

if (x > 5 && y > 5) {
  console.log('both x and y are greater than 5');
}

const x = 12;
const color = x > 10 ? 'red': 'blue';// ? is the ternary operator (then)
console.log(color);

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
  console.log('color is not red or blue');
    break;
}

function addNums(num1, num2) {
  console.log(num1 + num2); // can also return num1 + num2;
}
addNums(5,4); // can also leave blank and do num1 = 1, num2 = 2 on line 152

const addNums = (num1 = 1, num2 = 2) => num1 + num2;
console.log(addNums(5, 7));

// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  }
  this.getFullName = function() {
  }
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullyear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;

}


// Class - goes with Constructor function - does the same thing as Constructor function above
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// Instatiate object - goes with Constructor function
const person1 = new Person('John', 'Doe', '20-12-1987');
const person2 = new Person('Claire', 'Smith', '20-12-1995');
console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName());


console.log(window);
window.alert(1);

// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
const btn = document.querySelector('.btn');
btn.style.background = 'red';


// Events
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
  console.log(e.target);
  console.log(e.target.className);
  console.log(e.target.id);
  document.querySelector('#my-form').style.background = '#ccc'; // after click, color change
  document.querySelector('body').classList.add('bg-dark'); // add a class
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value);
  if(nameInput.value === '' || emailInput.value === '') {
    alert('Please enter fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 4000);
  } else {
    console.log('success');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChilrd(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}
