<script setup lang="ts">
  import Heading from "@/components/Heading.vue";
  import Socials, { SOCIAL } from "@/components/Socials.vue";
  import { useBotDetectorApiStore } from "@/stores/apiStore";
  
  import { RouterLink } from "vue-router";

  const botDetectorApiStore = useBotDetectorApiStore();
  botDetectorApiStore.getProjectStats();
</script>

<template>      
  <Heading 
    title="Bot Detector"
    subTitle="An Open-Source Machine Learning Plugin"
    imageSource="src/assets/images/GameAssets/bot.png"
  />
  
  <hr />

    <p class="description-">
      The Bot Detector Plugin is an open-source community-run machine learning plugin made for <a href="https://www.oldschool.runescape.com/">Old School RuneScape</a> using the popular third-party client <a href="https://runelite.net/">RuneLite</a>. We aim to use this plugin and the corresponding machine learning algorithims to seperate players from bots, from a bird's eye view - and send likely bot accounts to Jagex's anti-cheating team for swift removal. Since our start on February 28, 2021 - we have analyzed <span class="integer">{{ botDetectorApiStore.totalAccounts }}</span> accounts and have logged over <span class="integer">{{ botDetectorApiStore.totalBans }}</span> account bans. If you wish to join us on <Socials :social="SOCIAL.Discord" /> or <Socials :social="SOCIAL.Twitter" />, support us on <Socials :social="SOCIAL.Patreon" /> or check out our <Socials :social="SOCIAL.Github" /> and join the team, click any of the previous links, or the site header.
    </p>

    <hr />

    <RouterLink to="/account-information">
      <h2>
        Account Search
      </h2>
    </RouterLink>
    <p>
      Check over
      <span class="integer">{{ botDetectorApiStore.totalAccounts }}</span>
      accounts' ban status, bot prediction likelihood, latest hiscore
      entry, xp-gains, and more!
    </p>

    <RouterLink to="/banned-accounts">
      <h2>
        Banned Accounts
      </h2>
    </RouterLink
    >
    <p>
      Scroll through over
      <span class="integer">{{ botDetectorApiStore.totalBans }}</span>
      account bans here!
    </p>

    <RouterLink to="/faq">
      <h2>
        Frequently Asked Questions
      </h2>
    </RouterLink>
    <p>
      Have a question about the Plugin? We've answered most of them here!
    </p>

    <RouterLink to="/contributors-and-supporters">
      <h2>
        Contributors
      </h2>
    </RouterLink>
    <p>
      A page where we've displayed everyone that has contributed or
      supported making the Bot Detector Plugin!
    </p>

    <RouterLink to="/contact-us">
      <h2>
        Contact Us
      </h2>
    </RouterLink>
    <p>
      Want to get in touch with us? Click here!
    </p>

    <hr />

    <h2>
      Bot Detector Plugin News & Updates
    </h2>
    <p>News & updates will be added dynamically in here in a near future, for now you join our <Socials :social="SOCIAL.Discord" /> to follow the latest news & updates</p>

</template>

<style scoped>
span.integer {
  color: #00ff00;
  text-shadow: 0px 0px 2px #000000;
  font-weight: bold;
}
</style>
