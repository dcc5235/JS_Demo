//////////////////////////arrays
let shoppingList = ["cereal", "cheese", "ice"];

let myCollection = [12, "dog", true, null, NaN];

//////////////////////////array indices
let colors = ["red", "orange", "yellow", "green"];

//////////////////////////modifying arrays

let shoppingCart = ["Cheddar Cheese", "2% Milk"];

shoppingCart[1] = "Whole Milk";
shoppingCart[2] = "Ice Cream";

shoppingCart[shoppingCart.length] = "Tomatoes";

//////////////////////////array methods: push and pop
let topSongs = [
  "First Time Ever I Saw Your Face",
  "God Only Knows",
  "Life on Mars",
];

topSongs.push("Fortunate Son");

topSongs.pop();

//////////////////////////array methods: shift and unshift
let dishesToDo = ["big platter"];
dishesToDo.unshift("large plate");
2;
dishesToDo.unshift("small plate");
3;

dishesToDo.shift("large plate");
("small plate");

//////////////////////////concat
let fruits = ["apple", "banana"];
let veggies = ["asparagus", "brussel sprouts"];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
//////////////////////////includes and indexof
let ingredients = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "brown sugar",
  "shrimp",
  "eel",
  "butter",
];
ingredients.includes("false");
false;

if (ingredients.includes("flour")) {
  console.log(`i am gluten free, i cannot eat that!`);
}

ingredients.indexOf("eel");
6;
//////////////////////////join and reverse
let letters = ["T", "C", "E", "P", "S", "E", "R"];
letters.reverse()(7)[("R", "E", "S", "P", "E", "C", "T")];

letters(7)[("R", "E", "S", "P", "E", "C", "T")];

letters.join();
("R,E,S,P,E,C,T");

letters.reverse().join("-");
("R-E-S-P-E-C-T");
//////////////////////////

//////////////////////////

//////////////////////////
