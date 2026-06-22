
let cart = [];
let total = 0;

function addToCart(name, price) {

    const existingItem = cart.find(
        item => item.name === name
    );

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({
            name,
            price,
            qty: 1
        });
    }

    renderCart();
}

function renderCart() {

    const cartItems =
        document.getElementById("cart-items");

    cartItems.innerHTML = "";

    total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        cartItems.innerHTML += `
        <tr>
            <td>${item.name}</td>

            <td>
                <button class="qty-btn"
                onclick="decreaseQty(${index})">-</button>

                ${item.qty}

                <button class="qty-btn"
                onclick="increaseQty(${index})">+</button>
            </td>

            <td>
                ₹${(item.price * item.qty).toLocaleString()}
            </td>

            <td>
                <button class="remove-btn"
                onclick="removeItem(${index})">
                    Remove
                </button>
            </td>
        </tr>`;
    });

    document.getElementById("cart-count")
        .innerText = cart.reduce(
            (sum, item) => sum + item.qty,
            0
        );

    document.getElementById("total")
        .innerText = total.toLocaleString();
}

function increaseQty(index) {
    cart[index].qty++;
    renderCart();
}

function decreaseQty(index) {

    if (cart[index].qty > 1) {
        cart[index].qty--;
    } else {
        removeItem(index);
        return;
    }

    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

function searchProducts() {

    const input =
        document.getElementById("searchInput")
        .value.toLowerCase();

    const products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        const text =
            product.innerText.toLowerCase();

        product.style.display =
            text.includes(input)
            ? "block"
            : "none";
    });
}

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        if (category === "all") {
            product.style.display = "block";
        } else {
            product.style.display =
                product.classList.contains(category)
                ? "block"
                : "none";
        }
    });
}

function payNow() {

    if (total <= 0) {
        alert("Your cart is empty!");
        return;
    }

    alert(
        "Proceeding to payment of ₹" +
        total.toLocaleString()
    );

    // Razorpay Integration Here
}
