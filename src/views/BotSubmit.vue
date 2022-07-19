<template>
  <v-container>
    <div id="form-container">
      <v-form>
        <v-text-field
          v-model="token"
          label="Token"
          @blur="$v.token.$touch()"
          required
        ></v-text-field>

        <div class="error" v-if="$v.token.$dirty ? !$v.token.required : null">
          You must provide an authorization token.
        </div>

        <v-select
          v-model="selectedLabel"
          :items="labels"
          label="Label"
          item-text="label"
          item-value="id"
          dense
        ></v-select>

        <v-textarea
          clearable
          clear-icon="mdi-close-circle"
          v-model="playersBox"
          label="Names to Submit. One name per line, please!"
        ></v-textarea>

        <v-radio-group v-model="areBots" row>
          <v-radio label="Bots" value="1"></v-radio>
          <v-radio label="Not Bots" value="0"></v-radio>
        </v-radio-group>

        <div class="error" v-if="!$v.areBots.between">
          Please select whether or not the above players are bots.
        </div>

        <br />

        <v-btn color="success" class="mr-4" @click="submitForm"> Submit </v-btn>
      </v-form>
    </div>

    <br />
    <v-divider></v-divider>
    <v-overlay :opacity="0.5" :value="overlay">
      <v-progress-circular indeterminate size="128">
        Bustin' Bots
      </v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, between } from "@vuelidate/validators";

import axios from "axios";

export default {
  name: "BotSubmit",
  setup () {
    return { v$: useVuelidate() }
  },
  data: function () {
    return {
      token: "",
      players: [],
      labels: [],
      areBots: 0,
      playersBox: [],
      resultText: "",
      overlay: false,
      selectedLabel: null,
    };
  },
  validations: {
    token: {
      required,
    },
    areBots: {
      between: between(0, 1),
    },
  },
  mounted() {
    this.overlay = false;
    this.getLabels();
  },
  computed: {
    console: () => console,
  },
  methods: {
    async submitForm() {
      const url = this.getEndpoint();
      const data = this.packageData();

      this.overlay = true;

      await axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.clearPlayersBox();
          this.overlay = false;
        })
        .catch((error) => {
          alert(error);
          this.overlay = false;
        });
    },
    async getLabels() {
      const url =
        import.meta.env.VITE_API_URL +"/labels/get_player_labels";

      await axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.labels = response.data;
        })
        .catch((error) => {
          alert(error);
        });
    },

    packageData: function () {
      this.getPlayersList();

      const data = new Object();
      data.bot = this.areBots;
      data.label = this.selectedLabel;
      data.names = this.players;

      console.log(JSON.stringify(data));

      return JSON.stringify(data);
    },
    getPlayersList: function () {
      this.players = this.playersBox.split("\n");
    },
    getEndpoint: function () {
      let endpoint = import.meta.env.VITE_API_URL + "/site/verify/";

      if (this.token.length > 0) {
        endpoint += this.token;
      }

      return endpoint;
    },
    clearPlayersBox: function () {
      this.playersBox = "";
    },
  },
};
</script>

<style scoped>
#form {
  margin: auto;
  width: fit-content;
}
</style>
