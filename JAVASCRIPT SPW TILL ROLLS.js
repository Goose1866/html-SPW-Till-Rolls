// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const productsSection = document.getElementById("products");

    // Sample product data
    const products = [
        {
            name: "Product 1",
            image: "product1.jpg",
            price: "R?"
        },
        {
            name: "Product 2",
            image: "product2.jpg",
            price: "R?"
        },
        // Add more products as needed
    ];

    // Function to create product HTML
    function createProductCard(product) {
        const card = document.createElement("div");
        card.classList.add("product");

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement("h2");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `Price: ${product.price}`;

        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy Now";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(buyButton);

        productsSection.appendChild(card);
    }

    // Load products into the page
    products.forEach(product => {
        createProductCard(product);
    });
});
