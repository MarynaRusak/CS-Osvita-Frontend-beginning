
const API_URL = "https://6987b2ce780e8375a686d64e.mockapi.io/products";

const productsContainer = document.querySelector(".product-list");
const filterButtonsContainer = document.querySelector(".filter-buttons");
const search = document.getElementById("search");
const emptyContainer = document.getElementById("no-products");
const priceFilter = document.getElementById("price");
const sortBy = document.getElementById("sortby");
const searchForm = document.querySelector(".search-form");

class ApiService {
    constructor (url) {
        this.apiUrl = url;
    }

    getAllProducts = async (params = {}) => {
        try {
            const queryParams = new URLSearchParams();

            if (params.category) {
                queryParams.append("category", params.category);
            }
            if(params.search) {
                queryParams.append("search", params.search);
            }
            if(params.sortBy) {
                queryParams.append("sortBy", params.sortBy);
                queryParams.append("order", params.order);
            }
            if(params.page) {
                queryParams.append("page", params.page);
            }
            if(params.limit) {
                queryParams.append("limit", params.limit);
            }

            const response = await fetch(`${this.apiUrl}?${queryParams.toString()}`);
        if(!response.ok) {
            throw new Error("Failed");
        }
        const data = await response.json();
        return data;

        } catch (e) {
            console.log(e);
        }
    };

    getProductById = async (productId) => {
        try {
            const response = await fetch(`${this.apiUrl}/${productId}`);
        if(!response.ok) {
            throw new Error("Failed");
        }
        const data = await response.json();
        return data;

        } catch (e) {
            console.log(e);
        }
    };

    createProduct = async (product) => {
        try {
            const response = await fetch(this.apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product),
            });
            if(!response.ok) {
                throw new Error("Failed");
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    updateProduct = async (productId, product) => {
        try {
            const response = await fetch(`${this.apiUrl}/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product),
            });
            if(!response.ok) {
                throw new Error("Failed");
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    deleteProduct = async (productId) => {
        try {
            const response = await fetch(`${this.apiUrl}/${productId}`, {
                method: "DELETE",
            });
            if(!response.ok) {
                throw new Error("Failed");
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    };
};

const api = new ApiService(API_URL);

const state = {
    products: [],
    category: "beverages",
    search: "",
    sortBy: "price",
    order: "asc",
    priceFilter: "select", 
    isLoading: false
};

const setState =  (updates) => {
    Object.assign(state, updates);
};

const loadProducts = async () => {
    try {
        setState({ isLoading: true });
        const params = {
            category: state.category,
            sortBy: state.sortBy,
            order: state.order
        };

        const products = await api.getAllProducts(params);
        setState({ products: products });
        renderProducts();
    } catch(e) {
        console.log(e);
    } finally {
        setState({ isLoading: false });
    }
};

filterButtonsContainer.addEventListener("click", async (event) => {
    const category = event.target.dataset.category;
    if (category) {
        setState({ category: category });
        await loadProducts();
    }
})

priceFilter.addEventListener("change", (event) => {
    setState({ priceFilter: event.target.value });
    renderProducts();
});

search.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    setState({ search: searchTerm });
    renderProducts();
});

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

sortBy.addEventListener("change", async (event) => {
    const value = event.target.value;

    if (value === "select") {
        setState({ sortBy: "", order: "asc" });
    } else if (value === "price: high to low") {
        setState({ sortBy: "price", order: "desc" });
    } else if (value === "price: low to high") {
        setState({ sortBy: "price", order: "asc" });
    }
    await loadProducts();
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

const renderProducts = () => {

    const searchTerm = state.search.toLowerCase();
    const filteredProducts = state.products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm);
    });

    const priceFilteredProducts = filteredProducts.filter((p) => {
        const price = Number(p.price);
        if (state.priceFilter === "under 10") return price < 10;
        if (state.priceFilter === "under 20") return price < 20;
        if (state.priceFilter === "under 30") return price < 30;
        if (state.priceFilter === "under 40") return price < 40;
        return true;
    });

    productsContainer.innerHTML = "";

    if(priceFilteredProducts.length === 0) {
        productsContainer.innerHTML = `<div>Empty list</div>`
        return;
    }
    productsContainer.innerHTML = priceFilteredProducts
    .map((p) => createProductCard(p)).join("");
};

loadProducts();