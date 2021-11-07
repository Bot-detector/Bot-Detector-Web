<template>
  <v-app>

    <sidebar></sidebar>

    <v-app-bar
      app
      color="#252e34"
      dark
    >

      <img
          
          :src="require('./assets/logo-sm.png')"
      />
      <div class="d-flex align-center ">
          <h1 class="hidden-sm-and-down">Bot-Detector</h1>
          <h3 class="hidden-md-and-up"> Bot-Detector</h3>
      </div>

      <v-spacer></v-spacer>

       <div class="hidden-md-and-up mobile-nav">
         <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(link, i) in routerLinks"
                :key="i"
                :to="link.url"
              >
                <v-icon>{{link.icon}}</v-icon>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item>

              <!-- TODO Figure Out How To Have Router Links and Non-Router Links in Same List -->

              <v-list-item href="https://github.com/Ferrariic/Bot-Detector-Core-Files#readme" target="_blank">
                <v-icon>mdi-help</v-icon>
                <v-list-item-title>FAQ</v-list-item-title>
              </v-list-item>
              <v-list-item href="https://github.com/Ferrariic/bot-detector" target="_blank">
                <v-icon>mdi-github</v-icon>
                <v-list-item-title>Github</v-list-item-title>
              </v-list-item>
              <v-list-item href="https://www.patreon.com/bot_detector" target="_blank">
                <v-icon>mdi-patreon</v-icon>
                <v-list-item-title>Patreon</v-list-item-title>
              </v-list-item>
              <v-list-item href="https://discord.gg/YvVmjyNu">
                <v-icon>mdi-discord</v-icon>
                <v-list-item-title>Discord</v-list-item-title>
              </v-list-item>

            </v-list>
          </v-menu>
       </div>


      <v-spacer></v-spacer>

      <div id="external-links" class="hidden-sm-and-down">
      <v-btn
        href="https://github.com/Ferrariic/bot-detector"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn
        href="https://www.patreon.com/bot_detector"
        target="_blank"
        text
      >
        <span class="mr-2">Patreon</span>
        <v-icon>mdi-patreon</v-icon>
      </v-btn>
      <v-btn
        href="https://discord.gg/YvVmjyNu"
        text
      >
        <span class="mr-2">Discord</span>
        <v-icon>mdi-discord</v-icon>
      </v-btn>
      <v-btn
        class="discord-sign-in"
        href="https://discord.com/api/oauth2/authorize?client_id=825139932817129613&redirect_uri=https%3A%2F%2Fwww.osrsbotdetector.com%2Fdev%2Flogin&response_type=code&scope=identify"
        text
      >
        <span class="mr-2">Sign In</span>
        <v-icon>mdi-discord</v-icon>
      </v-btn>
      </div>
    </v-app-bar>

    <v-main>

      <router-view/>

    </v-main>

    <v-footer class="footer subtitle-2">
      <v-icon>mdi-heart</v-icon>
      The Bot Detector Team
      <v-spacer></v-spacer>
      Active Installs: {{activeInstalls}}
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {
   
  },
  data: () => ({
    activeInstalls: 0,
    runeLiteVersion: null,
    routerLinks: [
      { title: 'Home',
        url:    '/',
        icon: 'mdi-home' },
      { title: 'Submit Bots',
        url:    '/form',
        icon: 'mdi-send' },
    ],
  }),
  mounted () {
   this.getActiveInstalls()
  },
  methods: {
    getActiveInstalls: async function() {

      await axios
            .get('https://static.runelite.net/bootstrap.json')
            .then(response => this.runeLiteVersion = response.data["client"]["version"])
      
      axios
      .get('https://api.runelite.net/runelite-' + this.runeLiteVersion + '/pluginhub')
      .then(response => this.activeInstalls = response.data["bot-detector"])
    }
  }
};
</script>

<style>
  i {
    padding-right: 3px;
  }

  .footer {
    position:fixed !important;
    bottom:0;
    left:0;
    right:0;
    height:30px;
  }

  .centered {
    text-align: center;
  }

  .mobile-nav {
    position: fixed;
    right: 0;
  }

  .discord-sign-in {
    color: white;
    background-color: #5865F2;

  }

</style>
