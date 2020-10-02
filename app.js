// Methods are functions
// "hello".toUpperCase() --> built in function that is already defined and written

// Function syntax
function funcName({
  //do something
})

// Run syntax
funcName(); //run once
funcName(); //run again

// EXAMPLE 1
function grumpus (){
  console.log('ugh.. you again...');
  console.log('for the last time...');
  console.log('LEAVE ME ALONE!!!');
}

grumpus();

ugh.. you again...
for the last time...
LEAVE ME ALONE!!!

// EXAMPLE 2
function rollDie() {
  let roll = Math.floor(Math.random() * 6) +1;
console.log(`Rolled: ${roll}`);
}

// Passing Kevin into person.
function greet(person){
  console.log(`Hi, ${person}!`);
}

greet(`Kevin`);

Hi, Kevin! // Printed value, not a return.

// Order of parameters is important! Parameters refers to the content in the ()
function sum (x, y){
  console.log(x + y);
}
console.log (sum (4, 5));

// Return statement
function add(x, y){
  return x + y; // RETURN
}

const sum = add(10, 16);
console.log(sum);

26 // Value has been restored

// EXAMPLE MINUS ELSE STATEMENT (

function isPurple(color){
  if (color.toLowerCase() === purple){
    return true;
  }
	  return false;
}