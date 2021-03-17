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
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
