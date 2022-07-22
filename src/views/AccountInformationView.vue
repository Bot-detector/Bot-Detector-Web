<script setup lang="ts">
  import Heading, { IMAGE_DISPLAY } from "@/components/Heading.vue";
</script>

<template>
  <Heading 
    title="Account Search" 
    imageSource="src/assets/images/GameAssets/runefullhelm.png"
    :imageDisplay="IMAGE_DISPLAY.reversedMirrored"
  />
  <p>
    If you would like to learn more about an Old School Runescape account, type in the name below. We cannot provide information with 24 hours of a sighting of a player, therefore we cannot provide latest locations and latest gear information for an account.
  </p>

  <hr />

  <form @submit.prevent="getAccountInformation()">
    <label for="rsn">Account Name </label>
    <!-- maxlengt=12 -->
    <input
      id="rsn"
      type="text"
      required
      minlength="1"
      v-model="selectedRSN"
      placeholder="Enter account name here"
    />
    <input type="submit" value="Lookup" />
  </form>

  <section v-if="isAwaitingResponse">
    Fetching data...
  </section>

  <section v-if="responseStatus === 404">
    <p><strong>{{ playerName }} </strong> - Player not found.</p>
  </section>

  <section id="predictionPanel" v-if="responseStatus === 200">
    <h3>Primary Prediction</h3>
    <p>Player Name: <strong>{{ responseData.player_name }}</strong></p>
    <p>Prediction: <strong>{{ responseData.prediction_label.replace(/_/g, " ") }}</strong></p>
    <p>Confidence: <strong>{{ `${(responseData.prediction_confidence * 100).toFixed(2)}%` }}</strong></p>

    <h3>Prediction Breakdown</h3>
    <div id="predictionsBreakdown">
      <p v-for="(prediction, key) in orderdPredictions">{{ key.toString().replace(/_/g, " ") }}: <strong>{{ `${(prediction * 100).toFixed(2)}%` }}</strong></p>
    </div>
    
  </section>
</template>

<script lang="ts">
import axios, { type AxiosResponse } from "axios";
import _ from "lodash";

interface PredictionBreakdown {
    Real_Player: number,
    PVM_Melee_bot: number,
    Smithing_bot: number,
    Magic_bot: number,
    Fishing_bot: number,
    Mining_bot: number,
    Crafting_bot: number,
    PVM_Ranged_Magic_bot: number,
    PVM_Ranged_bot: number,
    Hunter_bot: number,
    Fletching_bot: number,
    Clue_Scroll_bot: number,
    LMS_bot: number,
    Agility_bot: number,
    Wintertodt_bot: number,
    Runecrafting_bot: number,
    Zalcano_bot: number,
    Woodcutting_bot: number,
    Thieving_bot: number,
    Soul_Wars_bot: number,
    Cooking_bot: number,
    Vorkath_bot: number,
    Barrows_bot: number,
    Herblore_bot: number,
    Unknown_bot: number
  }

interface Response {
  player_name: String;
  player_id: number;
  prediction_confidence: number;
  prediction_label: String;
  predictions_breakdown: PredictionBreakdown;
}

export default {
  name: "Home",
  components: {},
  computed: {
    console: () => console,
    orderdPredictions() {
      return _(this.responseData.predictions_breakdown)
        .toPairs()
        .orderBy([1], ['desc'])
        .fromPairs()
        .value();
    }
  },
  data: () => ({
    selectedRSN: "",
    responseStatus: 0,
    isAwaitingResponse: false,
    playerName: "",
    responseData: {} as Response
  }),
  methods: {
    setAccountInformation: function (response: AxiosResponse<Response>) {
      this.responseData = response.data;
    },
    getAccountInformation: function () {
      this.isAwaitingResponse = true;
      axios
        .get(
          import.meta.env.VITE_API_URL + "/v1/prediction?name=" +
            this.selectedRSN
        )
        .then((response) => {
          this.responseStatus = response.status;
          this.setAccountInformation(response);
          this.isAwaitingResponse = false;
          this.selectedRSN = ""
        })
        .catch((error) => {
          this.responseStatus = error.response.status;
          this.playerName = this.selectedRSN;
          this.selectedRSN = ""
          console.error(error.message);
          this.isAwaitingResponse = false;
        });
    },
  },
};
</script>

<style scoped lang="scss">
#predictionPanel {
  line-height: 1;

  p {
    margin: 0;
  }

  #predictionsBreakdown {
    @media screen and (min-width: 480px) {
      column-count: 2;
    }
    
    p {
      display: flex;
      justify-content: space-between;
      padding: 0 0.5rem;

      &:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    
  }
}

form {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin: 0.25rem auto;
    flex: 0 0 auto;
    width: max-content;

    &[type="text"] {
      padding: 0.25rem;
    }
  }
}
</style>
