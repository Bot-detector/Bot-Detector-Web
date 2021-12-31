<template>
  <v-container>
      <head>
      <title>Homepage</title>
      </head>

      <div class='background'>
      <div class='main'>

        <header style="text-align: center; font-family:tahoma,geneva,sans-serif;">
          <h1>Bot Detector</h1>
          <h2>An Open-Source Machine Learning Plugin</h2>
        </header>

        <hr class='break'>

        <p class='description'>
          The Bot Detector Plugin is an open-source community-run machine learning plugin made for <a href="https://www.oldschool.runescape.com/"><span class='link'>Old School RuneScape</span></a> using the popular third-party client <a href="https://runelite.net/"><span class='link'>RuneLite</span></a>.
          We aim to use this plugin and the corresponding machine learning algorithims to seperate players from bots, from a bird's eye view - and send likely bot accounts to Jagex's anti-cheating team for swift removal.
          Since our start on February 28, 2021 - we have analyzed <span class='integer'>{{totalAccounts.toLocaleString()}}</span> accounts and have logged over <span class='integer'>{{totalBans.toLocaleString()}}</span> account bans.
          If you wish to join us on <a href='https://discord.gg/YvVmjyNu'><span class='link'>discord</span></a> or <a href='https://twitter.com/OSRSBotDetector'><span class='link'>twitter</span></a>, support us on <a href='https://www.patreon.com/bot_detector'><span class='link'>patreon</span></a> or check out our <a href='https://github.com/Bot-detector/'><span class='link'>github</span></a> and join the team,
          click any of the previous links, or the site header.
        </p>

        <hr class='break'>

        <div class='servicedescription'>
          <router-link to="/account-information"><h2><span class='servicelink'>OSRS Account Search</span></h2></router-link>
          <p class='servicedescription'>
            Check over <span class='integer'>{{totalAccounts.toLocaleString()}}</span> accounts' ban status, bot prediction likelihood, latest hiscore entry, xp-gains, and more!  
          </p>
        </div>

        <div class='servicedescription'>
          <router-link to="/banned-accounts"><h2><span class='servicelink'>Banned Accounts</span></h2></router-link>
          <p class='servicedescription'>
            Scroll through over <span class='integer'>{{totalBans.toLocaleString()}}</span> account bans here!
          </p>
        </div>

        <hr class='break'>

        <div class='servicedescription'>
              <h2><span class='servicelink'>Bot Detector Plugin News & Updates</span></h2>
          <p class='servicedescription'>
            Insert news here :)
          </p>
        </div>
      </div>
    </div>

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
      totalBans: 500000,
      totalPlayers: 0,
      totalAccounts: 4000000
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
* {
  box-sizing: border-box;
}

div.background {
    background-image: url('../assets/background.jpg');
    background-position: center;
    background-repeat: repeat-y;
    background-size: 75%;
}

div.main {
  width: 60%;
  text-align: center;
  padding-bottom: 500px;
  margin-right: auto;
  margin-left: auto;
  color: #1F1B12;
  background-color: #B9A170;
}

div.servicedescription {
  margin-top:1px;
  padding-right: 5%;
  padding-left: 5%;
}

p.servicedescription {
  text-align:left;
  margin-bottom:0;
}

hr.break {
  border: solid #63A266;
  width: 80%;
  border-width: 1px;
  height: 1px;
  margin:auto;
}

span.link{
  color: #1b180c;
  font-weight:bold;
}

span.integer {
  color: #409c4f;
  font-weight: bold;
}

span.servicelink{
  color: #1b180c;
  font-weight:bold;
  text-align: left;
}

p.description {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-top:10px;
}
</style>
