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
              <p>
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
              <h3 style="text-align: left;">Patreon Supporters</h3>
              <p>
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Dragon.png'> DevinDog,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Adamant.png'> Sallysal,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Adamant.png'> Rhikalika,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Mithril.png'> Gottfrid,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Mithril.png'> § Rambo,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Mithril.png'> Ratteo,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Mithril.png'> someranger,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Mithril.png'> 117,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Mithril.png'> PigeonNugget,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Steel.png'> Sophlin,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Steel.png'> SeltzerBro,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Steel.png'> RoopeK,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Steel.png'> Richard Andrew,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> 7 7 7 7,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> AchromiK,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Slappious,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> iamguard,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> TayyabPW,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Snackal,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Gunillion,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Lewdy,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> CreamOfTheCrop,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> gllt,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> ryry3003,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> VRM,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Zephinism,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Python,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> cactus,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> BlueSavior,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Adam,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Iamdrew,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Isaac Shevenell,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Haleigh,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> EL_DEE ,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Infinitykill,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Cody ,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> RadioActiveYeti,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Lexiii223,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Zirhaze,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Lisa Leese (She/They),
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Arcane,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Seatball Mub,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> rasmus godske,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Cortunix,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Beeeooop,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> louis,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Vis,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> oBIGRON,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Amon Havers,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Posti,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Foxo,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> sarunas knabikas,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Hex,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Attilatheguy,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> mciurlionis,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> cykaking187,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Claudio Dekker,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> JMoney,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Not Goode,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Hach,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Heklek,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Jair,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Dennozs,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> grimsli,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Poltergeist,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Toastface5,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> samurai_pr,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Springstof,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> LadyAleksandra,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> 3Pills,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Gertoni Macaroni,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Kryllo,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> RiverRogue,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Basti,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Infernus,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Winning,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Hairyngross,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Fazel,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Jules,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Nechtmarrie,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Anthony Perez,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Anon4777,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> schulz,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> iliketostayanonymous,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> breakthetargets,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Nostalgia,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Darkpi,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Thor,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Sasha,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> val,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Caboose700,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> KuhlGuy,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> FRED,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> AgelessOverkill,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Caldo dpollo,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> No Ego,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Daniël Roek,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> MyCrowSoft,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Faremir ,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Beasst ,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Billy Hunt,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Nicholas Earley,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Joe Stoica,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Tez,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Dawnsnite,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> MrFoxyCracker,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> racklord,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> logan10144,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> fitchett,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> 7 7 mafia,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Jax,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Born2Grind,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Core,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Oondin,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Damply,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> carpetcleaner,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> tylersandman,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Jojy,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Lag,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Pyrotic,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> ify,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> pxjx,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Icarus,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Hotsaucesam,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> LookingForPants,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Sentry,
                <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Oosterbuur
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
