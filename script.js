var products = [
  {
    name: "Naminos Dementus A Milance - Pattern",
    price: "$86.00 - $99.00",
    image: "arrival-1.jpg",
    category: "Sodling",
    colors: ["#4b6cc0", "#494949", "#e8e8e8"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    name: "Dinterdum Pretium Condimento - Pattern",
    price: "$139.00 - $189.00",
    image: "arrival-2.jpg",
    category: "Tomorrow",
    colors: ["#000000", "#e8e8e8", "#4b6cc0", "#13c89c", "#fff100", "#ffffff"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    name: "Magnis Darturien Metro Lacinis - Black",
    price: "$86.00",
    image: "arrival-3.jpg",
    category: "paul smith",
    colors: ["#ffffff"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    name: "Loremous Saliduar A Cosmopolito - Pattern",
    price: "$86.00  - $99.00",
    image: "arrival-4.jpg",
    category: "Donatello",
    colors: ["#494949", "#e8e8e8", "#13c89c"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  }
];
function renderProducts() {
  var productList = "";
  for (let i = 0; i <  products.length; i++) {
    const product = products[i];
    let productColorsHTML = "";
    let productSizesHTML = "";
    for (let j = 0; j < product.colors.length; j++) {
      const color = product.colors[j];

      if (j < 5) {
        productColorsHTML += `<span class="color" style="background-color:${color}"></span>`;
      } else {
        productColorsHTML += `<span style="color:#969696" >+${
          product.colors.length - 5
        }</span>`;
        break;
      }
    }
    for (let j = 0; j < product.sizes.length; j++) {
      const size = product.sizes[j];

      productSizesHTML += `<span class="size">${size}</span>`;
    
    }
    productList += `
    <div class="item">
    <div class='img-container'>
      <span class='wish-list'><img src='./assets/icons/heart.png'/></span>
      <span class='preview'><img src='./assets/icons/eye.png'/></span>
      <img class="product-image" src='./assets/${product.image}' alt="${product.name}">
      <button class='btn add-to-cart'>Add to Cart</button>
      <div class='size-board'>
        <span class='close'><img src='./assets/icons/close.png' alt=closeIcon'></span>
        <p>Size:XS</p>
        <div class='sizes'>${productSizesHTML}</div>
       <button class='btn submit'>SUBMIT</button>
      </div>
    </div>
      <b>${product.category}</b>
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <div class="colors">${productColorsHTML}</div>
    </div>
  `;
  }

  document.getElementById("product-list").innerHTML = productList;
}
renderProducts();

//Show size board
const addToCartBtn = document.querySelectorAll(".add-to-cart");

addToCartBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const sizeBoard = this.nextElementSibling;
    const close = sizeBoard.querySelector(":first-child");
    sizeBoard.style.display = "block";
    close.addEventListener("click", function () {
      sizeBoard.style.display = "none"
    })
  });
});
//close size board

//Active Navbar
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
});
