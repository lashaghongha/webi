// Dummy data for demonstration purposes
const products = [
    {
      name: "Apple iPhone 13 | 128GB Midnight",
      image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp", // Replace with path to your image
      price: "1949$",
      link: "http://127.0.0.1:5500/index1.html" // Replace with actual product URL
    },
    {
      name: "Apple iPhone 23 | 128GB Midnight",
      image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp", // Replace with path to your image
      price: "1949$",
      link: "http://127.0.0.1:5500/index1.html" // Replace with actual product URL
    },
    {
      name: "Samsunf galaxy s23 | 128GB Midnight",
      image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp", // Replace with path to your image
      price: "1949$",
      link: "http://127.0.0.1:5500/index1.html" // Replace with actual product URL
    },
    {
      name: "Apple iPhone 13 | 128GB Midnight",
      image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp", // Replace with path to your image
      price: "1949$",
      link: "http://127.0.0.1:5500/index1.html" // Replace with actual product URL
    },
    {
      name: "Apple iPhone 23 | 128GB Midnight",
      image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp", // Replace with path to your image
      price: "1949$",
      link: "http://127.0.0.1:5500/index1.html" // Replace with actual product URL
    },
    {
      name: "Samsunf galaxy s23 | 128GB Midnight",
      image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp", // Replace with path to your image
      price: "1949$",
      link: "http://127.0.0.1:5500/index1.html" // Replace with actual product URL
    },
    {
      name: "Apple iPhone 13 | 128GB Midnight",
      image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp", // Replace with path to your image
      price: "1949$",
      link: "http://127.0.0.1:5500/index1.html" // Replace with actual product URL
    },
    {
      name: "Apple iPhone 23 | 128GB Midnight",
      image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp", // Replace with path to your image
      price: "1949$",
      link: "http://127.0.0.1:5500/index1.html" // Replace with actual product URL
    },
    {
      name: "Samsunf galaxy s23 | 128GB Midnight",
      image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp", // Replace with path to your image
      price: "1949$",
      link: "http://127.0.0.1:5500/index1.html" // Replace with actual product URL
    },
    // ... add more products as necessary
  ];
  
  function filterSearch() {
    const input = document.querySelector('.search-input');
    const filter = input.value.toLowerCase();
    const resultsBox = document.querySelector('.search-results-box');
    const resultsContainer = document.getElementById('search-results');
  
   
    resultsContainer.innerHTML = '';
  
    // Filter products based on the input value
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filter));
  
    // Hide the results box if the filter is empty or there are no results
    resultsBox.style.display = (filter && filteredProducts.length > 0) ? 'block' : 'none';
  
    // Create and append the product items to the results container
    filteredProducts.forEach(product => {
      const productLink = document.createElement('a');
      productLink.href = product.link;
      productLink.classList.add('product-item');
  
      productLink.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">${product.name}</div>
        <div class="product-price">${product.price}</div>
        <div class="chevron">&gt;</div>
      `;
      resultsContainer.appendChild(productLink);
    });
  }
  
  // Initialize the search functionality
  document.querySelector('.search-input').addEventListener('keyup', filterSearch);
  
  
  
  
  
        // Array holding multiple product data
        const productsDisplay = [
          {
              id: "IP15P128TN",
              name: "Apple iPhone 15 Pro | 128GB Natural Titanium",
              image: "images/iphone 15 pro natural titanium/iphone 15 prot.webp",
              price: "2799₾",
              originalPrice: "2999₾",
          },
          {
              id: "123",
              name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
              image: "images/iphone 15.webp",
              price: "2799₾",
              originalPrice: "2999₾",
          },
          {
            id: "1234",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },
          {
            id: "123",
            name: "Samsung Galaxy S23 Ultra 5G bla bla bla",
            image: "images/iphone 15.webp",
            price: "2799₾",
            originalPrice: "2999₾",
          },

          // Add more products as needed
      ];

      const productDisplayContainer = document.getElementById('product-display');

      // Function to create a phone card
      function createPhoneCard(product) {
          const productCard = document.createElement('div');
          productCard.className = 'phone-card';
          productCard.innerHTML = `
              <a href="javascript:void(0);" class="phone-card-link" onclick="displayProductDetails('${product.id}')">
                  <img src="${product.image}" alt="${product.name}" class="phone-image">
                  <div class="phone-info">
                      <div class="discount-badge">ფასდაკლება</div>
                      <div class="price-container">
                          <span class="current-price">${product.price}</span>
                          <span class="original-price">${product.originalPrice}</span>
                      </div>
                      <p class="phone-name">${product.name}</p>
                  </div>
              </a>
              <button class="transition-btn">🛒   ყიდვა</button>
          `;
          return productCard;
      }

      // Adding each product card to the product display container
      productsDisplay.forEach(product => {
          productDisplayContainer.appendChild(createPhoneCard(product));
      });

      // Function to open the same page with the product details as a query parameter
      function displayProductDetails(productId) {
          window.location.href = `index1.html?productId=${productId}`;
      }









  // ფასდაუკლებელი პროდუქტები
    