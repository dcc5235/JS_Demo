//////////////////////////objects

// Creating Object Literals
const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13'
};
console.log(`fitBitData example \n`, fitBitData)

fitBitData example 
 {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13'
 }

console.log(`totalMiles returned \n`, fitBitData.totalMiles)

totalMiles returned 
 211.7

console.log(`totalMiles returned \n`, fitBitData.totalMiles)

totalMiles returned 
 211.7

 // Accessing Object Properties
 const numbers = {
  100: 'one hundred',
  16: 'sixteen'
  };
  
  console.log(numbers[100]) 
  "one hundred"

// Adding and Updating Properties
const userReviews = {};

userReviews['queenBee49'] = 4;
userReviews.mrSmith78 = 3.5;
console.log('Added properties for queenBee49 & mrSmith78 \n', userReviews)

Added properties for queenBee49 & mrSmith78 
 { queenBee49: 4, mrSmith78: 3.5 }

userReviews['queenBee49'] += 2;
console.log(`Added 2 to queenBee49 value \n`,  userReviews)

Added 2 to queenBee49 value 
 { queenBee49: 6, mrSmith78: 3.5 }

// Nested Arrays and Objects
const student = {
  firstName: 'Dany',
  lastName: 'Chheang',
  strengths: ['English', 'Art'],
exams: {
  midterm: 92,
  final: 88
}
};

console.log(`Value of avg of midterm and final \n`,(student.exams.midterm + student.exams.final)/2)

Value of avg of midterm and final 
 90

//Objects and Reference Types
const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
};

const palette2 = palette;
palette2.green = '#ebf876';
console.log(`Example displays all objects, including green \n`,palette2)

Example displays all objects, including green 
 {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
  green: '#ebf876'
}

//Array/Object Equality

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;
console.log(moreNums);

[ 1, 2, 3 ]