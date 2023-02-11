// function to calculate total number of items in the cart
const getTotalCartItems = () => {
    const mzData = sessionStorage.getItem('mzData');
    if (mzData && Object.keys(JSON.parse(mzData)).length > 0) {
        // get total number of items in the cart
        const mzObject = JSON.parse(mzData);
        let total = 0;
        for (key in mzObject) {
            total += mzObject[key];
        }
        if (total > 0) {
            document.getElementById("badge").innerHTML = total;
            document.getElementById("badge").style.display = 'block';
        } else {
            document.getElementById("badge").style.display = 'none';
        }
    } else {
        document.getElementById("badge").style.display = 'none';
    }
}