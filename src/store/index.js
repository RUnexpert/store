import { createStore } from "vuex";
import products from "./modules/products";
import cart from "./modules/cart";

export default createStore({
  state: {
    isAuthenticated: !!localStorage.getItem("isAuthenticated"),
  },

  mutations: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", true);
    },

    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },

  actions: {
    login({ commit }) {
      commit("login");
    },

    logout({ commit }) {
      commit("logout");
    },
  },

  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },

  modules: {
    products,
    cart,
  },
});
