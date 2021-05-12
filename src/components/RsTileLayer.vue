<template>
  <l-tile-layer
    :url="url"
    :min-zoom="4"
    :max-zoom="11"
    :no-wrap="true"
    :tms="true"
  /> 
</template>

<script>
import { LTileLayer } from 'vue2-leaflet'

const MAP_DATA_BASE = 'https://raw.githubusercontent.com/Explv/osrs_map_tiles/master/'

export default {
  props: {
    floor: {
      type: Number,
      required: false,
      default: 0
    }
  },
  components: {
    LTileLayer
  },
  computed: {
    url () {
      console.log(`{z}/{x}/{y}`)
      return `${MAP_DATA_BASE}/0/{z}/{x}/{y}.png`
    }
  },
  watch: {
    x: function (val) {
      console.log(val)
    }
  }
}
</script>
