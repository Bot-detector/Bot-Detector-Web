<script setup lang="ts">
import { mdiHeart } from '@mdi/js';
</script>

<template>
    <div class="outer-banner bottom-banner">
        <div id="bottom-bar-message">
            <svg><path :d="mdiHeart" /></svg>
            <p>
                The Bot Detector Team
            </p>
        </div>

        <div id="plugin-stats">
            <p>Active Installs: {{totalInstalls === 0 ? "Failed getting stats." : totalInstalls}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import axios, { type AxiosResponse } from "axios";

interface Respose {
    "bot-detector": number,
    [key: string]: number;
}
export default {
  data: () => ({
    totalInstalls: 0,
  }),
  mounted() {
    this.getProjectStats();
  },
  methods: {
    setProjectStats: function (response: AxiosResponse<Respose>) {
      console.log(response.data);
      this.totalInstalls = response.data['bot-detector'];
    },
    getProjectStats: function () {
      axios
        .get("https://api.runelite.net/runelite/pluginhub", {
          headers: {
            'accept': 'application/json'
          }
        })
        .then((response) => this.setProjectStats(response));
    },
  },
};
</script>


<style scoped lang="scss">
.bottom-banner {
    max-height: 42px;

    p {
        color: white;
        margin: 0;
    }
}

#bottom-bar-message {
    display: flex;
    align-items: center;

    svg {
        fill: white;
        width: 24px;
        height: 24px;
        margin-right: 0.5rem;
    }

}
</style>