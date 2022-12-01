<script setup lang="ts">
import Heading from "@/components/Heading.vue";
import SubHeading from "@/components/SubHeading.vue";
import Role, { RANK } from "@/components/Role.vue";
import ExternalLink from "@/components/ExternalLink.vue";
import Socials, { SOCIAL } from "@/components/Socials.vue";
import { owners, jagexModerators, discordStaff, verificationStaff, patreonDragonBotHunters, patreonRuneBotHunters, patreonAdamantBotHunters, patreonMithrilBotHunters, patreonSteelBotHunters, patreonIronBotHunters, patreonBronzeBotHunters, patreonStarterBotHunters } from "@/contributers";

const isArrayEmpty = (arr: Array<unknown>) => arr.length === 0;
</script>

<template>
  <Heading
    title="Contributors and Supporters"
    imageSource="/images/GameAssets/coins.png"
  />
  <p>
    The Bot Detector Plugin is an open-source plugin with many highly-dedicated
    supporters and contributors. Some notable members of the community have been
    listed below, and are added on a manual basis. If you would like to support
    the production of the plugin, you can donate to our
    <Socials :social="SOCIAL.Patreon" />, or you can join our
    <Socials :social="SOCIAL.Github" />
  </p>
  <hr />
  <SubHeading title="Contributors" imageSource="/images/Clan_icons/House.png" />
  
  <Role :rank="RANK.Owner" />
  <p>{{ owners.join(", ") }}</p>
  
  <Role :rank="RANK.JagexMod" />
  <p>{{ jagexModerators.join(", ") }}</p>
  <hr />
  <SubHeading
    title="Community Moderators"
    imageSource="/images/Clan_icons/Shield.png"
  />
  
  <Role :rank="RANK.DiscordStaff" />
  <p>{{ discordStaff.join(", ") }}</p>
  <Role :rank="RANK.VerificationStaff" />
  <p>{{ verificationStaff.join(", ") }}</p>
  <hr />
  <SubHeading
    title="Patreon Supporters"
    imageSource="/images/Clan_icons/Bank.png"
  />
  
  <Role :rank="RANK.PatreonDragonBotHunters" />
  <p v-if="!isArrayEmpty(patreonDragonBotHunters)">
    <p>
      {{ patreonDragonBotHunters.join(", ") }}
    </p>
  </p>
  <p v-if="isArrayEmpty(patreonDragonBotHunters)">
    <ExternalLink to="https://www.patreon.com/bot_detector">
      [This slot could be yours!]
    </ExternalLink>
  </p>

  <Role :rank="RANK.PatreonRuneBotHunters" />
  <p v-if="!isArrayEmpty(patreonRuneBotHunters)">
    {{ patreonRuneBotHunters.join(", ") }}
  </p>
  <p v-if="isArrayEmpty(patreonRuneBotHunters)">
    <ExternalLink to="https://www.patreon.com/bot_detector">
      [This slot could be yours!]
    </ExternalLink>
  </p>

  <Role :rank="RANK.PatreonAdamantBotHunters" />
  <p v-if="!isArrayEmpty(patreonAdamantBotHunters)">
    {{ patreonAdamantBotHunters.join(", ") }}
  </p>
  <p v-if="isArrayEmpty(patreonAdamantBotHunters)">
    <ExternalLink to="https://www.patreon.com/bot_detector">
      [This slot could be yours!]
    </ExternalLink>
  </p>

  <Role :rank="RANK.PatreonMithrilBotHunters" />
  <p v-if="!isArrayEmpty(patreonMithrilBotHunters)">
    {{ patreonDragonBotHunters.join(", ") }}
  </p>
  <p v-if="isArrayEmpty(patreonMithrilBotHunters)">
    <ExternalLink to="https://www.patreon.com/bot_detector">
      [This slot could be yours!]
    </ExternalLink>
  </p>

  <Role :rank="RANK.PatreonSteelBotHunters" />
  <p v-if="!isArrayEmpty(patreonSteelBotHunters)">
    {{ patreonSteelBotHunters.join(", ") }}
  </p>
  <p v-if="isArrayEmpty(patreonSteelBotHunters)">
    <ExternalLink to="https://www.patreon.com/bot_detector">
      [This slot could be yours!]
    </ExternalLink>
  </p>

  <Role :rank="RANK.PatreonIronBotHunters" />
  <p v-if="!isArrayEmpty(patreonIronBotHunters)">
    {{ patreonIronBotHunters.join(", ") }}
  </p>
  <p v-if="isArrayEmpty(patreonIronBotHunters)">
    <ExternalLink to="https://www.patreon.com/bot_detector">
      [This slot could be yours!]
    </ExternalLink>
  </p>

  <Role :rank="RANK.PatreonBronzeBotHunters" />
  <p v-if="!isArrayEmpty(patreonBronzeBotHunters)">
    {{ patreonBronzeBotHunters.join(", ") }}
  </p>
  <p v-if="isArrayEmpty(patreonBronzeBotHunters)">
    <ExternalLink to="https://www.patreon.com/bot_detector">
      [This slot could be yours!]
    </ExternalLink>
  </p>

  <Role :rank="RANK.PatreonStarterBotHunters" />
  <p v-if="!isArrayEmpty(patreonStarterBotHunters)">
    {{ patreonStarterBotHunters.join(", ") }}
  </p>
  <p v-if="isArrayEmpty(patreonStarterBotHunters)">
    <ExternalLink to="https://www.patreon.com/bot_detector">
      [This slot could be yours!]
    </ExternalLink>
  </p>
</template>
