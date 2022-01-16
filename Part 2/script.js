'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

function logger() {
  console.log('My name is Jessica');
}
// calling / running / invoking function
logger(); // this doesn't return a value
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1994);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1994);

console.log(age1, age2);


// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1994, 'Jessica'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1994, 'Jessica'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK 😀
/*
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
console.log(calcAverage(28, 29, 134));
const averageDolphins = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(65, 54, 49);
console.log(`Dolphins average score is ${averageDolphins}`);
console.log(`Koalas average score is ${averageKoalas}`);

const averageDolphins2 = calcAverage(85, 54, 71);
const averageKoalas2 = calcAverage(23, 34, 27);
console.log(`Dolphins average score is ${averageDolphins2}`);
console.log(`Koalas average score is ${averageKoalas2}`);

const checkWinner = function (averageDolphins2, averageKoalas2) {
  if (averageDolphins2 > averageKoalas2 * 2) {
    console.log(`Dolphins win (${averageDolphins2} vs ${averageKoalas2})`);
  } else if (averageKoalas2 > averageDolphins2 * 2) {
    console.log(`Koalas win (${averageKoalas2} vs ${averageDolphins2})`);
  } else {
    console.log('No team wins');
  }
};
checkWinner(46, 56);
checkWinner(averageDolphins2, averageKoalas2);
*/
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(y.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = ['Jonas', 'Shcnedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/*
// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last element
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

// Coding challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
// GOOD LUCK 😀

// const bill = 100;
// const tip1 = bill * 0.15;
// const finalValue1 = bill + tip1;
// const tip2 = bill * 0.2;
// const finalValue2 = bill + tip2;
// bill >= 50 && bill <= 300 ? console.log(tip1) : console.log(tip2);
// console.log(
//   `The bill was ${bill}, the tip was ${tip1}, and the total value ${finalValue1}`
// );

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

const jessicaArray = [
  'Jessica',
  'Banushi',
  2022 - 1994,
  'researcher',
  'almost-engaged to Mirel Xhafa',
  ['Meri', 'Alisa', 'Anjeza'],
];
console.log(jessicaArray);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Banushi',
  age: 2022 - 1994,
  job: 'researcher',
  maritalStatus: 'almost-engaged to Mirel Xhafa',
  friends: ['Meri', 'Alisa', 'Anjeza'],
};

console.log(jessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Banushi',
  age: 2022 - 1994,
  job: 'researcher',
  maritalStatus: 'almost-engaged to Mirel Xhafa',
  friends: ['Meri', 'Alisa', 'Anjeza'],
};
console.log(jessica);

console.log(jessica.lastName);
console.log(jessica['lastName']);

const nameKey = 'Name';
console.log(jessica['first' + nameKey]);
console.log(jessica['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Jessica? Choose between firstName, lastName, age, job, maritalStatus, and friends'
);
console.log(jessica[interestedIn]);

if (jessica[interestedIn]) {
  console.log(jessica[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, maritalStatus, and friends'
  );
}

jessica.location = 'Albania';
jessica['instagram'] = '@xhesika_banushi';
console.log(jessica);

// Challenge
// "Jessica has 3 friends and her best friend is called Meri"
console.log(
  `${jessica.firstName} has ${jessica.friends.length} friends, and her best friend is called ${jessica.friends[0]}`
);


const jessica = {
  firstName: 'Jessica',
  lastName: 'Banushi',
  birthYear: 1994,
  job: 'researcher',
  maritalStatus: 'almost-engaged to Mirel Xhafa',
  friends: ['Meri', 'Alisa', 'Anjeza'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${
      jessica.job
    }, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(jessica.calcAge());
console.log(jessica.age);

// Challenge
// "Jessica is a 28-year old researcher and she has a driver's license."

console.log(jessica.getSummary());


// Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

console.log(`${mark.fullName} has a BMI of ${mark.calcBMI()}`);
console.log(`${john.fullName} has a BMI of ${john.calcBMI()}`);

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s BMI (${john.calcBMI()})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s BMI (${mark.calcBMI()})`
  );
}


// console.log('Lifting weight repetition 1');
// console.log('Lifting weight repetition 2');
// console.log('Lifting weight repetition 3');
// console.log('Lifting weight repetition 4');
// console.log('Lifting weight repetition 5');
// console.log('Lifting weight repetition 6');
// console.log('Lifting weight repetition 7');
// console.log('Lifting weight repetition 8');
// console.log('Lifting weight repetition 9');
// console.log('Lifting weight repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

const jessicaArray = [
  'Jessica',
  'Banushi',
  2022 - 1994,
  'researcher',
  ['Meri', 'Alisa', 'Anjeza'],
  true,
];

const types = [];

// console.log(jessicaArray[0]);
// console.log(jessicaArray[1]);
// ...
// console.log(jessicaArray[4]);

for (let i = 0; i < jessicaArray.length; i++) {
  // Reading from jessica array
  console.log(jessicaArray[i], typeof jessicaArray[i]);

  // Filling types array
  // types[i] = typeof jessicaArray[i];
  types.push(typeof jessicaArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break
console.log('---ONLY STRINGS---');
for (let i = 0; i < jessicaArray.length; i++) {
  if (typeof jessicaArray[i] !== 'string') continue;

  console.log(jessicaArray[i], typeof jessicaArray[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < jessicaArray.length; i++) {
  if (typeof jessicaArray[i] === 'number') break;

  console.log(jessicaArray[i], typeof jessicaArray[i]);
}


const jessicaArray = [
  'Jessica',
  'Banushi',
  2022 - 1994,
  'researcher',
  ['Meri', 'Alisa', 'Anjeza'],
  true,
];

// 0, 1, 2, 3, 4
// 4, 3, 2, 1, 0

for (let i = jessicaArray.length - 1; i >= 0; i--) {
  console.log(i, jessicaArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}


// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 😀

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
  console.log(bills[i], tips[i], totals[i]);
}
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));
