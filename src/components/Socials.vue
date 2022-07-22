<script setup lang="ts">
import ExternalLink from '@/components/ExternalLink.vue';
import type { PropType } from 'vue';
</script>

<template>
    <ExternalLink :to="socials[social]" :label="displaySocial(social, displayType)"/>
</template>

<script lang="ts">
export enum SOCIAL {
    Discord = "Discord",
    Twitter = "Twitter",
    Patreon = "Patreon",
    Github = "Github"
}

export enum DISPLAYTYPE {
    Label = "label",
    FullName = "fullName",
    Link= "link"
}


const socials = {
    [SOCIAL.Discord]: {
        link: "https://discord.com/invite/botdetector",
        fullName: "Bot Detector Plugin Discord"
    },
    [SOCIAL.Twitter]: {
        link: "https://twitter.com/osrsbotdetector",
        fullName: "@Osrsbotdetector"
    },
    [SOCIAL.Patreon]: {
        link: "https://www.patreon.com/bot_detector",
        fullName: "Patreon: Bot_detector"
    },
    [SOCIAL.Github]: {
        link: "https://github.com/Bot-detector/",
        fullName: "Github: Bot-detector"
    }
}

export default {
  props: {
    social: {
        type: String as PropType<SOCIAL>,
        required: true
    },
    displayType: {
        type: String as PropType<DISPLAYTYPE>,
        default: DISPLAYTYPE.Label
    }
  },
  data() {
    return {
        SOCIAL,
        DISPLAYTYPE
    }
  },
  methods: {
    displaySocial: (s: SOCIAL ,display: DISPLAYTYPE) => {
        if(display === DISPLAYTYPE.FullName) {
            return socials[s].fullName;
        }

        if(display === DISPLAYTYPE.Label) {
            return s;
        }

        return socials[s].link
    }
  }
}
</script>