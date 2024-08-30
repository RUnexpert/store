<template>
  <v-app-bar app color="indigo">
    <v-toolbar-title>
      <router-link to="/" class="text-decoration-none">
        <img :src="require('@/assets/store.png')" class="logo" alt="Logo" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/cart">
      <v-btn icon>
        <v-badge color="red" :content="cartItemCount" overlap>
          <v-icon size="large" color="white">mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", ["cartItemCount"]),
  },
};
</script>

<style scoped>
.logo {
  max-width: 70px;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 0.7;
}
</style>
