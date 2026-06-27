let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    updateUI();
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);

    updateUI();
}

function updateUI() {
    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;

    renderCart();

    const payBtn = document.getElementById("payBtn");
    payBtn.disabled = cart.length === 0;
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>1</td>
                <td>₹${item.price}</td>
                <td><button onclick="removeItem(${index})">Remove</button></td>
            </tr>
        `;
    });
}

/* ---------------- PAYMENT (LINK BASED) ---------------- */

function payNow() {
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    // Optional confirmation
    let confirmPay = confirm("Proceed to payment gateway? Total: ₹" + total);

    if (confirmPay) {
        window.location.href = "https://rzp.io/rzp/hZNSccu";
    }
}