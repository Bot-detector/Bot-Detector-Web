
export interface PatreonTier {
    StarterBotHunter: String;
    BronzeBotHunter: String;
    IronBotHunter: String;
    SteelBotHunter: String;
    MithrilBotHunter: String;
    AdamantBotHunter: String;
    RuneBotHunter: String;
    DragonBotHunter: String;
}

export interface PatreonMember {
    name: String;
    tier: PatreonTier;
}

export interface PatreonApiStore {
    members: PatreonMember[]
}

export interface RuneLiteApiRespose {
    "bot-detector": number,
    [key: string]: number;
}

export interface RuneLiteStore {
    totalInstalls: number;
}

export interface BotDetectorApiResponse {
    total_bans: String;
    total_accounts: String;
    total_real_players: String;
}
  
export interface BotDetectorApiStore {
    totalBans: number;
    totalAccounts: number;
    totalPlayers: number;
    selectedRSN: String,
    responseStatus: number,
    isAwaitingResponse: Boolean,
    playerName: String,
    responseData: BotDetectorApiPredictionBreakdownResponse
}

export interface BotDetectorApiPredictionBreakdown {
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

export interface BotDetectorApiPredictionBreakdownResponse {
    player_name: String;
    player_id: number;
    prediction_confidence: number;
    prediction_label: String;
    predictions_breakdown: BotDetectorApiPredictionBreakdown;
  }