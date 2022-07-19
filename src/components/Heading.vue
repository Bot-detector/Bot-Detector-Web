<template>
    <header>
        <div class="headerimage">
        <h1>
            <img
            :class="{
                headerImg: !imageFlipped,
                headerImgFlipped: imageFlipped
            }"
            :src="imageSrc"
            />
            {{title}}
            <img
            :class="{
                headerImg: !imageFlipped,
                headerImgFlipped: imageFlipped
            }"
            :src="imageSrc"
            />
        </h1>
        </div>
        <h2 v-if="subTitle">{{subTitle}}</h2>
    </header>
</template>

<script lang="ts">
export default {
  props: {
    title: {
        type: String,
        required: true
    },
    subTitle: String,
    imageSrc: {
        type: Image,
        required: true
    },
    imageFlipped: Boolean
  }
}
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

        &.headerImg:nth-of-type(odd) {
            transform: rotateY(180deg);
        }

        &.headerImgFlipped:nth-of-type(even) {
            transform: rotateY(180deg);
        }
    }
</style>