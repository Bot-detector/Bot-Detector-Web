<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/meme.png')"
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
          To learn more about the data we collect and how we utilize it, please visit our <a href="https://github.com/Ferrariic/Bot-Detector-Core-Files#readme">FAQs</a> page.
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
                <td class="text-left">Accounts Analyzed</td>
                <td class="text-right">{{ totalAccounts }}</td>
              </tr>
              <tr>
                <td class="text-left">Confirmed Real Players</td>
                <td class="text-right">{{ totalPlayers }}</td>
              </tr>
              <tr>
                <td class="text-left">Confirmed Bans</td>
                <td class="text-right">{{ totalBans }}</td>
              </tr>
          </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    
    name: 'Home',
    components: {
      
    },
    computed: {
        console: () => console,
    },
    data: () => ({
      totalBans: 0,
      totalPlayers: 0,
      totalAccounts:0
    }),
    mounted () {
      this.getProjectStats()
    },
    methods: {
      setBanStats: function(response) {
        console.log(response.data)
        this.totalBans = response.data["total_bans"];
        this.totalAccounts = response.data["total_accounts"];
        this.totalPlayers= response.data["total_real_players"]
      },
      getProjectStats: function() {
        axios
        .get('https://www.osrsbotdetector.com/api/site/dashboard/projectstats')
        .then(response => this.setBanStats(response))
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
