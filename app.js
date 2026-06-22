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

    alert(`Proceeding to payment of ₹${total}`) 
  }
  
function payNow() {
    alert("Payment button clicked!");
}