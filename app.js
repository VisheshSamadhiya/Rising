let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;

    renderCart();
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
                <td>
                    <button class="remove-btn"
                    onclick="removeItem(${index})">
                        Remove
                    </button>
                </td>
            </tr>
        `;
    });
}

function removeItem(index) {
    total -= cart[index].price;

    cart.splice(index, 1);

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;

    renderCart();
}

function payNow() {
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    alert(
        "Payment Gateway Integration Coming Soon\n\nTotal: ₹" + total
    );
}

function searchProducts() {
    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let products =
        document.querySelectorAll(".product");

    products.forEach(product => {
        let name =
            product.querySelector("h3")
            .innerText
            .toLowerCase();

        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function filterProducts(category) {

    let products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        if (category === "all") {
            product.style.display = "block";
        }
        else if (
            product.classList.contains(category)
        ) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }
    });
}