<template>
  <v-app>
    <v-main class="bg-blue-grey-lighten-4">
      <v-content>
        <router-view />
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
