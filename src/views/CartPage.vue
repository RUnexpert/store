<template>
  <div>
    <TheHeader />
    <section class="section">
      <CartEmptyMsg v-if="totalItems === 0" />
      <div v-else class="content">
        <h2 class="text-left">Товары в корзине</h2>
        <v-table class="mt-4 text-h6">
          <thead>
            <tr>
              <th class="text-center">№</th>
              <th class="text-center">Наименование товара</th>
              <th class="text-center">Количество</th>
              <th class="text-center">Цена за ед.</th>
              <th class="text-center">Итого</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td class="d-flex align-center justify-left">
                <img :src="item.image" :alt="item.title" width="30" />
                <span class="ml-3">{{ item.title }}</span>
              </td>
              <td>
                <v-btn
                  icon="mdi-minus"
                  size="x-small"
                  variant="text"
                  @click="removeFromCart(item.id)"
                ></v-btn>
                {{ item.quantity }}
                <v-btn
                  icon="mdi-plus"
                  size="x-small"
                  variant="text"
                  @click="addToCart(item)"
                ></v-btn>
              </td>
              <td>{{ item.price }} $.</td>
              <td>{{ item.price * item.quantity }} $.</td>
            </tr>
          </tbody>
        </v-table>
        <div class="container">
          <h3 class="m-0 text-h6">
            Всего товаров {{ totalItems }} на сумму {{ totalPrice }} $.
          </h3>
          <v-btn variant="plain" @click="clearCart">Очистить корзину</v-btn>
          <v-btn color="success" @click="checkout">Оформить заказ</v-btn>
        </div>
      </div>
      <CartModalSuccess
        :isOpen="dialog"
        @close="closeDialog"
        :orderNumber="orderNumber"
      />
    </section>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import CartEmptyMsg from "@/components/CartEmptyMsg.vue";
import CartModalSuccess from "@/components/CartModalSuccess.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { TheHeader, CartEmptyMsg, CartModalSuccess },

  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapGetters("cart", ["totalItems", "totalPrice"]),

    cartItems() {
      return this.$store.state.cart.items;
    },
  },

  methods: {
    ...mapActions("cart", ["addItem", "removeItem", "clearCart"]),
  
    addToCart(item) {
      this.addItem(item);
    },

    removeFromCart(productId) {
      this.removeItem(productId);
    },

    checkout() {
      this.orderNumber = this.generateOrderNumber();
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
      this.clearCart();
      this.$router.push("/");
    },

    generateOrderNumber() {
      return Math.floor(100000 + Math.random() * 900000).toString();
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.section {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  padding: 10px;
}

.table {
  padding: 15px;
  display: flex;
  flex-flow: column nowrap;
  background: #fff;
}

.header-cell {
  align-self: center;
  align-items: center;
}

.row {
  display: flex;
  border-bottom: 1px solid black;
}

.row:last-of-type {
  border-bottom: none;
}

.heading {
  font-weight: bold;
}

.cell {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
