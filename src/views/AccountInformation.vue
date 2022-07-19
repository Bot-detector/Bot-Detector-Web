<script setup lang="ts">
  import Heading from "@/components/Heading.vue";
</script>

<template>
  <Heading 
    title="Account Search" 
    imageSrc="src/assets/images/GameAssets/runefullhelm.png"
    imageFlipped
  />
  <p class="description">
    If you would like to learn more about an Old School Runescape account,
    type in the name below. We cannot provide information with 24 hours of
    a sighting of a player, therefore we cannot provide latest locations
    and latest gear information for an account.
  </p>
  <hr class="break" />

  <div class="enterrsn">
    <label style="font-size: 20px">Account Name: </label>
    <input
      v-model="selectedRSN"
      type="text"
      class="enterrsn"
      required
      minlength="1"
      maxlength="12"
      size="20px"
    />
    <v-btn @click="getAccountInformation()">Lookup</v-btn>
  </div>

  <br />

  <div class="account-info">
    <section class="field">
      <strong>Plugin Prediction:</strong> {{ pluginPrediction }}
    </section>
    <section class="field">
      <strong>Plugin Confidence:</strong> {{ pluginConfidence }}%
    </section>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  name: "Home",
  components: {},
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
    lastSeenDate: "",
  }),
  methods: {
    setAccountInformation: function (response: any) {
      console.log(response.data);

      if (response.data.length == 0) {
        this.pluginPrediction = "No Prediction Found";
        this.pluginConfidence = "0  ";
      } else {
        this.pluginPrediction = response.data[0].Prediction.replace(/_/g, " ");
        this.pluginConfidence = `${response.data[0].Predicted_confidence * 100}`;
      }
    },
    getAccountInformation: function () {
      axios
        .get(
          import.meta.env.VITE_API_URL + "/v1/prediction?name=" +
            this.selectedRSN
        )
        .then((response) => this.setAccountInformation(response))
        .catch(function (error) {
          this.accountStatus =
            "Unable to obtain account status for " + this.selectedRSN;
          console.log("Error getting acc info for " + this.selectedRSN);

          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log("Error", error.message);
          }
        });
    },
  },
};
</script>

<style scoped>
input.enterrsn {
  border: 2px solid #1f1b12;
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
  width: 85%;
  padding-bottom: 300px;
  margin-right: auto;
  margin-left: auto;
  color: #1f1b12;
  background-image: url("../assets/images/backdrop.gif");
  background-repeat: repeat-y;
  background-position: center;
  background-size: 100%;
}

hr.break {
  border: solid #6b7b17;
  width: 80%;
  border-width: 1px;
  height: 1px;
  margin: auto;
}

div.description {
  text-align: left;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 1%;
  padding-top: 10px;
}

p.description {
  text-align: left;
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 10px;
}

div.account-info {
  margin-left: 5%;
  margin-top: 2%;
  clear: both;
}
</style>
