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
  
  <hr class="break" />

    <p class="description">
      The Bot Detector Plugin is an open-source community-run machine
      learning plugin made for
      <a href="https://www.oldschool.runescape.com/"
        ><span class="link">Old School RuneScape</span></a
      >
      using the popular third-party client
      <a href="https://runelite.net/"><span class="link">RuneLite</span></a
      >. We aim to use this plugin and the corresponding machine learning
      algorithims to seperate players from bots, from a bird's eye view -
      and send likely bot accounts to Jagex's anti-cheating team for swift
      removal. Since our start on February 28, 2021 - we have analyzed
      <span class="integer">{{ totalAccounts.toLocaleString() }}</span>
      accounts and have logged over
      <span class="integer">{{ totalBans.toLocaleString() }}</span> account
      bans. If you wish to join us on
      <a href="https://discord.gg/YvVmjyNu"
        ><span class="link">discord</span></a
      >
      or
      <a href="https://twitter.com/OSRSBotDetector"
        ><span class="link">twitter</span></a
      >, support us on
      <a href="https://www.patreon.com/bot_detector"
        ><span class="link">patreon</span></a
      >
      or check out our
      <a href="https://github.com/Bot-detector/"
        ><span class="link">github</span></a
      >
      and join the team, click any of the previous links, or the site
      header.
    </p>

    <hr class="break" />

    <div class="servicedescription">
      <routerLink to="/account-information"
        ><h2>
          <span class="servicelink">Account Search</span>
        </h2></routerLink
      >
      <p class="servicedescription">
        Check over
        <span class="integer">{{ totalAccounts.toLocaleString() }}</span>
        accounts' ban status, bot prediction likelihood, latest hiscore
        entry, xp-gains, and more!
      </p>
    </div>

    <div class="servicedescription">
      <routerLink to="/banned-accounts"
        ><h2>
          <span class="servicelink">Banned Accounts</span>
        </h2></routerLink
      >
      <p class="servicedescription">
        Scroll through over
        <span class="integer">{{ totalBans.toLocaleString() }}</span>
        account bans here!
      </p>
    </div>

    <div class="servicedescription">
      <routerLink to="/faq"
        ><h2>
          <span class="servicelink">Frequently Asked Questions</span>
        </h2></routerLink
      >
      <p class="servicedescription">
        Have a question about the Plugin? We've answered most of them here!
      </p>
    </div>

    <div class="servicedescription">
      <routerLink to="/contributors-and-supporters"
        ><h2><span class="servicelink">Contributors</span></h2></routerLink
      >
      <p class="servicedescription">
        A page where we've displayed everyone that has contributed or
        supported making the Bot Detector Plugin!
      </p>
    </div>

    <div class="servicedescription">
      <RouterLink to="/contact-us"
        ><h2><span class="servicelink">Contact Us</span></h2></RouterLink
      >
      <p class="servicedescription">
        Want to get in touch with us? Click here!
      </p>
    </div>

    <hr class="break" />

    <div class="servicedescription">
      <h2>
        <span class="servicelink">Bot Detector Plugin News & Updates</span>
      </h2>
      <p class="servicedescription">Insert news here :)</p>
    </div>
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

div.servicedescription {
  margin-top: 1px;
  padding-right: 5%;
  padding-left: 5%;
}

p.servicedescription {
  text-align: left;
  margin-bottom: 0;
}

hr.break {
  border: solid #6b7b17;
  width: 80%;
  border-width: 1px;
  height: 1px;
  margin: auto;
}

span.link {
  color: #1b180c;
  font-weight: bold;
}

span.integer {
  color: #00ff00;
  text-shadow: 0px 0px 2px #000000;
  font-weight: bold;
}

span.servicelink {
  color: #1b180c;
  font-weight: bold;
  text-align: left;
}

p.description {
  text-align: left;
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 10px;
}
</style>
