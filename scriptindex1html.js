const productsInfo = [
    {
        id: "IP15P128TN",
        title: "Apple iPhone 15 Pro | 128GB Natural Titanium",
        mainImage: "images/iphone 15 pro natural titanium/iphone 15 prot.webp",
        thumbnails: [
            "images/iphone 15 pro natural titanium/iphone 15 prot.webp",
            "images/iphone 15 pro natural titanium/iphone 15 proti.webp",
            "images/iphone 15 pro natural titanium/iphone 15 protit.webp",
            "images/iphone 15 pro natural titanium/iphone 15 protit.webp"
        ],
        // ამის ქვევით არაფერი არ გამოდის გასასწორებელია 
        colors: [
            { colorCode: "#54544e", href: "index1.1.html" },
            { colorCode: "#F3F4F7", href: "index2.html" },
            { colorCode: "rgb(91, 121, 142)", href: "#color3-link" },
            { colorCode: "#878681", href: "index1.html" },
        ],
        storages: [
            { size: "128 GB", price: "3799₾" },
            { size: "256 GB", price: "4299₾" },
            { size: "512 GB", price: "4799₾" },
            { size: "1TB", price: "5299₾" }
        ],
        currentPrice: "3799₾",
        previousPrice: "3899₾"
    },
    {
        id: "123",
        title: "Samsung Galaxy S22 Ultra | 512GB Black",
        mainImage: "images/iphone 15 pro black titanioum/152333df-2dda-46fa-a340-dad7683ef59c_Thumb.webp",
        thumbnails: [
            "images/iphone 15 pro black titanioum/152333df-2dda-46fa-a340-dad7683ef59c_Thumb.webp",
            "images/iphone 15 pro black titanioum/9db8d9e2-b1f6-488c-a71d-90c51f6a250d_Thumb.webp",
            "images/iphone 15 pro black titanioum/b0f95a98-6c56-42e1-8bc0-e808bbffa5d4_Thumb.webp",
            "images/iphone 15 pro black titanioum/bd81d007-5ac4-4e03-b484-762663b844a5_Thumb.webp", 
            "images/iphone 15 pro black titanioum/b0f95a98-6c56-42e1-8bc0-e808bbffa5d4_Thumb.webp",
            "images/iphone 15 pro black titanioum/9db8d9e2-b1f6-488c-a71d-90c51f6a250d_Thumb.webp"  
        ],
        // ... other product details
    },
    {
        id: "1234",
        title: "Samsung Galaxy S23 Ultra | 1t Black",
        mainImage: "images/iphone 15 pro black titanioum/152333df-2dda-46fa-a340-dad7683ef59c_Thumb.webp",
        thumbnails: [
            "images/iphone 15 pro black titanioum/152333df-2dda-46fa-a340-dad7683ef59c_Thumb.webp",
            "images/iphone 15 pro black titanioum/9db8d9e2-b1f6-488c-a71d-90c51f6a250d_Thumb.webp",
            
        ],
        // ... other product details
    },
    // Add more products as needed
];

// Function to extract query parameters from the URL
function getQueryParams() {
    const queryParams = {};
    const queryString = window.location.search.substring(1);
    const paramPairs = queryString.split('&');
    paramPairs.forEach(pair => {
        const [key, value] = pair.split('=');
        queryParams[key] = value;
    });
    return queryParams;
}

// Function to fetch product data based on productId
function fetchProductData(productId) {
    return productsInfo.find(product => product.id === productId);
}

// Function to update the page content with product data
function updateProductDisplay(productId) {
    const productData = fetchProductData(productId);

    // Update main product details
    const productTitleElement = document.getElementById('product-title');
    const mainImageElement = document.getElementById('main-image');
    const thumbnailsDiv = document.getElementById('thumbnails');

    if (productTitleElement && mainImageElement && thumbnailsDiv) {
        productTitleElement.textContent = productData.title;
        mainImageElement.src = productData.mainImage;

        // Clear existing thumbnails and update
        thumbnailsDiv.innerHTML = '';
        productData.thumbnails.forEach(thumbUrl => {
            const img = document.createElement('img');
            img.src = thumbUrl;
            img.className = 'thumbnail';
            img.onclick = () => mainImageElement.src = thumbUrl;
            thumbnailsDiv.appendChild(img);
        });
    } else {
        console.error('One or more elements could not be found in the DOM.');
    }
}

// Function to display product details when the page loads
window.onload = function() {
    const queryParams = getQueryParams();
    const productId = queryParams.productId;

    // Call the updateProductDisplay function to display product details
    updateProductDisplay(productId);
};