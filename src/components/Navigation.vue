<script setup lang="ts">
import { RouterLink } from "vue-router";

interface iRoute {
  label: string;
  location: string;
}

const routes: Array<iRoute> = [
  {
    label: "Home",
    location: "/",
  },
  {
    label: "Account search",
    location: "/account-information",
  },
  {
    label: "Banned accouts",
    location: "/banned-accounts"
  },
  {
    label: "Contributors",
    location: "/contributors-and-supporters",
  },
  {
    label: "FAQ",
    location: "/faq",
  },
  {
    label: "Contact Us",
    location: "/contact-us",
  },
];
</script>

<template>
  <nav>
    <RouterLink
      v-for="route in routes"
      class="navigationbar-item"
      :to="route.location"
      :key="route.label"
      >{{ route.label }}</RouterLink
    >
  </nav>
</template>

<style scroped lang="scss">
nav {
  background-color: #000000;
  border: 2px solid #382418;
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 0.25rem auto;
  padding: 0.25rem 0.5rem;

  a.navigationbar-item {
    color: #90c040;
    text-decoration: none;
    font-size: 90%;
    vertical-align: center;
    font-weight: normal;
  }
}
</style>
