let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });

  total += price;

  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}