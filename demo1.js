alert("It's Working!");

//////////////////////////consol.log
console.log(3 + 4);
console.error("OH NOO!!!");
console.log(3 + 4, "hello", true);

//////////////////////////if statements
if (1 === 1) {
  console.log("It's True!");
}

if (2 !== 2) {
  console.log("It's True!");
}

//////////////////////////checking for a single condition
let rating = 3;
if (rating === 3) {
  console.log("You are a superstar!");
}

let rating = 2;
if (rating < 3) {
  console.log("You could use some improvement...");
}

let num = 37;

if (num % 2 !== 0) {
  console.log("odd number");
}

//////////////////////////else if
let rating = 3;

if (rating === 3) {
  console.log("You are a superstar!");
} else if (rating === 2) {
  console.log("Meets expectations");
} else if (rating === 1) {
  console.log("needs improvement");
}

//////////////////////////else - like an otherwise conditional
let rating = "4";

if (rating === 3) {
  console.log("You are a superstar!");
} else if (rating === 2) {
  console.log("Meets expectations");
} else if (rating === 1) {
  console.log("needs improvement");
} else {
  console.log("inavlid rating");
}

let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(`Congrats! You have the high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good game! Your score of ${userScore} did not beat the high score of ${highScore}`
  );
}

//////////////////////////nesting conditionals
let password = "hellokitty";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid password!");
  } else {
    console.log("Password is long enough, but cannot contain spaces");
  }
} else {
  console.log("Password must be longer");
}
