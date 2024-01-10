let cart = JSON.parse(localStorage.getItem("CART")) || [];

function addToCart(id) {
  // check if prodcut already exist in cart

  const item = products.find((product) => product.id === id);
  cart.push({
    ...item,
    numberOfUnits: 1,
  });
  localStorage.setItem("CART", JSON.stringify(cart));
  console.log(cart);
  // updateCart();
  renderSubtotal();
}

function renderSubtotal() {
  const totalItemsInCart = document.querySelector("#quantity");
  let totalItems = 0;
  cart.forEach((item) => {
    totalItems += item.numberOfUnits;
  });
  totalItemsInCart.innerHTML = `(${totalItems})`;
}
renderSubtotal();
console.log(cart);
fetch("js/products.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;
  })
  .then(() => {
    products.forEach((dish) => {
      const dishSlider = document.getElementById("products");
      const div = document.createElement("div");
      div.classList.add("col-md-4");
      dishSlider.appendChild(div);
      div.innerHTML = `
           <img src=${dish.image} alt="" class="dishimg" >
              <div class="detailss">  
                  <h3>${dish.name}</h3>
                  <p>$${dish.price}</p>
                  <button onclick="addToCart('${dish.id}')"><i class="fa-solid fa-cart-shopping"></i></button>

              </div>
      `;
    });
  });
