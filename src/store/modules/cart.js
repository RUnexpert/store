
export default {
  namespaced: true,

  state: {
    items: [],
  },

  getters: {
    cartItemById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },

    totalItems(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },

    totalPrice(state) {
      return Math.round(
        state.items.reduce(
          (total, item) => total + item.quantity * item.price,
          0,
        ),
      );
    },

    cartItemCount(state) {
      return state.items.length;
    },

  },
  mutations: {
    ADD_ITEM(state, product) {
      const item = state.items.find((i) => i.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    REMOVE_ITEM(state, productId) {
      const item = state.items.find((i) => i.id === productId);
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter((i) => i.id !== productId);
      }
    },
  
    CLEAR_CART(state) {
      state.items = [];
    },
  },

  actions: {
    addItem({ commit }, product) {
      commit("ADD_ITEM", product);
    },

    removeItem({ commit }, productId) {
      commit("REMOVE_ITEM", productId);
    },

    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
  },
};
