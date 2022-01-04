/*
      let js = "amazing";
    //   console.log(40 + 8 + 23 - 10);
      console.log('Jonas');
      console.log(23);
      let firstName = "Jessica";
      console.log(firstName);
      let PI = 3.1415;
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);


let javascriptIsFun = true; 
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jessica');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";
job = 'teacher';

// Math operators
const now = 2022;
const ageJessica = now - 1994;
const ageMirel = now - 1993;
console.log(ageJessica, ageMirel);
console.log(ageJessica * 2, ageJessica / 10, 2 ** 3);
const firstName = 'Jessica';
const lastName = 'Banushi';
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x +10 = 25
x *= 4; // x = x * 4 = 100
x++; // x= x + 1 = 101
x--; // x = x - 1 = 100
x--;
console.log(x);

// Comparison operators 
console.log(ageJessica > ageMirel); // >, <, >=, <=
console.log(ageJessica >= 18);
const isFullAge = ageJessica >= 18; 
console.log(now - 1994 > now - 1993);

const now = 2022;
const ageJessica = now - 1994;
const ageMirel = now - 1993;

console.log(now - 1994 > now - 1993);

let x, y; 
x = y = 25-10-5;
console.log(x, y);

const averageAge = (ageMirel + ageJessica) / 2;
console.log(ageJessica, ageMirel, averageAge);
*/

/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀 */
// Data 1
/*
let weight; 
let height;
const BMI = weight / height ** 2;
const Markweight = 78;
const Markheight = 1.69;
const MarkBMI = Markweight / Markheight ** 2;
const Johnweight = 92; 
const Johnheight = 1.95; 
console.log(MarkBMI); 
const JohnBMI = Johnweight / Johnheight ** 2;
console.log(JohnBMI);

// Data 2
let weight; 
let height;
const BMI = weight / height ** 2;
const Markweight = 95;
const Markheight = 1.88;
const MarkBMI = Markweight / Markheight ** 2;
const Johnweight = 85; 
const Johnheight = 1.76; 
console.log(MarkBMI); 
const JohnBMI = Johnweight / Johnheight ** 2;
console.log(JohnBMI);
const markHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI > JohnBMI);
*/
/*
const firstName = 'Jessica'; 
const job = 'researcher';
const birthYear = 1994;

const jessica = "I'm" + ' ' + firstName + ', a' + ' ' + job + ', born in' + ' ' + birthYear;
console.log(jessica);
*/
/*
const firstName = 'Jessica'; 
const job = 'researcher';
const birthYear = 1994;
const year = 2021;

const jessica = "I'm" + ' ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jessica);

const jessicaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log (jessicaNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`string
multiple
lines`);
*/
/*
const age = 15; 
if(age >= 18) {
console.log('Sarah can start driving license 🚗');
} else {
const yearsLeft = 18 - age;
console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2013;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/
/*
let weight;
let height;
const BMI = weight / height ** 2;
const Markweight = 95;
const Markheight = 1.88;
const MarkBMI = Markweight / Markheight ** 2;
const Johnweight = 85; 
const Johnheight = 1.76; 
console.log(MarkBMI); 
const JohnBMI = Johnweight / Johnheight ** 2;
console.log(JohnBMI);
const markHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI > JohnBMI);

if(MarkBMI > JohnBMI) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

if(MarkBMI > JohnBMI) {
  console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
} else {
  console.log(`John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})!`);
}
*/
/*
//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 27 + ' years old');
console.log('I am ' + '27' + ' years old');
console.log('I am ' + String(27) + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2')

let n = '1' + 1; //'11'
n = n - 1; //'10'
console.log(n);
*/
/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jessica'));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

let height = 163;
if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/
/*
const age = '18'; 
if(age === 18) console.log('You just became an adult :D (strict)');

if(age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number (prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23 | 23 === 23
  console.log('Cool! 23 is an amazing number!');
} else if(favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also cool');
}
else {
  console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?');
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision; 

// if(shouldDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C 
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
// const hasHigherPoints = scoreDolphins > scoreKoalas;
// if(scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy :D');
// } else if(scoreDolphins < scoreKoalas) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both teams win!');
// }

// Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);
// const hasHigherPoints = scoreDolphins > scoreKoalas;
// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy :D');
// } else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy');
// }

// Bonus 2

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);
// const hasHigherPoints = scoreDolphins > scoreKoalas;
// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy :D');
// } else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both teams win!');
// } else {
//   console.log('No one wins');
// }
/*
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day');
}
*/
/*
const age = 23;
age >= 18
  ? console.log('I like to drink wine')
  : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

// Challenge number 4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

// // const bill = 275;
// // const bill = 40;
// const bill = 430;
// const tip1 = bill * 0.15;
// const finalValue1 = bill + tip1;
// const tip2 = bill * 0.2;
// const finalValue2 = bill + tip2;
// bill >= 50 && bill <= 300 ? console.log(tip1) : console.log(tip2);
// console.log(
//   `The bill was 430, the tip was ${tip2}, and the total value ${finalValue2}`
// );
