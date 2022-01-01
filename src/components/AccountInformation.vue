<template>
    <v-container>
        <div class='background'>
            <div class='navigationbox'>
              <router-link style='text-decoration: none;' to="/"><span class='navigationbar'>Home</span></router-link>
              <router-link style='text-decoration: none;' to="/account-information"><span class='navigationbar'>Account Search</span></router-link>
              <router-link style='text-decoration: none;' to="/banned-accounts"><span class='navigationbar'>Banned Accounts</span></router-link>
              <router-link style='text-decoration: none;' to="/contributors-and-supporters"><span class='navigationbar'>Contributors</span></router-link>
              <router-link style='text-decoration: none;' to="/faq"><span class='navigationbar'>FAQ</span></router-link>
              <router-link style='text-decoration: none;' to="/contact-us"><span class='navigationbar'>Contact Us</span></router-link>
            </div>
            <div class='topbanner'>
                <img class='topbanner' contain width='88%' src='../assets/top.gif'>
            </div>
        <div class="main">
            <div class='headerimage'>
                <h1><img class='headerimage1' contain width='35px' src='../assets/GameAssets/runefullhelm.png'>Account Search<img class='headerimage2' contain width='35px' src='../assets/GameAssets/runefullhelm.png'></h1>
            </div>
            <p class = 'description'>
                If you would like to learn more about an Old School Runescape account, type in the name below. We cannot provide information with 24 hours of a sighting of a player, therefore we cannot provide latest locations and latest gear information for an account.
            </p>
            <hr class='break'>

            <div class = 'enterrsn'>
                <label style='font-size: 20px;'>Account Name: </label>
                <input v-model="selectedRSN" type="text" class='enterrsn' required minlength="1" maxlength="12" size=20px>
                <v-btn @click="getAccountInformation()">Lookup</v-btn>
            </div>

            <br>

            <div class='account-info'>
                <!-- 
                    I'm being bad and leaving unused code in a comment. Somebody stop me!!
                <body class='field'>Account Status: {{accountStatus}}</body>
                <body class='field'>Ban Date: {{banDate}}</body>
                <body class='field'>Plugin Prediction: {{pluginPrediction}}</body>
                <body class='field'>First Seen by the Plugin: {{firstSeenDate}}</body>
                <body class='field'>Last Seen by the Plugin: {{lastSeenDate}}</body>
                -->
                <body class='field'><strong>Plugin Prediction:</strong> {{pluginPrediction}}</body>
                <body class='field'><strong>Plugin Confidence:</strong>  {{pluginConfidence}}%</body>

            </div>
            
        </div>
        <div class='bottombanner'>
            <img class='bottombanner' contain width='88%' src='../assets/bottom.gif'>
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
      selectedRSN: "",
      accountStatus: "",
      banDate: "",
      pluginPrediction: "Please enter in a valid RSN",
      pluginConfidence: "0",
      firstSeenDate: "",
      lastSeenDate: ""
    }),
    methods: {
      setAccountInformation: function(response) {
        console.log(response.data)

        if (response.data.length == 0) {
            this.pluginPrediction = "No Prediction Found"
            this.pluginConfidence = "0  "
        } else {
            this.pluginPrediction = response.data[0].Prediction.replace(/_/g, ' ');
            this.pluginConfidence = response.data[0].Predicted_confidence;
        }
      },
      getAccountInformation: function() {
        axios
        .get('https://www.osrsbotdetector.com/dev/v1/prediction?name=' + this.selectedRSN)
        .then(response => this.setAccountInformation(response))
        .catch(function (error) {
          this.accountStatus = "Unable to obtain account status for " + this.selectedRSN;
          console.log("Error getting acc info for " + this.selectedRSN);

          if(error.response) {
              console.log(error.response.status);
              console.log(error.response.data);
          } else {
              console.log("Error", error.message);
          }
        })
      },
    }
  }
</script>

<style scoped>

div.navigationbox {
  background-color: #000000;
  border: 2px solid #382418;
  width: 80%;
  padding-left: 2%;
  padding-right: 2%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

span.navigationbar {
  color: #90c040;
  text-decoration: none;
  font-size: 90%;
  vertical-align: center;
}


div.headerimage {
  position: relative;
  text-align: center;
  padding-top: 10px;
}

img.headerimage1 {
  position: relative;
  right: 10px;
  top: 5px;
}
img.headerimage2 {
  position: relative;
  left: 10px;
  transform: scaleX(-1);
  top: 5px;
}

img.topbanner {
  position: relative;
  z-index: 2;
}

div.topbanner {
  position: relative;
  text-align: center;
}

img.bottombanner {
  position: relative;
  z-index: 2;
}

div.bottombanner {
  position: relative;
  text-align: center;
}

div.background {
    width: 900px;
    margin-right: auto;
    margin-left: auto;
    background-image: url('../assets/background.jpg');
    background-position: center;
    margin-top: -2%;
    padding-top: 2%;
    padding-bottom: 1%;
    background-repeat: repeat-y;
    background-size: 100%;
}

input.enterrsn {
    border:2px solid #1F1B12; 
    text-align: center;
    float: center;
    margin-right: 0.5em;
}

div.enterrsn {
    margin-top: 16px;
    margin-left: 5%;
    float: left;
    text-align: left;
    vertical-align: bottom;
}

div.field {
    margin-left: 5%;
    margin-top: 2%;
}

p.field {
    text-align: left;
    margin-top: 0px;
}

div.main {
    margin-top: -2%;
    padding-top: 1%;
    margin-bottom: -1%;
    width:85%;
    padding-bottom: 300px;
    margin-right: auto;
    margin-left: auto;
    color: #1F1B12;
    background-image: url('../assets/backdrop.gif');
    background-repeat: repeat-y;
    background-position: center;
    background-size: 100%;
}

hr.break {
  border: solid #6B7B17;
  width: 80%;
  border-width: 1px;
  height: 1px;
  margin:auto;

}

div.description {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-bottom:1%;
  padding-top:10px;
}

p.description {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-top:10px;
}

div.account-info {
    margin-left: 5%;
    margin-top: 2%;
    clear: both;
}

</style>