<template>
    <a :href="to" target="_blank" nofollow >
      <slot></slot>
    </a>
</template>

<script lang="ts">
export default {
  props: {
    to: {
        type: String,
        required: true
    }
  }
}
</script>