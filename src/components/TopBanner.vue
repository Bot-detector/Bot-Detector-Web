<script setup lang="ts">
import { RouterLink } from "vue-router";
import { routes, ROUTE } from "@/components/Navigation.vue";
import Socials, { SOCIAL } from "@/components/Socials.vue";
</script>

<template>
  <div class="outer-banner top-banner">
    <RouterLink :to="routes[ROUTE.Home].location">
      <div class="branding">
        <img
          src="src/assets/images/logo-sm.png"
          alt="logo bot detector plugin"
        />
        <strong>Bot-Detector</strong>
      </div>
    </RouterLink>

    <div class="socials">
      <Socials :social="SOCIAL.Github" showIcon />
      <Socials :social="SOCIAL.Patreon" showIcon />
      <Socials :social="SOCIAL.Discord" showIcon />
    </div>
  </div>
</template>

<style lang="scss">
.top-banner {
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
}

.outer-banner {
  top: 0;

  a {
    color: white;
    text-decoration: none;
  }

  display: flex;
  justify-content: space-between;

  .branding {
    display: flex;
    align-items: center;
    width: max-content;

    strong {
      font-size: 2rem;
      margin-left: 0.5rem;
    }
  }

  .socials {
    display: flex;
    box-sizing: border-box;

    a {
      margin-left: 1rem;
      font-size: 1.15rem;
      display: flex;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      border-radius: 0.25rem;
      align-items: center;

      @media screen and (max-width: 720px) {
        font-size: 0.8rem;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
      }

      svg {
        margin-left: 0.5rem;
        fill: white;
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
