<script setup lang="ts">
import Heading from "@/components/Heading.vue";
import Socials, { SOCIAL, DISPLAYTYPE } from "@/components/Socials.vue";
</script>

<template>
  <Heading title="Contact Us" imageSource="/images/GameAssets/contact.png" />

  <p>
    If you're looking to get in touch with us, feel free to message any of the
    following links at your convenience. They are monitored on a weekly basis,
    and we will try to respond as quickly as we can!
  </p>

  <hr />

  <p>
    Twitter -
    <Socials :social="SOCIAL.Twitter" :displayType="DISPLAYTYPE.FullName" />
  </p>
  <p>
    Discord -
    <Socials :social="SOCIAL.Discord" :displayType="DISPLAYTYPE.FullName" />
  </p>
  <p>
    Email -
    <a href="mailto:osrsbotdetector@gmail.com">osrsbotdetector@gmail.com</a>
  </p>
  <p>
    Patreon -
    <Socials :social="SOCIAL.Patreon" :displayType="DISPLAYTYPE.Link" />
  </p>
  <p>
    Github - <Socials :social="SOCIAL.Github" :displayType="DISPLAYTYPE.Link" />
  </p>
</template>
