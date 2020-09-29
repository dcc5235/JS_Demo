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
```
