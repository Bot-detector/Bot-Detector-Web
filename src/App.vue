<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Navigation from "@/components/Navigation.vue";
  import ExternalLink from "@/components/ExternalLink.vue";
  import TopBanner from "@/components/TopBanner.vue";
  import BottomBanner from "@/components/BottomBanner.vue";

  import "@/assets/style/main.scss";
</script>

<template>
  <TopBanner />
  <div class="wrapper">
    <Navigation />
    <main>
  
      <RouterView />
    </main>
    <footer>
      <p>Created using intellectual property belonging to Jagex Limited under the terms of <ExternalLink to="https://www.jagex.com/en-GB/terms/fancontentpolicy">Jagex's Fan Content Policy</ExternalLink>. This content is not endorsed by or affiliated with Jagex</p>
    </footer>
  </div>
  <BottomBanner />
</template>

<style scoped></style>
