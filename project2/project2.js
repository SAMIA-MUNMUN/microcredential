// force page to start from top on page reload
window.onbeforeunload = function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0);
};

// add click event listeners for items
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i <=15; i++) {
        //const item = document.querySelector('.link' + i)
        const modal = document.querySelector('#windowItem' + i)
        const xclose = document.querySelector('.modalHeadX' + i)
        const introItem = document.querySelector('.l'+ i)

        // click event listener for opening modal   
        introItem.addEventListener('click', function(){
                modal.style.display = 'block'
        })

        // click event listener for closing modal   
        xclose.addEventListener('click',function(){
                modal.style.display = 'none'
        })
    }

    // update badge for total cart items
    getTotalCartItems();
})

// add click event listeners to scroll into view
const pos = document.querySelector('.pos');
const posHeight = pos.scrollHeight;
const navTabs = document.querySelector('.navTabs');
collectionsLink.addEventListener('click', function(){
    const y = navTabs.getBoundingClientRect().top + window.scrollY - posHeight - 10;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
})

// add animationend event listener
document.body.addEventListener('animationend', function() {
    document.querySelector('.container').classList.remove('opacityEffect');
});

/*
apply bridal, groom and kid filters
*/

//bridal
const bridalFilter = document.querySelector('#bridalFilter');
const groomFilter = document.querySelector('#groomFilter');
const kidFilter = document.querySelector('#kidFilter');
bridalFilter.addEventListener('click', function(){
    const items = document.querySelectorAll('.item');
    if (bridalFilter.classList.contains('selected')) {
        // remove filter and show all
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            item.style.display = 'block';
        }
        bridalFilter.classList.remove('selected');
    } else {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.classList.contains("bridal")) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
        bridalFilter.classList.add('selected');
        groomFilter.classList.remove('selected');
        kidFilter.classList.remove('selected');
    }
    // add animation
    document.querySelector('.container').classList.add('opacityEffect');
});

//groom
groomFilter.addEventListener('click', function(){
    const items = document.querySelectorAll('.item');
    if (groomFilter.classList.contains('selected')) {
        // remove filter and show all
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            item.style.display = 'block';
        }
        groomFilter.classList.remove('selected');
    } else {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.classList.contains("groom")) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
        groomFilter.classList.add('selected');
        bridalFilter.classList.remove('selected');
        kidFilter.classList.remove('selected');
    }
    // add animation
    document.querySelector('.container').classList.add('opacityEffect');
});

//kid
kidFilter.addEventListener('click', function(){
    const items = document.querySelectorAll('.item');
    if (kidFilter.classList.contains('selected')) {
        // remove filter and show all
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            item.style.display = 'block';
        }
        kidFilter.classList.remove('selected');
    } else {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.classList.contains("kidGirl") || item.classList.contains("kidBoy")) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
        kidFilter.classList.add('selected');
        groomFilter.classList.remove('selected');
        bridalFilter.classList.remove('selected');
    }
    // add animation
    document.querySelector('.container').classList.add('opacityEffect');
});

// Add to bag
const addToBagLinks = document.querySelectorAll('.link');
addToBagLinks.forEach((item) => {
    item.addEventListener('click', function() {
        const parentId = this.closest('.item').id;
        const key = parentId.substr(4).toString();
        const mzData = sessionStorage.getItem('mzData');
        if (!mzData) {
            const obj = {};
            obj[key] = 1;
            sessionStorage.setItem('mzData', JSON.stringify(obj));
        } else {
            const data = JSON.parse(mzData);
            if (data.hasOwnProperty(key)) {
                data[key] = data[key] + 1;
            } else {
                data[key] = 1;
            }
            sessionStorage.setItem('mzData', JSON.stringify(data));
        }
        // update badge
        getTotalCartItems();
    });
});