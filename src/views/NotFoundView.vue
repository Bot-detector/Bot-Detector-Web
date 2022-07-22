<script setup lang="ts">
  import Heading from "@/components/Heading.vue";
  import { RouterLink } from "vue-router";
</script>

<template>
  <Heading 
    title="404 Not found."
    subTitle="No bots could be found here..."
    imageSource="src/assets/images/GameAssets/bot.png"
  />
  <p>If you think this is a mistake <RouterLink to="/contact-us">contact us</RouterLink></p>
</template>

<style scoped>
  p {
    text-align: center;
  }
</style>