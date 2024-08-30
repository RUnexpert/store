<template>
  <section>
    <div class="container">
      <TheHeader />
      <div class="wrapper">
        <TheSidebar class="sidebar" />
        <v-row class="grid" v-if="loading" justify="center" align="center">
          <v-col cols="12" class="d-flex justify-center">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-col>
        </v-row>

        <v-row class="grid" v-else>
          <v-col v-for="product in filteredProducts" :key="product.id" cols="4">
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  components: { TheHeader, TheSidebar, ProductCard },

  data() {
    return {
      loading: true, // Состояние загрузки
    };
  },

  computed: {
    ...mapGetters(["filteredProducts"]),
  },

  watch: {
    filteredProducts() {
      if (this.filteredProducts.length > 0) {
        this.loading = false;
      }
    },
  },

  created() {
    this.$store.dispatch("fetchProducts").finally(() => {
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.sticky-sidebar {
  position: fixed;
  top: 80px;
  left: 16px;
  overflow-y: auto;
}

.wrapper {
  padding: 20px;
  display: flex;
  gap: 40px;
}

.sidebar {
  position: sticky;
  top: 65px;
  left: 16px;
  max-width: 300px;
  width: 100%;
}

.grid {
  width: 80%;
}
</style>
