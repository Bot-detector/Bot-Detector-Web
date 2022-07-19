<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Navigation from "@/components/Navigation.vue";

  import "@/assets/style/main.scss";
</script>

<template>
  <div class="wrapper">
    <Navigation />
    <main>
  
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
