<script setup lang="ts">
import type { PropType } from "vue";
</script>

<template>
    <header>
        <strong>
            <img
            class="headerImg"
            :src="imageSrc"
            />
            {{ rank }}
        </strong>
    </header>
</template>

<script lang="ts">
export enum RANK {
    Owner = "Owner", 
    CoOwner = "Co-Owners",
    JagexMod = "Jagex Moderators",
    ModTier4 = "Tier 4",
    ModTier3 = "Tier 3",
    ModTier2 = "Tier 2",
    ModTier1 = "Tier 1",
    PatreonDragonBotHunters = "Dragon Bot Hunter",
    PatreonRuneBotHunters = "Rune Bot Hunter",
    PatreonAdamantBotHunters = "Adamant Bot Hunter",
    PatreonMithrilBotHunters = "Mithril Bot Hunter",
    PatreonSteelBotHunters = "Steel Bot Hunter",
    PatreonIronBotHunters = "Iron Bot Hunter",
    PatreonBronzeBotHunters = "Bronze Bot Hunter",
    PatreonStarterBotHunters = "Starter Bot Hunter"
}


export default {
  props: {
    rank: {
        type: String as PropType<RANK>,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
  },
  data() {
    return RANK
  }
}
</script>

<style scoped lang="scss">
    strong {
        display: flex;
        align-items: center;
    }
    
    img {
        width: 20px;
        margin-right: 0.5rem;
    }
</style>