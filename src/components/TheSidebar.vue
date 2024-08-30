<template>
  <v-card height="calc(100vh - 85px)">
    <v-card-title>Фильтр</v-card-title>
    <v-card-text>
      <span class="text-subtitle-1 font-weight-bold">Категория</span>
      <v-select
        class="mt-2"
        variant="outlined"
        v-model="selectedCategory"
        :items="categories"
        label="Выберите категорию"
      ></v-select>
      <span class="text-subtitle-1 font-weight-bold">Цена</span>
      <v-text-field
        class="mt-2"
        variant="outlined"
        v-model.number="minPrice"
        label="Мин. цена"
        min="0"
        type="number"
        :rules="[
          (v) =>
            v <= maxPrice ||
            !maxPrice ||
            'Мин. цена не может быть больше максимальной',
        ]"
      ></v-text-field>
      <v-text-field
        class="mt-2"
        variant="outlined"
        v-model.number="maxPrice"
        label="Макс. цена"
        min="0"
        type="number"
        :rules="[
          (v) => v >= minPrice || 'Макс. цена не может быть меньше минимальной',
        ]"
      ></v-text-field>

      <v-layout class="d-flex flex-column mt-4 mb-6">
        <v-btn @click="onResetFilter" color="warning" block class="mb-2">
          Сброс
        </v-btn>
        <v-btn @click="onApplyFilter" color="success" block> Применить </v-btn>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedCategory: "Все категории",
      minPrice: null,
      maxPrice: null,
    };
  },

  computed: {
    ...mapGetters(["categories"]),
  },

  methods: {
    ...mapActions(["applyFilter", "resetFilter"]),

    onApplyFilter() {
      this.applyFilter({
        selectedCategory: this.selectedCategory,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      });
    },

    onResetFilter() {
      this.selectedCategory = "Все категории";
      this.minPrice = null;
      this.maxPrice = null;
      this.resetFilter();
    },
  },

  created() {
    this.$store.dispatch("fetchCategories");
  },
};
</script>

<style scoped></style>
