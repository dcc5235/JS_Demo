//for loops

for ([initialExpression]; [condition]; [incrementExpression])
  // Example 1
  for (let i = 1; i <= 10; i++) {
    console.log("Hello");
  }

//i variable looping Hello +1 until the value is equal to or less than 10
Hello;
Hello;
Hello;
Hello;
Hello;
Hello;
Hello;
Hello;
Hello;
Hello;


//loops and arrays
// Example 1
const examScores = [98, 77, 84, 91, 57, 66];

for(let i = 0; i < examScores.length; i++){
  console.log(i, examScores[i]);
}

0 98
1 77
2 84
3 91
4 57
5 66

// Example 2
const word = 'stressed';

for (let i = word.length -1; i >=0; i--){
  console.log(word[i]);
}

//nested for loops
```jsx
for(let i = 1; i <= 10; i++) {
  console.log('outer loop:', i);
  for(let j = 10; j >= 0; j -= 2){
    console.log('  inner loop', j);
  }
}

outer loop: 1
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0
outer loop: 2
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0
outer loop: 3
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0
outer loop: 4
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0
outer loop: 5
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0
outer loop: 6
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0
outer loop: 7
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0
outer loop: 8
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0
outer loop: 9
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0
outer loop: 10
  inner loop 10
  inner loop 8
  inner loop 6
  inner loop 4
  inner loop 2
  inner loop 0

  ```jsx
  // while(some condition)
  // in the loop, update or attempt to make that condition false
  ```
  
  ```jsx
  // for loop
  for(let i=0; i<=5; i++){
  console.log(i)}
  
  // same loop written as while loop
  // while some condition is true, run this code
  let j=0;
  while(j<=5){
  console.log(j)
  j++;}
  
  // Example 1
  const target = Math.floor(Math.random() * 10);
  let guess = Math.floor(Math.random() * 10);
  while(guess !== target){
  console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
  }
  console.log(`CONGRATS! YOU WIN!`);
  
  // Example 2 with break*
    while(true){
    if(target === guess) break;
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
  }
    console.log(`CONGRATS! YOU WIN!`);

    ```jsx
// Syntax
for (variable of iterable){
  statement
}

// Example 1
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for(let sub of subreddits){
  console.log(sub);
}

// Example 2
const magicSquare = [[2, 7, 6], [9, 5, 1], [4,3, 6]];

for(let row of magicSquare){
  let sum = 0;
  for(let num of row){
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

2,7,6 summed to 15
9,5,1 summed to 15
4,3,6 summed to 13

// Example 3*
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
};

for(let movie of Object.keys(movieReviews)){
  console.log(movie, movieReviews[movie]);
}

Arrival 9.5
Alien 9
Amelie 8
In Bruges 9
Amadeus 10
Kill Bill 8
Little Miss Sunshine 8.5
Coraline 7.5

for (variable in object) {
  statement
}

const jeoparyWinnings = {
  regularPlay: 2522700,
  wastonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 10000
}

for(let prop in jeoparyWinnings){
  console.log(prop);
  console.log(jeoparyWinnings[prop]);
}

let total = 0;
for(let prop in jeoparyWinnings){
  total += jeoparyWinnings[prop];
}

regularPlay
2522700
wastonChallenge
300000
tournamentOfChampions
500000
battleOfTheDecades
10000
// Total Winnings
3332700