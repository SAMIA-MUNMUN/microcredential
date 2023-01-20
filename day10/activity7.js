let num =prompt('Please enter a number between 1 and 10 : ');

while(isNaN(num) === true || num>10 || num<1){
    
    if(isNaN(num) === true){

     num = prompt(`${num} is not a number. Enter a number again.` )
     
    }

    else if (num>10){
        num = prompt(`${num} is greater than 10. Enter a number less than 10.`)
    }

    else if (num<1){
        num = prompt(`${num} is less than 1. Enter a number greater than 1.`)
    }
         
}
console.log(`Your entered number is : ${num}.`)

for(num;num<=20;num++){

    console.log(`Your number is : ${num} now.`)
}


