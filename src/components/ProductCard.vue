<template>
  <v-card class="pa-4">
    <v-img :src="product.image" height="200px"></v-img>
    <v-card-title class="text-h6 mt-2 border-t-thin">{{
      product.title
    }}</v-card-title>

    <v-card-text>
      <div class="price-category">
        <span class="price">{{ product.price }} $</span>
        <span class="category">{{ product.category }}</span>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        :prepend-icon="isInCart ? 'mdi-cart-off' : 'mdi-cart'"
        :color="isInCart ? 'red' : 'green'"
        @click="toggleCartItem"
      >
        {{ isInCart ? "Убрать из корзины" : "В корзину" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["product"],

  computed: {
    ...mapGetters("cart", ["cartItemById"]),
    isInCart() {
      return !!this.cartItemById(this.product.id);
    },
  },

  methods: {
    ...mapActions("cart", ["addItem", "removeItem"]),

    addToCart(product) {
      this.addItem(product);
    },

    toggleCartItem() {
      if (this.isInCart) {
        this.removeItem(this.product.id);
      } else {
        this.addItem(this.product);
      }
    },
  },
};
</script>

<style scoped>
.price-category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2e7d32;
}

.category {
  font-size: 0.875rem;
  color: #757575;
  font-style: italic;
}
</style>
