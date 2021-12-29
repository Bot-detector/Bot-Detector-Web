<template>
  <v-container>
      <head>
      <title>Homepage</title>
      </head>
      <body class="vsc-initialized" style='text-align: center;'>
        <h1 style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;">Bot Detector</span></h1>
        <h2>An Open-Source Machine Learning Plugin</h2>
      <hr/>
      </body>

        <div style="padding-top: 10px; padding-right: 17%; padding-bottom: 100px; padding-left: 17%; background-color: #2b2b2b;">

          
          <p>
            The Bot Detector Plugin is an open-source community-run machine learning plugin made for <a href="https://www.oldschool.runescape.com/">Old School RuneScape</a> using the popular third-party client <a href="https://runelite.net/">RuneLite</a>.
            We aim to use this plugin and the corresponding machine learning algorithims to seperate players from bots, from a bird's eye view - and send likely bot accounts to Jagex's anti-cheating team for swift removal.
            Since our start on February 28, 2021 - we have analyzed <span style="color: #00ff00">{{totalAccounts.toLocaleString()}}</span> accounts and have logged over <span style="color: #00ff00">{{totalBans.toLocaleString()}}</span> account bans.
            If you wish to join us on <a href='https://discord.gg/YvVmjyNu'>discord</a> or <a href='https://twitter.com/OSRSBotDetector'>twitter</a>, support us on <a href='https://www.patreon.com/bot_detector'>patreon</a> or check out our <a href='https://github.com/Bot-detector/'>github</a> and join the team,
            click any of the previous links, or the site header.
          </p>

          <hr/>
          <div style='text-align: center;'>

            <router-link  class="nav-item" to="/account-information">
            <h1><span style="color: #00afff">OSRS Account Search</span></h1>
            </router-link>
          </div>
          <h3>Lookup information about an Old School Runescape Account. This includes checking
            an account's ban status,
            hiscore data,
            number of account reports,
            the bot detector machine learning prediction,
            and more!
          </h3>
          
          <hr/>

          <div class="row" style="padding-top: 2%; padding-left: 1%; padding-right: 1%">
            <div class="column" style='text-align: left;'>
                <h2 style="text-align: center;">
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/House.png'>
                  Contributors
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/House.png'>
                </h2>
                <p>
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Owner.png'> Ferrariic
                  <br>
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Deputy_owner.png'> Seltzer Bro,
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Deputy_owner.png'> Extreme4all,
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Deputy_owner.png'> Cyborger1
                  <br>
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Jmod.png'> Mod Trident,
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Jmod.png'> Mod Tyran,
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Jmod.png'> Mod Twisted
                </p>

                <h2 style="text-align: center;">
                  <img style='vertical-align:middle; ' contain height="20px" src='../assets/Clan_icons/Shield.png'>
                  Community Moderators
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Shield.png'>
                </h2>
                <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/t4.png'> Tier 4</h4>
                <p style='vertical-align:middle; margin-bottom: 0;'>Lier52</p>
                <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/t3.png'> Tier 3</h4>
                <p style='vertical-align:middle; margin-bottom: 0;'>Anthony - Some Ranger, ArcaneStars, Candys Skill, Jair, Justproman</p>
                <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/t2.png'> Tier 2</h4>
                <p style='vertical-align:middle; margin-bottom: 0;'>7 7 mafia, AlisaWhiteheart, cactus, CreamOfTheCrop, Drew, esc | Keywok, Hydra, LuigiStyl, PigeNug, SoloContent</p>
                <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/t1.png'> Tier 1</h4>
                <p style='vertical-align:middle; margin-bottom: 10;'>Not Sentry</p>

                <h2 style="vertical-align: top; text-align: center;">
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bank.png'>
                  Patreon Supporters
                  <img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bank.png'>
                </h2>
                <p>
                  <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Dragon.png'> Dragon Bot Hunters</h4>
                  <p style='margin-bottom: 0;'>DevinDog</p>
                  <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Rune.png'> Rune Bot Hunters</h4>
                  <p style='margin-bottom: 0;'><a href='https://www.patreon.com/bot_detector'>[This slot could be yours!]</a></p>
                  <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Adamant.png'> Adamant Bot Hunters</h4>
                  <p style='margin-bottom: 0;'>Sallysal, Rhikalika</p>
                  <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Mithril.png'> Mithril Bot Hunters</h4>
                  <p style='margin-bottom: 0;'>Gottfrid, § Rambo, Ratteo, someranger, 117, PigeonNugget</p>
                  <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Steel.png'> Steel Bot Hunters</h4>
                  <p style='margin-bottom: 0;'>Sophlin, SeltzerBro, RoopeK, Richard Andrew</p>
                  <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Iron.png'> Iron Bot Hunters</h4>
                  <p style='margin-bottom: 0;'>7 7 7 7, AchromiK, Slappious, iamguard, TayyabPW, Snackal, Gunillion, Lewdy, CreamOfTheCrop, gllt, ryry3003, VRM, Zephinism, Python, cactus, BlueSavior, Adam, Iamdrew, Isaac Shevenell, Haleigh, EL_DEE , Infinitykill, Cody , RadioActiveYeti</p>
                  <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Bronze.png'> Bronze Bot Hunters</h4>
                  <p style='margin-bottom: 0;'>Lexiii223, Zirhaze, Lisa Leese (She/They), Arcane, Seatball Mub, rasmus godske, Cortunix, Beeeooop, louis, Vis, oBIGRON, Amon Havers, Posti, Foxo, sarunas knabikas, Hex</p>
                  <h4><img style='vertical-align:middle;' contain height="20px" src='../assets/Clan_icons/Skulled.png'> Starter Bot Hunters</h4>
                  <p style='margin-bottom: 0;'>Attilatheguy, mciurlionis, cykaking187, Claudio Dekker, JMoney, Not Goode, Hach, Heklek, Jair, Dennozs, grimsli, Poltergeist, Toastface5, samurai_pr, Springstof, LadyAleksandra, 3Pills, Gertoni Macaroni, Kryllo, RiverRogue, Basti, Infernus, Winning, Hairyngross, Fazel, Jules, Nechtmarrie, Anthony Perez, Anon4777, schulz, iliketostayanonymous, breakthetargets, Nostalgia, Darkpi, Thor, Sasha, val, Caboose700, KuhlGuy, FRED, AgelessOverkill, Caldo dpollo, No Ego, Daniël Roek, MyCrowSoft, Faremir , Beasst , Billy Hunt, Nicholas Earley, Joe Stoica, Tez, Dawnsnite, MrFoxyCracker, racklord, logan10144, fitchett, 7 7 mafia, Jax, Born2Grind, Core, Oondin, Damply, carpetcleaner, tylersandman, Jojy, Lag, Pyrotic, ify, pxjx, Icarus, Hotsaucesam, LookingForPants, Sentry, Oosterbuur
                </p>
              </div>
            </div>
          </div>
          <div>
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

</style>
