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

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter',];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020,);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// // friends = ['Bob', 'Alice']

// const firstName = "Jonas"
// const paul = [firstName, 'Schmedtmann', 2037 - 1991, 'Teacher', friends];

// console.log(paul);
// console.log(paul.length);


//exercise

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1991, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[3]);
// const age4 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3, age4);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[3]), calcAge(years[years.length - 1]),]
// console.log(ages)




// //add elements
// const friends = ['Michael', 'Steven', 'Peter',];
// const newLength = friends.push('Jay');
// console.log(newLength);


// friends.unshift('John');
// console.log(friends);


// //remove elements

// friends.pop(); //last element removal
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));


// friends.push(23)
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));


// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// } else {
//     console.log('You do not have any Friends')
// }


/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK */

// const calcTip = function (bill) {
//     return bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],]
// console.log(bills, tips, totals)


// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     Friends: ['Michael', 'Peter', 'Steven']
// }


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     Friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);


// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name'
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIN = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');


// if (jonas[interestedIN]) {
//     console.log(jonas[interestedIN]);
// } else {
//     console.log('Wrong Request. Choose between firstName, lastName, age, job and friends')
// }

// jonas.location = 'Portugal'
// jonas['twitter'] = '@paulchrisc'
// console.log(jonas);


// challenge
// 'Jonas has 3 friends and his best friend is called Michael'

// const jonas = {
//     firstName: 'Jonas',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friends is called ${jonas.friends[0]}`);

