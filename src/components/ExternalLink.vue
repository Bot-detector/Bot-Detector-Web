<template>
    <a :href="to" target="_blank" nofollow>{{label}}</a>
</template>

<script lang="ts">
export default {
  props: {
    to: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
  }
}
</script>