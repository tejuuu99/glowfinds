const grid = document.getElementById("product-grid");
let products = [];

fetch("data/products.json")
  .then(response => response.json())
  .then(data => {
    products = data;
    showProducts(products);
  });

function showProducts(list) {
  grid.innerHTML = "";
  list.forEach(item => {
    grid.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank">View Product</a>
      </div>
    `;
  });
}

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    if (category === "all") {
      showProducts(products);
    } else {
      showProducts(products.filter(p => p.category === category));
    }
  });
});
