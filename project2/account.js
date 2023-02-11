document.addEventListener("DOMContentLoaded", function() {
    getTotalCartItems();
});

function passValues(){
    let username = document.querySelector('#user').value
    let useremail = document.querySelector('#useremail').value   
    sessionStorage.setItem('userN',username)
    sessionStorage.setItem('emailA',useremail)
    return false
}

let input1 = document.querySelector('.submit1')
input1.addEventListener('click',passValues)
