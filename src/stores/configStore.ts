import { defineStore } from "pinia";
import Patreons from "@/config/patreons.json";

interface ConfigStore {
    starterBotHunter: String[];
    BronzeBotHunter: String[];
    IronBotHunter: String[];
    SteelBotHunter: String[];
    MithrilBotHunter: String[];
    AdamantBotHunter: String[];
    RuneBotHunter: String[];
    DragonBotHunter: String[];
}

export const useConfigStore = defineStore({
    id: "configStore",
    state: () => ({
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
      getPatreons: function() {
        this.starterBotHunter = Patreons.StarterBotHunter;
        this.BronzeBotHunter = Patreons.BronzeBotHunter;
        this.IronBotHunter = Patreons.IronBotHunter;
        this.SteelBotHunter = Patreons.SteelBotHunter;
        this.MithrilBotHunter = Patreons.MithrilBotHunter;
        this.AdamantBotHunter = Patreons.AdamantBotHunter;
        this.RuneBotHunter = Patreons.RuneBotHunter;
        this.DragonBotHunter = Patreons.DragonBotHunter;
      }
    },
  });