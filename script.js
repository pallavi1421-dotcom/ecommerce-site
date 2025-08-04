const products = [
  { id: 1, name: "T-Shirt", price: 299, image: "images/tshirt.jpg" },
  { id: 2, name: "Shoes", price: 999, image: "images/shoes.jpg" },
  { id: 3, name: "Watch", price: 799, image: "images/watch.jpg" },
  { id: 4, name: "Backpack", price: 499, image: "images/backpack.jpg" }
];

let cart = [];

function displayProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach(p => {
    const product = document.createElement("div");
    product.className = "product";
    product.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    list.appendChild(product);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  const count = document.getElementById("cart-count");
  const total = document.getElementById("cart-total");
  const items = document.getElementById("cart-items");

  count.textContent = cart.length;
  let totalPrice = 0;
  items.innerHTML = "";

  cart.forEach((item, index) => {
    totalPrice += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeItem(${index})">X</button>`;
    items.appendChild(li);
  });

  total.textContent = totalPrice;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

displayProducts();
