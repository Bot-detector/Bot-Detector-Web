<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bot-Detector
        </h1>

        <p class="subheading font-weight-regular">
          Bots confirmed banned so far: {{totalBans}}
        </p>
        <br/>
        <p>
            And more to come!
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
        </h2>

        <v-row justify="center">
        </v-row>
          
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'Home',
    computed: {
        console: () => console,
    },
    data: () => ({
      totalBans: 0
    }),
    mounted () {
    axios
      .get('http://osrsbot-detector.ddns.net:5000/site/dashboard/gettotalbans')
      .then(response => this.totalBans = response.data.bans)
    }
  }
</script>
