<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-form ref="form" v-model="valid" class="w-25">
      <v-flex xs12 sm8 md12 fill-height>
        <v-card class="elevation-12">
          <v-toolbar color="indigo">
            <v-toolbar-title class="text-center">Авторизация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="email"
              prepend-icon="mdi-email"
              :rules="emailRules"
              label="Почта"
              placeholder="Введите почту"
              required
            ></v-text-field>

            <v-text-field
              class="mt-2"
              v-model="password"
              :rules="passwordRules"
              prepend-icon="mdi-lock"
              label="Пароль"
              placeholder="Введите пароль"
              type="password"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="login"
              :disabled="!valid"
              color="success"
              class="mt-2"
              >Войти</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      emailRules: [
        (v) => !!v || "Почта обязательна",
        (v) => /.+@.+\..+/.test(v) || "Введите корректный email",
      ],
      passwordRules: [(v) => !!v || "Пароль обязателен"],
    };
  },

  methods: {
    login() {
      if (this.$refs.form.validate()) {
        localStorage.setItem("isAuthenticated", true);
        this.$router.push("/");
      }
    },
  },
};
</script>
