<template>
  <v-container >
    <div id="form-container">
      <v-form>

        <v-text-field
          v-model="token"
          label="Token"
          @blur="$v.token.$touch()"
          required
        ></v-text-field>

        <div class="error" v-if="$v.token.$dirty ? !$v.token.required: null">You must provide an authorization token.</div>

        <v-text-field
          v-model="label"
          label="Label"
          @blur="$v.label.$touch()"
        ></v-text-field>

        <div class="error" v-if="$v.label.$dirty ? !$v.label.isValidLabel: null">Label must be an integer.</div>

        <v-textarea
          clearable
          clear-icon="mdi-close-circle"
          v-model="playersBox"
          label="Names to Submit. One name per line, please!"
        ></v-textarea>

        <v-radio-group
          v-model="areBots"
          row
        >
          <v-radio
            label="Bots"
            value=1
          ></v-radio>
          <v-radio
            label="Not Bots"
            value=0
          ></v-radio>
          </v-radio-group>

          <div class="error" v-if="!$v.areBots.between">Please select whether or not the above players are bots.</div>

          <br />

        <v-btn
          color="success"
          class="mr-4"
          @click="submitForm"
        >
        Submit
        </v-btn>

      </v-form>
    </div>

    <br/>
    <v-divider></v-divider>

  </v-container>
</template>

<script>
  import { required, between } from 'vuelidate/lib/validators';
  
  import axios from 'axios';

  export default {

    name: 'BotSubmit',
    data: function() {
      return {
        token: "",
        label: "",
        players: [],
        areBots: 0,
        playersBox: [],
        resultText: "",
      }
    },
    validations: {
      token: {
        required
      },
      areBots: {
        between: between(0,1)
      },
      label: {
        isValidLabel() {
          if(this.label.match(/^[0-9]+$/)) {
            return true;
          }else{
            return false;
          }
        }
      },
    },
    mounted () {

    },
    computed: {
      console: () => console,
    },
    methods: {
      async submitForm () {

        var url = this.getEndpoint();
        var data = this.packageData();

        await axios.post(url, data, {
          headers: {
            'Content-Type': 'application/json',
          }
        })      
        .then((response) => {
          console.log(response.data)
          this.clearPlayersBox()
        })
        .catch((error) => {
            alert(error)
        })
      },
      
      packageData: function() {

        this.getPlayersList();

        var data = new Object();
          data.bot = this.areBots;
          data.label = this.label;
          data.names = this.players

          console.log(JSON.stringify(data));

        return JSON.stringify(data);
          
      },
      getPlayersList: function() {
        this.players = this.playersBox.split('\n')
      },
      getEndpoint: function() {
        var endpoint = "https://www.osrsbotdetector.com/api/site/verify/"

        if(this.token.length > 0) {
          endpoint += this.token
        }

        return endpoint

      },
      clearPlayersBox: function() {
          this.playersBox = "";
      },
    }
  }
</script>

<style lang="scss">
  @import '../../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
</style>

<style scoped>

  #form {
    margin: auto;
    width: fit-content; 
    
  }
</style>
