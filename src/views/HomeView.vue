<script setup lang="ts">
  import Heading from "@/components/Heading.vue";
  import { RouterLink } from "vue-router";
</script>

<template>      
  <Heading 
    title="Bot Detector"
    subTitle="An Open-Source Machine Learning Plugin"
    imageSrc="src/assets/images/GameAssets/bot.png"
  />
  
  <hr />

    <p class="description-">
      The Bot Detector Plugin is an open-source community-run machine learning plugin made for <a href="https://www.oldschool.runescape.com/">Old School RuneScape</a> using the popular third-party client <a href="https://runelite.net/">RuneLite</a>. We aim to use this plugin and the corresponding machine learning algorithims to seperate players from bots, from a bird's eye view - and send likely bot accounts to Jagex's anti-cheating team for swift removal. Since our start on February 28, 2021 - we have analyzed <span class="integer">{{ totalAccounts.toLocaleString() }}</span> accounts and have logged over <span class="integer">{{ totalBans.toLocaleString() }}</span> account bans. If you wish to join us on <a href="https://discord.gg/YvVmjyNu">discord</a> or <a href="https://twitter.com/SRSBotDetector">Twitter</a>, support us on <a href="https://www.patreon.com/bot_detector">patreon</a> or check out our <a href="https://github.com/Bot-detector/">github</a> and join the team, click any of the previous links, or the site header.
    </p>

    <hr />

    <RouterLink to="/account-information">
      <h2>
        Account Search
      </h2>
    </RouterLink>
    <p>
      Check over
      <span class="integer">{{ totalAccounts.toLocaleString() }}</span>
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
      <span class="integer">{{ totalBans.toLocaleString() }}</span>
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
    <p>Insert news here :)</p>

</template>

<script lang="ts">
import axios from "axios";
export default {
  name: "Home",
  components: {},
  computed: {
    console: () => console,
  },
  data: () => ({
    totalBans: 500000,
    totalPlayers: 0,
    totalAccounts: 4000000,
  }),
  mounted() {
    this.getProjectStats();
  },
  methods: {
    setBanStats: function (response) {
      console.log(response.data);
      this.totalBans = response.data["total_bans"];
      this.totalAccounts = response.data["total_accounts"];
      this.totalPlayers = response.data["total_real_players"];
    },
    getProjectStats: function () {
      axios
        .get(import.meta.env.VITE_API_URL + "/site/dashboard/projectstats", {
          headers: {
            'accept': 'application/json'
          }
        })
        .then((response) => this.setBanStats(response));
    },
  },
};
</script>

<style scoped>
div.navigationbox {
  background-color: #000000;
  border: 2px solid #382418;
  width: 80%;
  padding-left: 2%;
  padding-right: 2%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

span.navigationbar {
  color: #90c040;
  text-decoration: none;
  font-size: 90%;
  vertical-align: center;
}

div.headerimage {
  position: relative;
  text-align: center;
  padding-top: 10px;
}

span.integer {
  color: #00ff00;
  text-shadow: 0px 0px 2px #000000;
  font-weight: bold;
}
</style>
