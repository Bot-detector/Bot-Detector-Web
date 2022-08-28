import { defineStore, } from "pinia";
import axios, { type AxiosResponse } from "axios";
import _ from "lodash";
import type {
  BotDetectorApiResponse,
  BotDetectorApiStore,
  BotDetectorApiPredictionBreakdownResponse,
  PatreonApiStore,
  RuneLiteApiRespose,
  RuneLiteStore,
} from "@/interfaces/ApiInterface";
import type{ IConfigStore } from "@/interfaces/ConfigInterface";
import { replaceUnderscoreWithSpace, toPercentage } from "@/utils";
import { useConfigStore } from "@/stores/configStore";

let configStore: undefined | IConfigStore;

// see https://docs.patreon.com/?javascript=#get-api-oauth2-v2-campaigns-campaign_id-members=
export const usePatreonStore = defineStore({
  id: "patreonApiStore",
  state: () =>
    ({
      members: [],
    } as PatreonApiStore),
  getters: {
    getMembersFromTier: (state) =>
      state.members.filter((member) => member.tier),
  },
  actions: {},
});

export const useRuneLiteStore = defineStore({
  id: "runeLiteApiStore",
  state: () =>
    ({
      totalInstalls: 0,
    } as RuneLiteStore),
  getters: {
    getTotalInstalls: (state) =>
      state.totalInstalls === 0 ? "Failed getting stats." : state.totalInstalls,
  },
  actions: {
    setProjectStats: function (response: AxiosResponse<RuneLiteApiRespose>) {
      this.totalInstalls = response.data["bot-detector"];
    },
    getProjectStats: function () {
      if(!configStore) {
        configStore = useConfigStore();
        configStore.getApi();
      }

      const API_URL = configStore.api.runeLite;
      if (!API_URL) return console.error("Could not load runelite api url from config", configStore.api.runeLite)
      
      axios
        .get(API_URL)
        .then((response) => this.setProjectStats(response))
        .catch((error) => console.error(error));
    },
  },
});

export const useBotDetectorApiStore = defineStore({
  id: "botDetectorApiStore",
  state: () =>
    ({
      totalBans: 0,
      totalAccounts: 0,
      totalPlayers: 0,
      selectedRSN: "",
      responseStatus: 0,
      isAwaitingResponse: false,
      playerName: "",
      responseData: {} as BotDetectorApiPredictionBreakdownResponse,
      botDetectorApiUrl: ""
    } as BotDetectorApiStore),
  getters: {
    isReponseStatusNotFound: (state) => state.responseStatus === 404,
    isResponseStatusOk: (state) => state.responseStatus === 200,
    orderdPredictions: (state) => {
      return _(state.responseData.predictions_breakdown)
        .toPairs()
        .orderBy([1], ["desc"])
        .fromPairs()
        .value();
    },
    getPredictionNameCleaned: (state) =>
      replaceUnderscoreWithSpace(state.responseData.prediction_label),
    getPredictionConfidence: (state) =>
      toPercentage(state.responseData.prediction_confidence),
  },
  actions: {
    setBanStats: function (response: AxiosResponse<BotDetectorApiResponse>) {
      this.totalBans = Number(response.data["total_bans"]);
      this.totalAccounts = Number(response.data["total_accounts"]);
      this.totalPlayers = Number(response.data["total_real_players"]);
    },
    getProjectStats: function () {
      if(!configStore) {
        configStore = useConfigStore();
        configStore.getApi();
      }

      const API_URL = configStore.api.botDetector;
      if (!API_URL) return console.error("Could not load runelite api url from config", configStore.api.botDetector)
      axios
        .get(`${API_URL}/site/dashboard/projectstats`, {
          headers: {
            accept: "application/json",
          },
        })
        .then((response) => this.setBanStats(response))
        .catch((error) => console.error(error));
    },
    setAccountInformation: function (
      response: AxiosResponse<BotDetectorApiPredictionBreakdownResponse>
    ) {
      this.responseData = response.data;
    },
    getAccountInformation: function () {
      if(!configStore) {
        configStore = useConfigStore();
        configStore.getApi();
      }

      const API_URL = configStore.api.botDetector;
      if (!API_URL) return console.error("Could not load runelite api url from config", configStore.api.botDetector);

      this.isAwaitingResponse = true;
      axios
        .get(
          `${API_URL}/v1/prediction?name=${this.selectedRSN}`
        )
        .then((response) => {
          this.responseStatus = response.status;
          this.setAccountInformation(response);
          this.isAwaitingResponse = false;
          this.selectedRSN = "";
        })
        .catch((error) => {
          this.responseStatus = error.response.status;
          this.playerName = this.selectedRSN;
          this.selectedRSN = "";
          console.error(error.message);
          this.isAwaitingResponse = false;
        });
    },
  },
});
