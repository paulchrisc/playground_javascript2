'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasdriverlicense = true;
// if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio';


function logger() {
    console.log(`My name is Jonas`);
}

//calling / running / invoking function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// const num = Number('23');



//function declaration


// function calcAge1(birthYear) {
//     // const age = 2037 - birthYear;
//     // return age;
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // console.log(age1);


// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991)

// console.log(age1, age2)


//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirementAge = 65 - age;
//     // return retirementAge;
//     return `${firstName} retires in ${retirementAge} years`;
// }

// // console.log(yearsUntilRetirement(1991, 'Paul'));
// // console.log(yearsUntilRetirement(1980, 'Bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// coding challenge 1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores �
GOOD LUCK �
*/

//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const calAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calAverage(44, 23, 71));

// const scoreDolphins = calAverage(44, 23, 71);
// const scoreKoalas = calAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log(`No winner!`)
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)



// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// function cutFruitPieces(fruit) {
//     return fruit * 4;s
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';


