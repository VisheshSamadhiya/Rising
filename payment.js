let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;

    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
}

function payNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    checkout(total);
}

function checkout(amount) {
    const result = confirm(
        `🛒 Test Payment Gateway\n\nAmount: ₹${amount}\n\nClick OK to simulate payment success`
    );

    if (result) {
        alert("✅ Payment Successful!");

        cart = [];
        total = 0;

        document.getElementById("cart-count").innerText = 0;
        document.getElementById("total").innerText = 0;

        renderCart();
    } else {
        alert("❌ Payment Failed!");
    }
}