<template>
    <header>
        <h2>
            <img
            class="headerImg"
            :src="imageSrc"
            />
            {{title}}
            <img
            class="headerImg"
            :src="imageSrc"
            />
        </h2>
    </header>
</template>

<script lang="ts">
export default {
  props: {
    title: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    }
  }
}
</script>

<style scoped lang="scss">
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    img {
        width: 20px;
        margin: 0 1rem;
    }
</style>