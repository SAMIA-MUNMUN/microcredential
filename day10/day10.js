console.log('Samia Munmun');
/*
console.log(`The current counter is 1`);
console.log(`The current counter is 2`);
console.log(`The current counter is 3`);
console.log(`The current counter is 4`);
console.log(`The current counter is 5`);
*/
//simplify the previous lines using for loop
for(let counter = 1; counter<=5; counter++){
    console.log(`The current counter is ${counter}`)
}
//example 2) print number from 100 to 0, inclusive, decreasing order in a step of 10
for(let y = 100; y >=0; y -=10 ){
    console.log(`y=${y}`)
}

//example 3) print number from initial to 50, exclusive, only even numbers. the program will asks the user to enter the initial
let num = parseInt(prompt('Enter a number between 0 and 40: '));
for(num;num<50;num++){
    if(num%2===0){
    console.log(`number = ${num}`)
    }
}

//example 4) for loop in an array
let cars =['Tesla', 'BMW' , 'Mazda' , 'Nissan' , 'Jeep']

for(let i=0; i<cars.length ; i++ ){
    console.log(`car ${i+1} = ${cars[i]}`)
}

//example 5) for ... of loop to print each element in an array
for(let eachItem of cars){
    console.log(eachItem)
}

//example 6 ) for --- of loop to print each letter in a string 
let myString ="Prof. Wu"
for(let eachLetter of myString){
    console.log(eachLetter)
}

// example 8) nesting for loops
let outerCounter = 1;
for(outerCounter;outerCounter<=5; outerCounter++){
console.log(`-------OUTER LOOP ${outerCounter}-------`)
for(let innerCounter = 30; innerCounter >=0 ; innerCounter -=10)
console.log(`Inner counter ${innerCounter}`)
}

// example 9) while loop
let z = 1
while(z<=5){
    console.log(`The current number is ${z}`)
    z++
}

// example 10) 
const SECRET = 8;
let guessNum = parseInt(prompt('Guess a number beetween 0 and 10'))
while(guessNum !==SECRET){
    guessNum = parseInt(prompt('WRONG! Take a guess again! '))

}
    console.log(`GREAT JOB! Number ${guessNum} is the secret number`)

    // example 11) working with break in a loop. Loop will be terminated when t=9
console.log('------- Example 11------')

    for(let t = 20; t>0 ; t--){
        console.log(`t = ${t}`)
        if(t===9){
            break;
        }
    }
    //example 12) working with continue in a loop. Loop will skip one iteration when t = 9
    console.log('------- Example 12------')
    for(let t = 20; t>0 ; t--){
        
        if(t===9){
            continue;
        }
        console.log(`t = ${t}`)
    }

    //example 13)
    
    const Numbers = [8, 2];
    let num1, num2;
    let guessNumbers = parseInt(prompt('Guess a number beetween 0 and 10'))
    for(let r of NUMBERS){
        
    
while(guessNumbers !== NUMBERS[0] || ){
    guessNumBERS = parseInt(prompt('WRONG! Take a guess again! '))
}
console.log(`GREAT JOB! Number ${guessNumbers} is the secret number`)

}
    