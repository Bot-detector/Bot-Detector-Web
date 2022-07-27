<script setup lang="ts">
import Heading, { IMAGE_DISPLAY } from "@/components/Heading.vue";
import { useBotDetectorApiStore } from "@/stores/apiStore";
import { replaceUnderscoreWithSpace, toPercentage } from "@/utils";

const botDetectorApiStore = useBotDetectorApiStore();
</script>

<template>
  <Heading
    title="Account Search"
    imageSource="/images/GameAssets/runefullhelm.png"
    :imageDisplay="IMAGE_DISPLAY.reversedMirrored"
  />
  <p>
    If you would like to learn more about an Old School Runescape account, type
    in the name below. We cannot provide information with 24 hours of a sighting
    of a player, therefore we cannot provide latest locations and latest gear
    information for an account.
  </p>

  <hr />

  <form @submit.prevent="botDetectorApiStore.getAccountInformation()">
    <label for="rsn">Account Name </label>
    <!-- maxlengt=12 -->
    <input
      id="rsn"
      type="text"
      required
      minlength="1"
      v-model="botDetectorApiStore.selectedRSN"
      placeholder="Enter account name here"
    />
    <input type="submit" value="Lookup" />
  </form>

  <section v-if="botDetectorApiStore.isAwaitingResponse">
    Fetching data...
  </section>

  <section v-if="botDetectorApiStore.isReponseStatusNotFound">
    <p>
      <strong>{{ botDetectorApiStore.playerName }} </strong> - Player not found.
    </p>
  </section>

  <section id="predictionPanel" v-if="botDetectorApiStore.isResponseStatusOk">
    <h3>Primary Prediction</h3>
    <p>
      Player Name:
      <strong>{{ botDetectorApiStore.responseData.player_name }}</strong>
    </p>
    <p>
      Prediction:
      <strong>{{ botDetectorApiStore.getPredictionNameCleaned }}</strong>
    </p>
    <p>
      Confidence:
      <strong>{{ botDetectorApiStore.getPredictionConfidence }}</strong>
    </p>

    <h3>Prediction Breakdown</h3>
    <div id="predictionsBreakdown">
      <p
        v-for="(prediction, key) in botDetectorApiStore.orderdPredictions"
        :key="key"
      >
        {{ replaceUnderscoreWithSpace(key.toString()) }}:
        <strong>{{ toPercentage(prediction) }}</strong>
      </p>
    </div>
  </section>
</template>

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
