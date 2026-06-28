async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        const container = document.getElementById('product-container');

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

fetchProducts();
