import type { Store } from "pinia";

export interface ConfigStore {
    api: {
        botDetector: string;
        runeLite: string;
    }
    starterBotHunter: string[];
    BronzeBotHunter: string[];
    IronBotHunter: string[];
    SteelBotHunter: string[];
    MithrilBotHunter: string[];
    AdamantBotHunter: string[];
    RuneBotHunter: string[];
    DragonBotHunter: string[];
}

export type IConfigStore = Store<"configStore", ConfigStore, {}, {
    getApi: () => void;
    getPatreons: () => void;
}>