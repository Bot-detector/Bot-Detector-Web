<template>
    <header>
        <h2>
            <img
            :src="imageSource"
            />
            {{title}}
            <img
            :src="imageSource"
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
    imageSource: {
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