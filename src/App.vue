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
    <footer>
      <p>Created using intellectual property belonging to Jagex Limited under the terms of <a href="https://www.jagex.com/en-GB/terms/fancontentpolicy" target="_blank" nofollow>Jagex's Fan Content Policy</a>. This content is not endorsed by or affiliated with Jagex</p>
    </footer>
  </div>
</template>

<style scoped></style>
