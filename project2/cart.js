/* Populate cart items on load */
document.addEventListener("DOMContentLoaded", function() {
    populateCartItems();
    setRemoveIconClickEventListeners();
    getTotalCartItems();

    // add click event listener for cart modal
    const cartModal = document.querySelector('#cartWindow');
    const checkoutBtn = document.querySelector('.checkout');
    const xclose1 = document.querySelector('.cartmodalHeadX')

    // click event listener for opening cart modal   
    checkoutBtn.addEventListener('click', function(){
        cartModal.style.display = 'block'
    })
    // click event listener for closing modal   
    xclose1.addEventListener('click',function(){
        cartModal.style.display = 'none'
    })

});

/* shopping cart */

let cart = [];

function addToCart(item, price) {
let product = { name: item, cost: price };
cart.push(product);
displayCart();
}

function displayCart() {
let cartList = "";
let totalCost = 0;
for (let i = 0; i < cart.length; i++) {
    cartList += "<li>" + cart[i].name + " - $" + cart[i].cost + "</li>";
    totalCost += cart[i].cost;
}
document.getElementById("cart-list").innerHTML = cartList;
document.getElementById("total").innerHTML = "$" + totalCost;
}

// function to populate cart items in table
const populateCartItems = () => {
    const mzData = sessionStorage.getItem('mzData');
    if (mzData && Object.keys(JSON.parse(mzData)).length > 0) {
        const mzObject = JSON.parse(mzData);
        let total = 0;
        let tableRows = '<table width="100%"><thead><tr><td>Remove</td><td>Image</td><td>Product</td><td>Price</td><td>Quantity</td><td>Subtotal</td></tr></thead><tbody id="cartItems">';
        for (key in mzObject) {
            const num = parseInt(key);
            const quantity = mzObject[key];
            const item = cartItems[num - 1];
            const price = item.price;
            const itemPrice = quantity * price;
            total += itemPrice;
            // set the table row
            let itemRow = `<tr class="middle_row" id="middle_row_${key}">
            <td class="remove_row" id="remove_row_${key}"><a href="javascript:;" class="removeItem"><img src="removeIcon.png" alt="Remove Item"></a></td>`;
            itemRow += `<td class="image_row"><a href="javascript:;" class="imageItem"><img src="image${key}.jpg" alt="Image"></a></td>`;
            itemRow += `<td class="product_row"><p class="productRow">${item.description}</p></td>`;
            itemRow += `<td class="price_row"><p class="priceRow">$${item.price}.00</p></td>`;
            itemRow += `<td class="quantity_row"><p class="quantityRow">x ${quantity}</p></td>`;
            itemRow += `<td class="subtotal_row"><p class="subtotalRow">$${itemPrice}.00</p></td></tr>`;
            tableRows += itemRow;
        }
        tableRows += `<tr id="last_row"><td class="total_cart">Total</td><td></td><td></td><td></td><td></td>`;
        tableRows += `<td class="total_cart" id="totalPrice"><p class="totalCartRow">$${total}.00</p></td></tr></tbody></table>`;
        document.getElementById("cart").innerHTML = tableRows;
        document.querySelector('.checkout').style.display = 'block';
    } else {
        document.getElementById("cart").innerHTML = '<p>Currently, there are no items in the cart.</p>'; 
        document.querySelector('.checkout').style.display = 'none';  
    }
}

// function to set remove icon click event listeners
const setRemoveIconClickEventListeners = () => {
    /* For removing items from cart */
    const removeIcons = document.querySelectorAll('.remove_row');
    let key;
    removeIcons.forEach((item) => {
        item.addEventListener('click', function() {
            const parentId = this.closest('.middle_row').id;
            const row = document.querySelector('#' + parentId);
            row.remove();
            key = parentId.substr(11).toString();

            // remove entry from mzData
            const mzData = sessionStorage.getItem('mzData');
            if (mzData) {
                const mzObject = JSON.parse(mzData);
                delete mzObject[key];
                sessionStorage.setItem('mzData', JSON.stringify(mzObject));
            }

            //update total price in cart table
            reCalculateTotalPrice();

            //update badge
            getTotalCartItems();
        });
    });
}

//function to re-calculate the total price
const reCalculateTotalPrice = () => {
    const mzData = sessionStorage.getItem('mzData');
    if (mzData && Object.keys(JSON.parse(mzData)).length > 0) {
        // re-calculate total price
        const mzObject = JSON.parse(mzData);
        let total = 0;
        for (key in mzObject) {
            const num = parseInt(key);
            const quantity = mzObject[key];
            const item = cartItems[num - 1];
            const price = item.price;
            const itemPrice = quantity * price;
            total += itemPrice;
        }
        document.getElementById("totalPrice").innerHTML = `<p class="totalCartRow">$${total}.00</p>`;
    } else {
        // show message that no item exists in cart
        document.getElementById("cart").innerHTML = '<p>Currently, there are no items in the cart.</p>';
        document.querySelector('.checkout').style.display = 'none';
    }
}



