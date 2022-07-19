<script setup lang="ts">
  import Heading from "@/components/Heading.vue";
</script>


<template>
  <Heading 
    title="Contact Us" 
    imageSrc="src/assets/images/GameAssets/contact.png"
  />

  <p class="description">
    If you're looking to get in touch with us, feel free to message any of
    the following links at your convenience. They are monitored on a
    weekly basis, and we will try to respond as quickly as we can!
  </p>

  <hr class="break" />

  <p class="description">
    Twitter -
    <a href="https://twitter.com/osrsbotdetector" style="color: #382418"
      >@Osrsbotdetector</a
    >
    <br />
    Discord -
    <a
      href="https://discord.com/invite/botdetector"
      style="color: #382418"
      >Bot Detector Plugin Discord</a
    >
    <br />
    Email -
    <a href="osrsbotdetector@gmail.com" style="color: #382418"
      >osrsbotdetector@gmail.com</a
    >
    <br />
    Patreon -
    <a href="https://www.patreon.com/bot_detector" style="color: #382418"
      >https://www.patreon.com/bot_detector</a
    >
    <br />
    Github -
    <a href="osrsbotdetector@gmail.com" style="color: #382418"
      >https://github.com/Bot-detector/</a
    >
  </p>
</template>

<style scoped>
hr.break {
  border: solid #6b7b17;
  width: 80%;
  border-width: 1px;
  height: 1px;
  margin: auto;
}

div.description {
  text-align: left;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 1%;
  padding-top: 10px;
}

p.description {
  text-align: left;
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 10px;
}
</style>
