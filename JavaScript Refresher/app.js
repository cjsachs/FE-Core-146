// Testing
console.log('testing');

// var vs let, const
// var: global scoped & allows hoisting
// let, const: block scoped (always use these)

console.log(hoisted);
var hoisted = 'I am hoisted';

// let allows for re-assignment, const does not
let lastName = 'Sachs';
console.log(lastName);
lastName = 'Katina';
console.log(lastName);

// Watch out for these behaviors when adding number and strings
let dylanFavNum = 18;
let christianFavNum = '12';
let result = dylanFavNum + christianFavNum;
console.log(typeof result, result);

// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(fullName('Christian', 'Sachs'));

// Arrow Function (ES6)
const goatPlayer = (name) => {
  return `The goat will always be ${name}.`;
};

console.log(goatPlayer('michael jordan'));

// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }

const checkWeather = (temp) => {
  if (temp < 60) {
    return 'It is cold outside. #hoodieseason';
  } else if (temp < 90) {
    return 'It is a beautiful day!';
  } else {
    return 'It is hella hot! Avoid wearing black!';
  }
};

console.log(checkWeather(50));

// ------------------------- Ternary Operators -------------------------
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)

const oddOrEven = (num) => {
  return num % 2 == 0 ? 'Even' : 'Odd';
};

console.log(oddOrEven(11));

// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// loop through an array
let students = ['Harsh', 'AJ', 'Iryna'];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// loop through an array with for-of loop (values) (ES6)
for (let name of students) {
  console.log(name);
}

// loop through an array with for-in loop (indices) (ES6)
for (let i in students) {
  console.log(parseInt(i));
}

// ----- While Loops -----
let num = 0;
while (num < 10) {
  console.log(num);
  num += 2;
}

// Do-While
// Syntax: do {code block} while (condition)
num = 15;
do {
  console.log(num);
  num++;
} while (num < 10);
// NOTE: It is guaranteed to run once

// -------------------------------------BREAK---------------------------------------------
// Objects AKA Python Dicts
let person = {
  'first name': 'dylan',
  age: 1000,
  location: 'USA',
};

// access data in objects (using bracket or dot notation)
console.log(person['age']);
console.log(person.age);

// Inclass Exercise (Get the Value 'Manchester United')
const person2 = {
  name: 'Max',
  age: 31,
  prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
  fav_color: 'Blue',
  teams: [
    {
      baseball: 'Chicago White Sox',
      football: 'Chicago Bears',
      hockey: 'Chicago Blackhawks',
      basketball: ['Chicago Bulls', 'Chicago Sky'],
      soccer: ['Chicago Fire', 'Naperville Yellowjacks'],
    },
    {
      baseball: 'Toronto Bluejays',
      football: 'LA Rams',
      basketball: 'Milwalkee Bucks',
      soccer: ['Manchester United', 'Liverpool'],
    },
  ],
};

// solution here:

// JS Object methods ((Object.keys(object), Object.values(object))
console.log(Object.keys(person));
console.log(Object.values(person));

// looping an object using for in
// for in: iterates over keys in object or indices in an array
for (let key in person) {
  console.log(person[key]);
}

// ---------- Creating a JS Class ----------
class Team {
  constructor(city, name) {
    this.city = city;
    this.name = name;
  }

  printInfo() {
    return `The ${this.name} are from ${this.city}!`;
  }
}

// Creating an instance
const team1 = new Team('LA', 'Lakers');
console.log(team1.printInfo());

// Inheriting from a class using 'extends'
class Player extends Team {
  constructor(city, name, playerName) {
    super(city, name);
    this.playerName = playerName;
  }

  printInfo2() {
    return `${this.playerName} plays for the ${this.city} ${this.name}!`;
  }
}

const player1 = new Player('Chicago', 'Bulls', 'Michael Jordan');
console.log(player1.printInfo());

// ---------- JS Closures ----------
let grandpa = 'grandpa';
function a() {
  let father = 'father';
  return function b() {
    let son = 'son';
    return `${grandpa} -> ${father} -> ${son}`;
  };
}

console.log(a()());

// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)
// handle pending promise with .then(), .catch()
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Second way: Using async/await (ES6)
const pokemonData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`there was a problem: ${error}`);
  }
};

pokemonData();