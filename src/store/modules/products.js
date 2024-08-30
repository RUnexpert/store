import axios from "axios";

const state = {
  products: [],
  categories: [],
  filteredProducts: [],
};

const getters = {
  products: (state) => state.products,
  categories: (state) => state.categories,
  filteredProducts: (state) => state.filteredProducts,
};

const actions = {

  async fetchCategories({ commit }) {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories",
    );
    commit("setCategories", ["Все категории", ...response.data]);
  },

  async fetchProducts({ commit }) {
    const response = await axios.get("https://fakestoreapi.com/products");
    commit("setProducts", response.data);
    commit("setFilteredProducts", response.data);
  },

  applyFilter({ commit, state }, { selectedCategory, minPrice, maxPrice }) {
    let filtered = state.products;

    if (selectedCategory && selectedCategory !== "Все категории") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (minPrice !== null && minPrice !== "") {
      console.log(typeof minPrice);
      filtered = filtered.filter((product) => product.price >= minPrice);
    }
  
    if (maxPrice !== null && maxPrice !== "") {
      console.log(typeof minPrice);
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    commit("setFilteredProducts", filtered);
  },

  resetFilter({ commit, state }) {
    commit("setFilteredProducts", state.products);
  },
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  setCategories: (state, categories) => (state.categories = categories),
  setFilteredProducts: (state, filteredProducts) =>
    (state.filteredProducts = filteredProducts),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
