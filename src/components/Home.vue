<template>
  <v-container>
      <head>
        <title>HTML Editor - Full Version</title>
      </head>
      <body class="vsc-initialized">
      <h1 style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;">
        <v-img
          :src="require('../assets/You_are_here.gif')"
          contain
          height="50px"/> 
          Bot Detector&nbsp;- An Open-Source Machine Learning Plugin</span></h1>
      <hr/>

      <div style="padding-top: 10px; padding-right: 17%; padding-bottom: 20px; padding-left: 17%">
        <h3 style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;">Who are we?</span></h3>
        <p>
          The Bot Detector Plugin is an open-source community-run machine learning plugin made for <a href="https://www.oldschool.runescape.com/">Old School RuneScape</a> using the popular third-party client <a href="https://runelite.net/">RuneLite</a>.
          This project was created in response to an ever-growing botting issue in Old School Runescape, and designed make more players aware of how they can help fight the issue of goldfarming and botting by giving the tools of detection to every player.
          We aim to use this plugin and the corresponding machine learning algorithims to seperate players from bots, from a bird's eye view - and send likely bot accounts to Jagex's anti-cheating team for swift removal.
          Since our start on February 28, 2021 - we have analyzed {{totalAccounts.toLocaleString()}} accounts and have logged over {{totalBans.toLocaleString()}} account bans.
          If you wish to join us on <a href='https://discord.gg/YvVmjyNu'>discord</a> or <a href='https://twitter.com/OSRSBotDetector'>twitter</a>, support us on <a href='https://www.patreon.com/bot_detector'>patreon</a> or check out our <a href='https://github.com/Bot-detector/'>github</a> and join the team,
          click any of the previous links, or the site header.
        </p>
          <v-simple-table class="table" id="reports-stats" dense :dark="true">
            <template v-slot:default>
              <tbody>
                <tr>
                  <td class="text-left">Accounts Analyzed</td>
                  <td class="text-right">{{totalAccounts.toLocaleString()}}</td>
                </tr>
                <tr>
                  <td class="text-left">Confirmed Real Players</td>
                  <td class="text-right">{{totalPlayers.toLocaleString()}}</td>
                </tr>
                <tr>
                  <td class="text-left">Confirmed Bans</td>
                  <td class="text-right">{{totalBans.toLocaleString()}}</td>
                </tr>
            </tbody>
            </template>
          </v-simple-table>

        <hr/>

        <div class="row" style="padding-top: 2%; padding-left: 1%; padding-right: 1%">
          <div class="column" style='text-align: left;'>
              <h3 style="text-align: left;">Contributors</h3>
              <p style=''>
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Owner.png'> Ferrariic
                </br>
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Deputy_owner.png'> Seltzer Bro,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Deputy_owner.png'> Extreme4all,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Deputy_owner.png'> Cyborger1
                </br>
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Jmod.png'> Mod Trident,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Jmod.png'> Mod Tyran,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Jmod.png'> Mod Twisted

              </p>

          </div>
          <div class="column" style='text-align: right;'>
              <iframe src="https://discord.com/widget?id=817916789668708384&theme=dark" width="500" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </div>
        </div>
      </body>

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

<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 50%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
