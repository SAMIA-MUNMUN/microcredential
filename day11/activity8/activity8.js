//Activity 8 : 1
function checkName(){
   let name = prompt('Please enter your valid name:')

while(name===null || name==="" || isNaN(name)===false){

if(name===null || name===""){
   name = prompt('You forgot to enter a name. Enter a name again:')
}
else if(isNaN(name)=== false){
    name = prompt(`${name} is invalid! Enter a name again`)
}
   
}
let NAME = name.toUpperCase();
    console.log(`Welcome ${NAME} to the class!`)


}

checkName() 


//aCTIVITY 8 : 2

function checkNum(){
    let number = prompt('Please Enter a number:')

    while(isNaN(number)===true){
    number = prompt('Please Enter a valid number:')
    }
    if(number%2===0){
        console.log(`the number ${number} is even : true`)
        return true
    }
    else{
        console.log(`the number ${number} is odd : false`)
    return false
    }

}
let num = checkNum()


//Activity 8 : 3
function lottery(number){
    
   for(let num=1; num<=number ; num++)
   
   {
    let numberGames
    let msg=[]
    for(let rand = 1; rand<=5; rand++){
        numberGames = 0 + Math.floor(Math.random()*99)
        msg.push(numberGames)
    }
    console.log(`the numbers for game ${num} : ${msg}`)
   }
   
}




