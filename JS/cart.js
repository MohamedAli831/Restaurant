const cartItemsEl = document.getElementById("cartItems");

let cart = JSON.parse(localStorage.getItem("CART")) || [];

function renderCartItems() {
cartItemsEl.innerHTML = ""; // clear cart element
cart.forEach((item) => {
cartItemsEl.innerHTML += `
<tr>
<td><img src="${item.image}" width="80px" alt=""></td>
<td>${item.name}</td>
<td>${item.price}</td>
<td>
<a href="#" class="cart__remove" onclick="removeItemFromCart('${item.id}')">
<i class="fa-solid fa-trash"></i>
</a>
</td>
</tr>
`;
});
}
renderCartItems();

function renderSubtotal() {
const totalItemsInCart = document.querySelector("#quantity");
let totalItems = 0;
cart.forEach((item) => {
totalItems += item.numberOfUnits;
});
totalItemsInCart.innerHTML = `(${totalItems})`;
}
renderSubtotal();
// remove item from cart
function removeItemFromCart(id) {
cart = cart.filter((item) => item.id != id);

localStorage.setItem("CART", JSON.stringify(cart));
renderCartItems();
renderSubtotal();
}
