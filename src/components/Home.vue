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
          Bot-Detector is an open-source plugin built for use with the popular 
          <a herf="https://runelite.net/">
          RuneLite Client
          </a>
          and 
          <a herf="https://www.oldschool.runescape.com/">
          Old School Runescape
          </a>
        </p>

        <p class="subheading font-weight-regular">
          Our primary purpose is to use machine learning techniques to automatically identify likely bot accounts and alert Jagex moderators of their presence. <br/>
          By using this plugin you allow us to gather data about accounts actively logged into the game around you which we then analyze for botting characteristics. <br/>
          To learn more about the data we collect and how we utilize it, please visit our FAQ page. You also may click here to contact us.
        </p>

        <v-simple-table class="table" id="reports-stats" dense :dark="true">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="">Project Stats</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-left">Total Players Analyzed</td>
                <td class="text-right">{{ totalPlayers }}</td>
              </tr>
              <tr>
                <td class="text-left">Total Reports Submitted</td>
                <td class="text-right">{{ totalReports }}</td>
              </tr>
              <tr>
                <td class="text-left">Total Confirmed Bans</td>
                <td class="text-right">{{ totalBans }}</td>
              </tr>
              <tr>
                <td class="text-left">Report Accuracy</td>
                <td class="text-right">{{ reportAccuracy * 100 }}%</td>
              </tr>
          </tbody>
          </template>
        </v-simple-table>
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
      totalBans: 0,
      totalPlayers: 0,
      totalReports:0,
      reportAccuracy: 0,
    }),
    mounted () {
      this.getTotalBans(),
      this.getTotalPlayers()
    },
    methods: {
      setBanStats: function(response) {
        console.log(response.data)
        this.totalBans = response.data["bans"];
        this.totalReports = response.data["total_reports"]
        this.reportAccuracy = response.data["accuracy"]
      },
      getTotalBans: function() {
        axios
        .get('http://osrsbot-detector.ddns.net:5000/site/dashboard/getreportsstats')
        .then(response => this.setBanStats(response))
      },
      getTotalPlayers: function() {
        axios
        .get('http://osrsbot-detector.ddns.net:5000/site/dashboard/gettotaltrackedplayers')
        .then(response => this.totalPlayers= response.data.players[0])
      },
    }
  }
</script>

<style scoped>

  #reports-stats {
    margin: auto;
    width: fit-content; 
  }

</style>
