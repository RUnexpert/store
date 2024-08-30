<template>
  <div class="container">
    <div class="text-h4">Корзина пуста</div>
    <v-btn class="mt-6" color="success" @click="goToHome"
      >Вернуться к покупкам</v-btn
    >
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
