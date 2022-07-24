<script setup lang="ts">
  import Heading from "@/components/Heading.vue";
  import SubHeading from "@/components/SubHeading.vue";
  import Role, { RANK } from "@/components/Role.vue";
  import ExternalLinkVue from "@/components/ExternalLink.vue";
  import Socials, { SOCIAL } from "@/components/Socials.vue";
import ExternalLink from "../components/ExternalLink.vue";
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
    <p>DevinDog</p>

    <Role 
        :rank="RANK.PatreonRuneBotHunters" 
    />
    <p>
        <ExternalLink 
            to="https://www.patreon.com/bot_detector"
        >
        [This slot could be yours!]
        </ExternalLink>
    </p>

    <Role 
        :rank="RANK.PatreonAdamantBotHunters" 
    />
    <p>Sallysal, Rhikalika</p>

    <Role 
        :rank="RANK.PatreonMithrilBotHunters" 
    />
    <p>Gottfrid, § Rambo, Ratteo, someranger, 117, PigeonNugget</p>

    <Role 
        :rank="RANK.PatreonSteelBotHunters" 
    />
    <p>Sophlin, SeltzerBro, RoopeK, Richard Andrew</p>

    <Role 
        :rank="RANK.PatreonIronBotHunters" 
    />
    <p>7 7 7 7, AchromiK, Slappious, iamguard, TayyabPW, Snackal, Gunillion, Lewdy, CreamOfTheCrop, gllt, ryry3003, VRM, Zephinism, Python, cactus, BlueSavior, Adam, Iamdrew, Isaac Shevenell, Haleigh, EL_DEE , Infinitykill, Cody , RadioActiveYeti</p>
    
    <Role 
        :rank="RANK.PatreonBronzeBotHunters" 
    />
    <p>Lexiii223, Zirhaze, Lisa Leese (She/They), Arcane, Seatball Mub, rasmus godske, Cortunix, Beeeooop, louis, Vis, oBIGRON, Amon Havers, Posti, Foxo, sarunas knabikas, Hex</p>

    <Role 
        :rank="RANK.PatreonStarterBotHunters" 
    />
    <p>shaGGyTZ, Attilatheguy, mciurlionis, cykaking187, Claudio Dekker, JMoney, Not Goode, Hach, Heklek, Jair, Dennozs, grimsli, Poltergeist, Toastface5, samurai_pr, Springstof, LadyAleksandra, 3Pills, Gertoni Macaroni, Kryllo, RiverRogue, Basti, Infernus, Winning, Hairyngross, Fazel, Jules, Nechtmarrie, Anthony Perez, Anon4777, schulz, iliketostayanonymous, breakthetargets, Nostalgia, Darkpi, Thor, Sasha, val, Caboose700, KuhlGuy, FRED, AgelessOverkill, Caldo dpollo, No Ego, Daniël Roek, MyCrowSoft, Faremir , Beasst , Billy Hunt, Nicholas Earley, Joe Stoica, Tez, Dawnsnite, MrFoxyCracker, racklord, logan10144, fitchett, 7 7 mafia, Jax, Born2Grind, Core, Oondin, Damply, carpetcleaner, tylersandman, Jojy, Lag, Pyrotic, ify, pxjx, Icarus, Hotsaucesam, LookingForPants, Sentry, Oosterbuur</p>
</template>