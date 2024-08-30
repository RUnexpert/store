<template>
  <v-dialog :model-value="isOpen" max-width="400">
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-spacer></v-spacer>
        <v-btn variant="plain" icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <h3 class="text-center text-h5 font-weight-bold">
        Заказ #{{ orderNumber }}
      </h3>

      <v-card-title class="headline text-center">
        Ваш заказ успешно оформлен!
      </v-card-title>
      <v-card-actions class="justify-center">
        <v-btn color="green darken-1" @click="closeDialog">ОК</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },

    orderNumber: {
      type: String,
      required: true,
    },

  },

  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped></style>
