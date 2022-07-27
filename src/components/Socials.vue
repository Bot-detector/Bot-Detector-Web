<script setup lang="ts">
import { mdiGithub, mdiPatreon } from "@mdi/js";

import ExternalLink from "@/components/ExternalLink.vue";
import type { PropType } from "vue";
</script>

<template>
  <ExternalLink :to="socials[social].link">
    {{ displaySocial(social, displayType) }}
    <svg
      v-if="showIcon"
      class="socialIcon"
      :viewBox="social === SOCIAL.Discord ? '0 0 16 16' : undefined"
    >
      <path :d="socials[social].icon" />
    </svg>
  </ExternalLink>
</template>

<script lang="ts">
export enum SOCIAL {
  Discord = "Discord",
  Twitter = "Twitter",
  Patreon = "Patreon",
  Github = "Github",
}

export enum DISPLAYTYPE {
  Label = "label",
  FullName = "fullName",
  Link = "link",
}

const socials = {
  [SOCIAL.Discord]: {
    link: "https://discord.com/invite/botdetector",
    fullName: "Bot Detector Plugin Discord",
    icon: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
  },
  [SOCIAL.Twitter]: {
    link: "https://twitter.com/osrsbotdetector",
    fullName: "@Osrsbotdetector",
    icon: undefined,
  },
  [SOCIAL.Patreon]: {
    link: "https://www.patreon.com/bot_detector",
    fullName: "Patreon: Bot_detector",
    icon: mdiPatreon,
  },
  [SOCIAL.Github]: {
    link: "https://github.com/Bot-detector/",
    fullName: "Github: Bot-detector",
    icon: mdiGithub,
  },
};

export default {
  props: {
    social: {
      type: String as PropType<SOCIAL>,
      required: true,
    },
    displayType: {
      type: String as PropType<DISPLAYTYPE>,
      default: DISPLAYTYPE.Label,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      SOCIAL,
      DISPLAYTYPE,
    };
  },
  methods: {
    displaySocial: (s: SOCIAL, display: DISPLAYTYPE) => {
      if (display === DISPLAYTYPE.FullName) {
        return socials[s].fullName;
      }

      if (display === DISPLAYTYPE.Label) {
        return s;
      }

      return socials[s].link;
    },
  },
};
</script>
