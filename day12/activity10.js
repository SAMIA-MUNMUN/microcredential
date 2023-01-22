console.log('Samia Munmun')

//Example 23

console.log('------- Example 23-------')

let div2 = document.querySelector('.d2')
div2.removeChild(div2.children[1])

//Example 24

console.log('------- Example 24-------')

let par1=document.querySelector('.p1')
par1.remove()

//Example 22

console.log('------- Example 22-------')

let subtitle = document.createElement('h2')
subtitle.append('PARKS TO VISIT IN NYC')

let parks = document.querySelector('.nyc')
parks.insertAdjacentElement("beforebegin",subtitle)

//Example 17-append a new element into a document

console.log('------- Example 17-------')

//step 1 - create the element
let myPara = document.createElement('p')
//step 2 - create the element content and append it to the new element
let mySentence = document.createTextNode('Appended paragraph')
myPara.appendChild(mySentence)
//step 3 - append the new element into an existing DOM element
let newP = document.querySelector('.d')
newP.prepend(myPara)


//Example 15

console.log('------- Example 15-------')

let list = document.querySelector ('li')[2]

//example 10

console.log('------- Example 10-------')

let n2 = document.querySelectorAll('#special .name')[1]
n2.className = 'bgBlue'

//example 6

console.log('------- Example 6-------')

let my = document.querySelector('.qcc')

//example 5

console.log('------- Example 5-------')

let names = document.querySelectorAll('#special .name')
for(let i = 0; i<names.length ; i++){
    names[i].style.fontWeight = 'bolder'
    names[i].style.fontStyle = 'italic'
    names[i].style.fontSize = '2em'
}

//example 4

console.log('------- Example 4-------')

let firstP = document.querySelector('#special p')
firstP.style.color = 'magenta'

//example 3

console.log('------- Example 3-------')

let n = document.getElementsByClassName('name')
for(let i=0; i<n.length; i++){
    n[i].style.color = 'orange'
}

//Example 2

console.log('------- Example 2-------')

let ps = document.getElementsByTagName('p')
console.log(ps)

//Example 1

console.log('------- Example 1-------')

let p1 = document.getElementById('one')
p1.style.color = 'olive';