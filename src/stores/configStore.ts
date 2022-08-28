import { defineStore } from "pinia";
import config from "@/config/config.yaml";
import type { ConfigStore } from "@/interfaces/ConfigInterface";

export const useConfigStore = defineStore({
  id: "configStore",
  state: () =>
    ({
      api: {
        botDetector: "",
        runeLite: ""
      },
      starterBotHunter: [],
      BronzeBotHunter: [],
      IronBotHunter: [],
      SteelBotHunter: [],
      MithrilBotHunter: [],
      AdamantBotHunter: [],
      RuneBotHunter: [],
      DragonBotHunter: [],
    } as ConfigStore),
  actions: {
    getApi: function() {
      this.api.botDetector = config.api.botDetector;
      this.api.runeLite = config.api.runeLite
    },
    getPatreons: function () {
      this.starterBotHunter = config.data.patreons.StarterBotHunter || [];
      this.BronzeBotHunter = config.data.patreons.BronzeBotHunter || [];
      this.IronBotHunter = config.data.patreons.IronBotHunter || [];
      this.SteelBotHunter = config.data.patreons.SteelBotHunter || [];
      this.MithrilBotHunter = config.data.patreons.MithrilBotHunter || [];
      this.AdamantBotHunter = config.data.patreons.AdamantBotHunter || [];
      this.RuneBotHunter = config.data.patreons.RuneBotHunter || [];
      this.DragonBotHunter = config.data.patreons.DragonBotHunter || [];
    },
  },
});
