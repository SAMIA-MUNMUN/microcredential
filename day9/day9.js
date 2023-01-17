/*
console.log('Samia Munmun');
// if statement
let day = true;
let night = false;

if (day) {
    console.log(`The condition or statement is : ${day}`);
}

let num1 = '20'; // string data
let num2 = 20; // numerical data

// '==' only compares value, not type
if (num1 == num2) {
    console.log(`${num1} and ${num2} are equal in value!`);
}
// '===' compares both value and type 
if (num1 === num2) {
    console.log(`${num1} and ${num2} are equal in value and type`);
}

// example 1
let goodMood = true;
let gotSleep = false;

if (goodMood == gotSleep) {
    console.log(`Today is a good day!`);
}
else{
console.log(`I am moody!`);
}
// example 2
let a = 5, b=4, equalNum;
if(a===b){
    equalNum = true;
}
else{
    equalNum = false;
}

console.log(`Are the numbers the same? ${equalNum}`)

// example 3
let n1 = 10, n2 = 5;
if (n1===n2){
    console.log('The numbers are equal')
}
else if(n1>n2){
console.log('number 1 is greater than number 2')}
else if(n2>n1){
    console.log('number 1 is less than number 2')
}
else{
    console.log('INVALID ENTRY')
}
// example 4
let colors =['red','blue','green','yellow','orange'];
 let userPick = parseInt(prompt("Select a color from 1 to 5"));
  let selectColor = colors[userPick - 1]

 if(selectColor === 'red'){
 console.log('The selected color is red!')
 }
 else if (selectColor ==='blue'){
 console.log('The selected color is blue!')
 }
 else if (selectColor ==='green'){
 console.log('The selected color is green!')
 }
 else if (selectColor ==='yellow'){
 console.log('The selected color is yellow!')
 }
 else if (selectColor ==='orange'){
 console.log('The selected color is orange!')
 }
 else{
 console.log('You selected color number ${userPick} which is not in the list')
 }

 // example 5
 let userInput = prompt('Enter a number');
 let checkInput= parseInt(userInput);
 checkInput = isNaN(checkInput);

 if(checkInput){
    console.log(`${userInput} is a string or character`)
 }
 else{
    console.log(`${userInput} is a number`)
 }

 // example 6
 let password = prompt('Enter a password: ');
 if (password.length >= 6) {
    console.log(`Password has 6+ characters: `);
    if (password.indexOf(' ') === -1) {
        console.log(`Warning! Password ${password} has no SPACE!`);
    } else {
        console.log(`Warning! password = ${password} has SPACE!`); 
    }
 } else {
    console.log(`Password has less than 6 characters.`);
 }

 // example 7
 let name = prompt(`Enter a name! `);
 if (name) {
    console.log(`Welcome to the program`);
 } else {
    console.log(`You did not enter a name!`);
 }
 */

// ----- Activity 6 -----
// Activity 6.1
console.log('Activity 6.1');
let value = prompt(`Please enter a number or string: `);
if (isNaN(value)) {
    // value is a string
    console.log(`${value} is a string.`);
} else {
    // value is a number
    if (value == 0) {
        // value is 0
        console.log(`The user has entered 0 (zero).`);
    } else if (value > 0) {
        // value is positive
        console.log(`${value} is a positive number.`);
    } else {
        // value is negative
        console.log(`${value} is a negative number.`);
    }
}

// Activity 6.2
console.log('Activity 6.2');
let color = prompt(`Pick a color (type a, b, or c):\na) Red\nb) Blue\nc) Green`);
let colorLowerCase = color.toLowerCase();
switch(colorLowerCase) {
    case 'a':
        console.log(`The pick color is Red`);
        break;
    case 'b':
        console.log(`The pick color is Blue`);
        break;
    case 'c':
        console.log(`The pick color is Green`);
        break;
    default:
        console.log(`Color is not in the list!`);
}
