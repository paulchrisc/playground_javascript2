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

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     Friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function () {
//     //     // console.log(this)
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear
//         return this.age;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);


//challenge
// "jonas is a 46-year old teacher, and he has a drivers license"


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     Friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     calcage: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`


//     }
// }

// console.log(jonas.getSummary());

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"


Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.


GOOD LUCK � */


/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi

    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}



if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()})`)
} else {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()})`)
}

//or

mark.calcBMI();
john.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi})`)
} else {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.bmi})`)
}
*/

//for loop keeps running while condition is TRUE

// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Count ${rep}`);
// }


// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i])
// }


// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];


// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }

// console.log(ages);


// //continue and break



// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i])
// }

// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === 'number') break;

//     console.log(jonasArray[i], typeof jonasArray[i])
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }



// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`--------Starting exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise} Lifting weight rep ${rep}`);
//     }
// }


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Count ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Count ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You Rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6)
//         console.log('Loop ended')

// }

/*

Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 

*/


/*
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;

}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const averagebills = [];
const averagetips = [];
const averagetotals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tips[i] + bills[i])
}


console.log(bills, tips, totals)

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average


}
console.log(calcAverage(bills))
console.log(calcAverage(totals))
console.log(calcAverage(tips))

*/


// function howMuchWater(water, load, clothes) {
//     // Check if clothes amount is less than load amount
//     if (clothes < load) {
//       return 'Not enough clothes';
//     }
  
//     // Calculate max_load based on the load amount
//     var max_load = load * 2;
  
//     // Check if clothes amount is more than 2 times the max_load amount
//     if (clothes > max_load * 2) {
//       return 'Too much clothes';
//     }
  
//     // Calculate the amount of water needed
//     var water_needed = water * Math.pow(1.1, clothes - max_load);
  
//     // Round the result to 2 decimal places
//     water_needed = Math.round(water_needed * 100) / 100;
  
//     return water_needed;
//   }
  
//   // Example usage:
//   console.log(howMuchWater(5, 20, 11));


// function evenOrOdd(number) {
//     if(number % 2 == 0){
//       return "Even"
//     }else{
//     return "Odd"
//     }
//   }
  
//   console.log(3)