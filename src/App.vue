<template>
  <v-app>

    <sidebar></sidebar>

    <v-app-bar
      app
      color="#252e34"
      dark
    >

      <img
          
          :src="require('./assets/logo-sm.png')"
      />
      <div class="d-flex align-center ">
          <h1 class="hidden-sm-and-down">Bot-Detector</h1>
          <h3 class="hidden-md-and-up"> Bot-Detector</h3>
      </div>

      <v-spacer></v-spacer>

      <div id="desktop-nav" class="hidden-sm-and-down">

          <router-link class="overline centered" to="/">Home</router-link> |
          <router-link class="overline centered" to="/form">Bot Submissions</router-link> |
          <router-link class="overline centered" to="/hiscores">Hiscores</router-link> |
          <a class="overline centered" href="https://github.com/Ferrariic/Bot-Detector-Core-Files#readme">FAQs</a>

       </div>

       <div class="hidden-md-and-up mobile-nav">
         <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(link, i) in routerLinks"
                :key="i"
                :to="link.url"
              >
                <v-icon>{{link.icon}}</v-icon>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item>

              <!-- TODO Figure Out How To Have Router Links and Non-Router Links in Same List -->

              <v-list-item href="https://github.com/Ferrariic/Bot-Detector-Core-Files#readme" target="_blank">
                <v-icon>mdi-help</v-icon>
                <v-list-item-title>FAQ</v-list-item-title>
              </v-list-item>
              <v-list-item href="https://github.com/Ferrariic/bot-detector" target="_blank">
                <v-icon>mdi-github</v-icon>
                <v-list-item-title>Github</v-list-item-title>
              </v-list-item>
              <v-list-item href="https://www.patreon.com/bot_detector" target="_blank">
                <v-icon>mdi-patreon</v-icon>
                <v-list-item-title>Patreon</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
       </div>


      <v-spacer></v-spacer>

      <div id="external-links" class="hidden-sm-and-down">
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

      <v-btn
        @click="handleClickSignIn()"
        v-if="!isSignIn"
        :disabled="!isInit"
      >
        <span class="mr-2">Sign In</span>
        <v-icon>mdi-google</v-icon>
      </v-btn>
      </div>
    </v-app-bar>

    <v-main>

      <router-view/>

    </v-main>

    <v-footer class="footer subtitle-2">
      <v-icon>mdi-heart</v-icon>
      The Bot Detector Team
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
    isInit: false,
    isSignIn: false,
    routerLinks: [
      { title: 'Home',
        url:    '/',
        icon: 'mdi-home' },
      { title: 'Submit Bots',
        url:    '/form',
        icon: 'mdi-send' },
    ],
  }),
  mounted () {
   this.getActiveInstalls()
  },
  methods: {
    getActiveInstalls: function() {
       axios
      .get('https://api.runelite.net/runelite-1.7.10/pluginhub')
      .then(response => this.activeInstalls = response.data["bot-detector"])
    },
        async handleClickUpdateScope() {
      const option = new window.gapi.auth2.SigninOptionsBuilder();
      option.setScope("email https://www.googleapis.com/auth/drive.file");
      const googleUser = this.$gAuth.GoogleAuth.currentUser.get();
      try {
        await googleUser.grant(option);
        console.log("success");
      } catch (error) {
        console.error(error);
      }
    },
    handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then((authCode) => {
          //on success
          console.log("authCode", authCode);
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
          return null;
        });
    },
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log("googleUser", googleUser);
        console.log("getId", googleUser.getId());
        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log(
          "getAuthResponse",
          this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
        );
        this.isSignIn = this.$gAuth.isAuthorized;
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        this.isSignIn = this.$gAuth.isAuthorized;
        console.log("isSignIn", this.$gAuth.isAuthorized);
      } catch (error) {
        console.error(error);
      }
    },
    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
  },
  created() {
    let that = this;
    let checkGauthLoad = setInterval(function () {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  },
  computed: {
      
    },
  watch: {

  },
};
</script>

<style>
  i {
    padding-right: 3px;
  }

  .footer {
    position:fixed !important;
    bottom:0;
    left:0;
    right:0;
    height:30px;
  }

  .centered {
    text-align: center;
  }

  .mobile-nav {
    position: fixed;
    right: 0;
  }

</style>
