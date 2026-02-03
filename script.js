const products = [
// Beverages
{
    id: 1,
    name: "Ristretto Bianco",
    category: "beverages",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Ristretto+Bianco"
},
{
    id: 2,
    name: "Iced Creamy Latte",
    category: "beverages",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Iced+Creamy+Latte"
},
{
    id: 3,
    name: "Cappuccino",
    category: "beverages",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Cappuccino"
},
{
    id: 4,
    name: "Iced Long Black",
    category: "beverages",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Iced+Long+Black"
},
{
    id: 5,
    name: "Milk Coffee Regal",
    category: "beverages",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Milk+Coffee+Regal"
},
{
    id: 6,
    name: "Orange Juice",
    category: "beverages",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Orange+Juice"
},
{
    id: 7,
    name: "Soda Beverage",
    category: "beverages",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Soda+Beverage"
},
{
    id: 8,
    name: "Iced Coffee with Milk",
    category: "beverages",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Iced+Coffee"
},
{
    id: 9,
    name: "Iced Americano",
    category: "beverages",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Iced+Americano"
},
{
    id: 10,
    name: "Vegan Iced Latte",
    category: "beverages",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Vegan+Iced+Latte"
},
{
    id: 11,
    name: "Iced Chocolate",
    category: "beverages",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Iced+Chocolate"
},
{
    id: 12,
    name: "Autumnal Coffee",
    category: "beverages",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Autumnal+Coffee"
},

// Food
{
    id: 13,
    name: "Seafood Lunch",
    category: "food",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Seafood+Lunch"
},
{
    id: 14,
    name: "French Toast with Sugar",
    category: "food",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=French+Toast"
},
{
    id: 15,
    name: "Chocolate Croissant",
    category: "food",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Chocolate+Croissant"
},
{
    id: 16,
    name: "Potato Wedges",
    category: "food",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Potato+Wedges"
},
{
    id: 17,
    name: "Brownies",
    category: "food",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Brownies"
},
{
    id: 18,
    name: "Banana Cake",
    category: "food",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: false,
    image: "https://placehold.co/300x300?text=Banana+Cake"
},
{
    id: 19,
    name: "Sandwiches and Pickles",
    category: "food",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Sandwiches"
},
{
    id: 20,
    name: "Spaghetti Bolognese",
    category: "food",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Spaghetti"
},
{
    id: 21,
    name: "Sandwich Vegan",
    category: "food",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Sandwich+Vegan"
},
{
    id: 22,
    name: "Eggs Benedict Burger",
    category: "food",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Eggs+Benedict"
},
{
    id: 23,
    name: "Corn Cheese Sandwich",
    category: "food",
    price: 5.00,
    originalPrice: 6.00,
    onSale: true,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Corn+Cheese"
},
{
    id: 24,
    name: "Buttermilk Waffle",
    category: "food",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Buttermilk+Waffle"
},

// Coffee Beans
{
    id: 25,
    name: "At Home House Blend",
    category: "coffee-beans",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Available Buy at Website",
    inStock: true,
    image: "https://placehold.co/300x300?text=House+Blend"
},
{
    id: 26,
    name: "At Home Arabica",
    category: "coffee-beans",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Available Buy at Website",
    inStock: true,
    image: "https://placehold.co/300x300?text=Arabica"
},
{
    id: 27,
    name: "At Home Classic",
    category: "coffee-beans",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Classic"
},
{
    id: 28,
    name: "At Home Kalosi",
    category: "coffee-beans",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: false,
    image: "https://placehold.co/300x300?text=Kalosi"
},
{
    id: 29,
    name: "At Home Luwak",
    category: "coffee-beans",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Luwak"
},
{
    id: 30,
    name: "At Home Robusta",
    category: "coffee-beans",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Robusta"
},

// Equipment
{
    id: 31,
    name: "White Mug",
    category: "equipment",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=White+Mug"
},
{
    id: 32,
    name: "Coffee Temper 58 mm",
    category: "equipment",
    price: 5.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Coffee+Temper"
},
{
    id: 33,
    name: "French Press 8 Cups",
    category: "equipment",
    price: 25.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=French+Press+8"
},
{
    id: 34,
    name: "Glass Tea Pot Teiera (6 Cups)",
    category: "equipment",
    price: 13.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Tea+Pot"
},
{
    id: 35,
    name: "French Press 3 Cup",
    category: "equipment",
    price: 20.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=French+Press+3"
},
{
    id: 36,
    name: "Moka Pot",
    category: "equipment",
    price: 20.00,
    originalPrice: null,
    onSale: false,
    availability: "Only at Cafe and Delivery",
    inStock: true,
    image: "https://placehold.co/300x300?text=Moka+Pot"
}
];

const productsContainer = document.querySelector(".product-list");
const filterButtonsContainer = document.querySelector(".filter-buttons");
const search = document.getElementById("search");
const emptyContainer = document.getElementById("no-products");
const priceFilter = document.getElementById("price");
const sortBy = document.getElementById("sortby");


let currentCategory = "beverages";
let sortField;
let sortDirect;
let currentpriceOption = "under 10";

filterButtonsContainer.addEventListener("click", (event) => {
    const category = event.target.dataset.category;
    if(category) {
        currentCategory = category;
        renderProducts();
    }
})

priceFilter.addEventListener("change", (event) => {
    const priceOption = event.target.value;
    if(priceOption) {
        currentpriceOption = priceOption;
        renderProducts();
    }
    
});

search.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    renderProducts(searchTerm);
});

sortBy.addEventListener("change", (event) => {
    sortField = event.target.dataset.sort;
    sortDirect = event.target.value;
    renderProducts();
});

const createProductCard = (product) => {
    return `
    <li>
        <article data-category="${product.category}" class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-card--text">
                <h4>${product.name}</h4>
                <p class="text-xl subtitle">${product.availability}</p>
                <p class="price">$${product.price} <span>${product.originalPrice ? `$${product.originalPrice}` : ""}</span></p>
                <p class="text-xl text-primary">Get 20% Off in App</p>
            </div>
        </article>
    </li>
    `;
};

const renderProducts = (search = "") => {
    const filteredProducts = products.filter((product) => {
        const matchedSearch = 
        product.name.toLowerCase().includes(search.toLowerCase());

        let matchedCategory = true;

        matchedCategory = product.category === currentCategory;

        return matchedSearch && matchedCategory;
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        if(sortField === "sort") {
            if(sortDirect === "price: high to low") {
                return b.price - a.price;
            } else return a.price - b.price;
        };
    });

    const priceFilteredProducts = sortedProducts.filter((p) => {
        if(currentpriceOption === "under 10") {
            return p.price < 10;
        } else if (currentpriceOption === "under 20") {
            return p.price < 20;
        } else if (currentpriceOption === "under 30") {
            return p.price < 30;
        } else if (currentpriceOption === "under 40") {
            return p.price < 40;
        }
        return true;
    });

    productsContainer.innerHTML = "";

    if(priceFilteredProducts.length ===  0) {
        emptyContainer.classList.remove("hidden");
        return;
    } else {
        emptyContainer.classList.add("hidden");
    }
    const data = priceFilteredProducts.map((p) => createProductCard(p)).join("");
    productsContainer.innerHTML = data;
};

renderProducts();

