<script setup lang="ts">
import type { PropType } from "vue";
</script>

<template>
  <header>
    <div class="headerimage">
      <h1>
        <img
          :class="{
            imageFlipped: [
              IMAGE_DISPLAY.mirrored,
              IMAGE_DISPLAY.reverse,
            ].includes(imageDisplay),
          }"
          :src="imageSource"
        />
        {{ title }}
        <img
          :class="{
            imageFlipped: [
              IMAGE_DISPLAY.reversedMirrored,
              IMAGE_DISPLAY.reverse,
            ].includes(imageDisplay),
          }"
          :src="imageSource"
        />
      </h1>
    </div>
    <h2 v-if="subTitle">{{ subTitle }}</h2>
  </header>
</template>

<script lang="ts">
export enum IMAGE_DISPLAY {
  mirrored = "mirrored",
  reversedMirrored = "reversedMirrored",
  normal = "normal",
  reverse = "reverse",
}
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: String,
    imageSource: {
      type: String,
      required: true,
    },
    imageDisplay: {
      type: String as PropType<IMAGE_DISPLAY>,
      default: IMAGE_DISPLAY.mirrored,
    },
  },
  data() {
    IMAGE_DISPLAY;
  },
};
</script>

<style scoped lang="scss">
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 40px;
  margin: 0 1rem;

  &.imageFlipped {
    transform: rotateY(180deg);
  }
}
</style>
