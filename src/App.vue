<template>
  <v-app>
    <v-app-bar
      app
      color="#252e34"
      dark
    >
      <img
          :src="require('./assets/logo-sm.png')"
      />
      <div class="d-flex align-center">
          <h1>Bot-Detector</h1>
      </div>

      <v-spacer></v-spacer>

      <div id="nav">

          <router-link class="overline" to="/">Home</router-link> |
          <router-link class="overline" to="/form">Bot Submissions</router-link> |
          <a href="https://github.com/Ferrariic/Bot-Detector-Core-Files#readme">FAQs</a>

       </div>


      <v-spacer></v-spacer>

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
    </v-app-bar>


    <v-main>

      <router-view/>

    </v-main>

    <v-footer class="footer">
      Only&nbsp;&nbsp;<strike>one</strike>&nbsp;&nbsp;two keyboards were destroyed in the making of this site.
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
  }),
  mounted () {
   this.getActiveInstalls()
  },
  methods: {
    getActiveInstalls: function() {
       axios
      .get('https://api.runelite.net/runelite-1.7.2.2/pluginhub')
      .then(response => this.activeInstalls = response.data["bot-detector"])
    },
  }
};
</script>

<style>
  .footer {
    position:fixed !important;
    bottom:0;
    left:0;
    right:0;
    height:30px;
  }
</style>
