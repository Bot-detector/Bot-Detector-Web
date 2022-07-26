<script setup lang="ts">
  import Heading from "@/components/Heading.vue";
  import SubHeading from "@/components/SubHeading.vue";
  import Role, { RANK } from "@/components/Role.vue";
  import ExternalLink from "@/components/ExternalLink.vue";
  import Socials, { SOCIAL } from "@/components/Socials.vue";
  import { useConfigStore } from "@/stores/configStore";

  const configStore = useConfigStore();
  configStore.getPatreons();

  const isArrayEmpty = (arr: Array<any>) => arr.length === 0;
</script>

<template>
    <Heading 
      title="Contributors and Supporters" 
      imageSource="src/assets/images/GameAssets/coins.png"
    />

    <p>
      The Bot Detector Plugin is an open-source plugin with many highly-dedicated supporters and contributors. Some notable members of the community have been listed below, and are added on a manual basis. If you would like to support the production of the plugin, you can donate to our <Socials :social="SOCIAL.Patreon" />, or you can join our <Socials :social="SOCIAL.Github" />
    </p>

    <hr />

    <SubHeading 
        title="Contributors"
        imageSource="src/assets/images/Clan_icons/House.png"
    />

    <Role 
        :rank="RANK.Owner"
    />
    <p>Ferrariic</p>

    <Role 
        :rank="RANK.CoOwner" 
        
    />
    <p>Seltzer Bro, extreme4all, Cyborger1</p>

    <Role 
        :rank="RANK.JagexMod" 
    />
    <p>Mod Trident, Mod Tyran, Mod Twisted</p>

    <hr />

    <SubHeading
        title="Community Moderators"
        imageSource="src/assets/images/Clan_icons/Shield.png"
    />

    <Role 
        :rank="RANK.ModTier4" 
    />
    <p>Lier52</p>
        
    <Role 
        :rank="RANK.ModTier3" 
    />
    <p>Anthony - Some Ranger, ArcaneStars, Candys Skill, Jair, Justproman</p>

    <Role 
        :rank="RANK.ModTier2" 
    />
    <p>7 7 mafia, AlisaWhiteheart, cactus, CreamOfTheCrop, Drew, esc | Keywok, Hydra, LuigiStyl, PigeNug, SoloContent</p>

    <Role 
        :rank="RANK.ModTier1" 
    />
    <p>Not Sentry</p>

    <hr />

    <SubHeading 
        title="Patreon Supporters"
        imageSource="src/assets/images/Clan_icons/Bank.png"
    />

    <Role 
        :rank="RANK.PatreonDragonBotHunters" 
    />
    <p v-if="!isArrayEmpty(configStore.DragonBotHunter)">{{ configStore.DragonBotHunter.join(", ") }} </p>
    <p v-if="isArrayEmpty(configStore.DragonBotHunter)">
    <ExternalLink 
        to="https://www.patreon.com/bot_detector"
    >
    [This slot could be yours!]
    </ExternalLink>
    </p>
    

    <Role 
        :rank="RANK.PatreonRuneBotHunters" 
    />
    <p v-if="!isArrayEmpty(configStore.RuneBotHunter)">{{ configStore.RuneBotHunter.join(", ") }} </p>
    <p v-if="isArrayEmpty(configStore.RuneBotHunter)">
    <ExternalLink 
        to="https://www.patreon.com/bot_detector"
    >
    [This slot could be yours!]
    </ExternalLink>
    </p>

    <Role 
        :rank="RANK.PatreonAdamantBotHunters" 
    />
    <p v-if="!isArrayEmpty(configStore.AdamantBotHunter)">{{ configStore.AdamantBotHunter.join(", ") }} </p>
    <p v-if="isArrayEmpty(configStore.AdamantBotHunter)">
    <ExternalLink 
        to="https://www.patreon.com/bot_detector"
    >
    [This slot could be yours!]
    </ExternalLink>
    </p>

    <Role 
        :rank="RANK.PatreonMithrilBotHunters" 
    />
    <p v-if="!isArrayEmpty(configStore.MithrilBotHunter)">{{ configStore.MithrilBotHunter.join(", ") }} </p>
    <p v-if="isArrayEmpty(configStore.MithrilBotHunter)">
    <ExternalLink 
        to="https://www.patreon.com/bot_detector"
    >
    [This slot could be yours!]
    </ExternalLink>
    </p>

    <Role 
        :rank="RANK.PatreonSteelBotHunters" 
    />
    <p v-if="!isArrayEmpty(configStore.SteelBotHunter)">{{ configStore.SteelBotHunter.join(", ") }} </p>
    <p v-if="isArrayEmpty(configStore.SteelBotHunter)">
    <ExternalLink 
        to="https://www.patreon.com/bot_detector"
    >
    [This slot could be yours!]
    </ExternalLink>
    </p>

    <Role 
        :rank="RANK.PatreonIronBotHunters" 
    />
    <p v-if="!isArrayEmpty(configStore.IronBotHunter)">{{ configStore.IronBotHunter.join(", ") }} </p>
    <p v-if="isArrayEmpty(configStore.IronBotHunter)">
    <ExternalLink 
        to="https://www.patreon.com/bot_detector"
    >
    [This slot could be yours!]
    </ExternalLink>
    </p>
    
    <Role 
        :rank="RANK.PatreonBronzeBotHunters" 
    />
    <p v-if="!isArrayEmpty(configStore.BronzeBotHunter)">{{ configStore.BronzeBotHunter.join(", ") }} </p>
    <p v-if="isArrayEmpty(configStore.BronzeBotHunter)">
    <ExternalLink 
        to="https://www.patreon.com/bot_detector"
    >
    [This slot could be yours!]
    </ExternalLink>
    </p>

    <Role 
        :rank="RANK.PatreonStarterBotHunters" 
    />
    <p v-if="!isArrayEmpty(configStore.starterBotHunter)">{{ configStore.starterBotHunter.join(", ") }} </p>
    <p v-if="isArrayEmpty(configStore.starterBotHunter)">
    <ExternalLink 
        to="https://www.patreon.com/bot_detector"
    >
    [This slot could be yours!]
    </ExternalLink>
    </p>
</template>