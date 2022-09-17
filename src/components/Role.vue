<script setup lang="ts">
import type { PropType } from "vue";
</script>

<template>
  <header>
    <strong>
      <img class="headerImg" :src="ranks[rank].imageSource" />
      {{ rank }}
    </strong>
  </header>
</template>

<script lang="ts">
export enum RANK {
  Owner = "Owner",
  DiscordStaff = "Discord Staff",
  JagexMod = "Jagex Moderators",
  VerificationStaff = "Verification Staff",
  Mods = "Mods",
  PatreonDragonBotHunters = "Dragon Bot Hunter",
  PatreonRuneBotHunters = "Rune Bot Hunter",
  PatreonAdamantBotHunters = "Adamant Bot Hunter",
  PatreonMithrilBotHunters = "Mithril Bot Hunter",
  PatreonSteelBotHunters = "Steel Bot Hunter",
  PatreonIronBotHunters = "Iron Bot Hunter",
  PatreonBronzeBotHunters = "Bronze Bot Hunter",
  PatreonStarterBotHunters = "Starter Bot Hunter",
}

const ranks = {
  [RANK.Owner]: {
    imageSource: "/images/Clan_icons/Owner.png",
  },
  [RANK.JagexMod]: {
    imageSource: "/images/Clan_icons/Jmod.png",
  },
  [RANK.DiscordStaff]: {
    imageSource: "/images/Clan_icons/Deputy_owner.png",
  },
  [RANK.VerificationStaff]: {
    imageSource: "/images/Clan_icons/t1.png",
  },
  [RANK.Mods]: {
    imageSource: "/images/Clan_icons/t4.png",
  },
  [RANK.PatreonDragonBotHunters]: {
    imageSource: "/images/Clan_icons/Dragon.png",
  },
  [RANK.PatreonRuneBotHunters]: {
    imageSource: "/images/Clan_icons/Rune.png",
  },
  [RANK.PatreonAdamantBotHunters]: {
    imageSource: "/images/Clan_icons/Adamant.png",
  },
  [RANK.PatreonMithrilBotHunters]: {
    imageSource: "/images/Clan_icons/Mithril.png",
  },
  [RANK.PatreonSteelBotHunters]: {
    imageSource: "/images/Clan_icons/Steel.png",
  },
  [RANK.PatreonIronBotHunters]: {
    imageSource: "/images/Clan_icons/Iron.png",
  },
  [RANK.PatreonBronzeBotHunters]: {
    imageSource: "/images/Clan_icons/Bronze.png",
  },
  [RANK.PatreonStarterBotHunters]: {
    imageSource: "/images/Clan_icons/Skulled.png",
  },
};

export default {
  props: {
    rank: {
      type: String as PropType<RANK>,
      required: true,
    },
  },
  data() {
    return RANK;
  },
};
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
