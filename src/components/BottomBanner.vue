<script setup lang="ts">
import { mdiHeart } from '@mdi/js';
import { useRuneLiteStore } from '@/stores/apiStore';

const runeLiteStore = useRuneLiteStore();
runeLiteStore.getProjectStats();
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
            <p>Active Installs: {{ runeLiteStore.getTotalInstalls }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.bottom-banner {
    max-height: 42px;
    top: calc(100% - 42px);

    p {
        color: white;
        margin: 0;

        @media screen and (max-width: 720px) {
            font-size: 0.8rem;
        }
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