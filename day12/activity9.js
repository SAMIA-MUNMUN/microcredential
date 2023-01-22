console.log('Samia Munmun')
//example 13

console.log('------example 13 ------')

function yell(msg){
    try{console.log(msg.toUpperCase().repeat(3))}
    catch{
        console.log('Please pass a string next time!')
    }
}

function yellagain(msg){
    try{console.log(msg.toUpperCase().repeat(3))}
    catch(e){
        console.log(e)
        console.log('Please pass a string next time!')
    }
}
//example 12

console.log('------example 12 ------')

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){this.eggCount++;return 'EGG'}
}
//example 11 - how to access properties in a method using "this" keyword

console.log('------example 11 ------')

const cat ={
    name: 'Mickey',
    color: 'white with brown spots',
    breed: 'unknown',
    meow(){console.log(this.name)}
}
//example 10 - method

console.log('------example 10 ------')

const myMath = {
    area(side){return side*side},
    perimeter(side){return side*4}
}

//SKIP example 9

console.log('------example 9-skip ------')

//example 8 - function that returns another function

console.log('------example 8 ------')

function makeBetweenFunc(min, max){
    return function(num){
        if(num>min && num<=max){
            return true
        }
        else if(num<min || num>max){
            return false
        }
        else{
            return "CAN'T COMPARE"
        }
    }
}

let child = makeBetweenFunc(3,20)
console.log(child(10))

//example 7 - function calling another function

console.log('------example 7 ------')

function callTwice(dice){
    dice();
    dice();
}
function rolldice(){
    const roll = Math.trunc(Math.random()*7)
    console.log(roll)
}
callTwice(rolldice)

//example 6

console.log('------example 6 ------')

let sum = function(num1, num2){
    return num1+num2
}
let square = function(num) {
    return Math.pow(num,2)
}

//example 5

console.log('------example 5 ------')

    for(var i = 0; i<10 ; i++){
        console.log(i)
    }
    console.log(`The last value of i is ${i}`)

//example 4 - skip

console.log('------example 4-skip ------')

//example 3

console.log('------example 3 ------')

let message = 'Hello World!'
console.log(message)
message = 'Good evening'
console.log(message)

//example 2

console.log('------example 2 ------')

var fullMoon = true;
var species = 'human';

if(fullMoon){
    var species = 'wolf'
    console.log(`Full Moon! Lupin is a ${species}`)
}
console.log(`NOT full moon! Lupin is ${species}`)



//Example 1

console.log('------example 1 ------')

let msg = 'This is an outside message'

function displayMsg(){
    let msg = 'Hello World'
    return(msg)
}


