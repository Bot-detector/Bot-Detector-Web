<template>
    <v-container>
        <div class='background'>
        <div class="main">
            <h1 style='text-align: center;'>TBD: OSRS Account Search</h1>
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
                <body class='field'>Plugin Prediction: {{pluginPrediction}}</body>

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
      selectedRSN: "",
      accountStatus: "",
      banDate: "",
      pluginPrediction: "",
      firstSeenDate: "",
      lastSeenDate: ""
    }),
    methods: {
      setAccountInformation: function(response) {
        console.log(response.data)

        if (response.data.length == 0) {
            this.pluginPrediction = "No Prediction Found"
        } else {
            this.pluginPrediction = response.data[0].Prediction.replace(/_/g, ' ');
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

div.background {
    background-image: url('../assets/background.jpg');
    background-position: center;
    background-repeat: repeat-y;
    background-size: 75%;
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
  width:60%;
  padding-bottom: 700px;
  margin-right: auto;
  margin-bottom: 2%;
  margin-left: auto;
  color: #1F1B12;
  background-color: #B9A170;
}

hr.break {
  border: solid #63A266;
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