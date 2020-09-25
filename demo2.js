//////////////////////////truthy and falsy
false, 0, empty string, null, undefined, NaN
let mystery = 5;

if (mystery) {
  console.log("truthy");
} else {
  console.log("falsy");
}

let loggedInUser = "thomas128";

if (loggedInUser) {
  console.log("you are logged in");
} else {
  console.log("please log in!");
}

//////////////////////////logical operator &&
let password = "chickenGal";

if (password.length >= 8 && password.indexOf(" ") === -1) {
  console.log(`valid password`);
} else {
  console.log(`invalid password`);
}

let num = 34;

if (num >= 1 && num <= 10) {
  console.log(`number is between 1 and 10`);
} else {
  console.log(`please guess a number between 1 and 10`);
}

//////////////////////////logical operator ||
let age = 36;

if (age < 6 || age >= 65) {
  console.log(`free for you`);
} else {
  console.log(`you pay now`);
}

//////////////////////////logical operator !
let loggedInUser;

if (!loggedInUser) {
  console.log(`get out of my site!`);
}

let flavor = "watermelon";

if (!(flavor === `grape` || flavor === `cherry`)) {
  console.log(`no flavored ice for you!`);
}

//////////////////////////switch statement
let day = 4;

switch (day) {
  case 1:
    console.log(`monday`);
    break;
  case 2:
    console.log(`tuesday`);
    break;
  case 3:
    console.log(`wednesday`);
    break;
  default:
    console.log(`invalid day`);
}

//////////////////////////ternary operator
let num = 7;

if (num === 7) {
  console.log(`lucky`);
} else {
  console.log(`bad`);
}

num === 7 ? console.log(`lucky`) : console.log(`bad`);
