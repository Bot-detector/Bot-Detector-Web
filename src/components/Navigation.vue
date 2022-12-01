<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink
      v-for="route in ROUTE"
      class="navigationbar-item"
      :to="routes[route].location"
      :key="routes[route].label"
    >
      {{ routes[route].label }}
    </RouterLink>
  </nav>
</template>

<script lang="ts">
export enum ROUTE {
  Home = "Home",
  AccountSearch = "Account search",
  BannedAccounts = "Banned accounts",
  Contributors = "Contributors",
  FAQ = "FAQ",
  ContactUs = "Contact Us",
}

export const routes = {
  [ROUTE.Home]: {
    label: "Home",
    location: "/",
  },
  [ROUTE.AccountSearch]: {
    label: "Account search",
    location: "/account-information",
  },
  [ROUTE.BannedAccounts]: {
    label: "Banned accounts",
    location: "/banned-accounts",
  },
  [ROUTE.Contributors]: {
    label: "Contributors",
    location: "/contributors-and-supporters",
  },
  [ROUTE.FAQ]: {
    label: "FAQ",
    location: "/faq",
  },
  [ROUTE.ContactUs]: {
    label: "Contact Us",
    location: "/contact-us",
  },
};

export default {
  data() {
    return {
      ROUTE,
      routes,
    };
  },
};
</script>

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

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }

  a.navigationbar-item {
    color: #90c040;
    text-decoration: none;
    font-size: 90%;
    vertical-align: center;
    font-weight: normal;

    @media screen and (max-width: 720px) {
      padding: 0.5rem;
    }
  }
}
</style>
