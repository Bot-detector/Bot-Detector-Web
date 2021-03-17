<template>
  <v-app>
    <v-app-bar
      app
      color="#252e34"
      dark
    >
      <div class="d-flex align-center">
          <h1>Bot-Detector</h1>
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
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>

    <v-footer>
      Only one keyboard was destroyed in the making of this site.
      <v-spacer></v-spacer>
      Active Installs: {{activeInstalls}}
    </v-footer>
  </v-app>
</template>

<script>
import Home from './components/Home';
import axios from 'axios';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    activeInstalls: 0,
  }),
  mounted () {
    axios
      .get('https://api.runelite.net/runelite-1.7.2.2/pluginhub')
      .then(response => this.activeInstalls = response.data["bot-detector"])
  }
};
</script>
