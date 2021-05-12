<template>
  <l-marker
    :icon="icon"
    :lat-lng="latLng"
  />
</template>

<script>
import { LMarker } from 'vue2-leaflet'
import { DivIcon } from 'leaflet'
import { Position } from '../model/Position'

export default {
  name: 'RSLocationMarker',

  props: {
    label: {
      type: String,
      required: true
    },
    location: {
      type: [Object, Array],
      required: true,
      validator: function (v) {
        if (v instanceof Position) {
          return true
        } else if (v instanceof Array) {
          return v.length === 3
        }
      }
    },
    map: {
      type: Object,
      required: true
    },
    zoom: {
      type: Number,
      required: true
    }
  },

  components: {
    LMarker
  },

  computed: {
    icon () {
      return new DivIcon({
        html: this.label,
        className: `location-marker fs-${this.zoom}`
      })
    },
    latLng () {
      return this.position.toLatLng(this.map)
    },
    position () {
      if (this.location instanceof Array) {
        return new Position(...this.location)
      }
      return this.location
    }
  }
}
</script>

<style lang="scss">
// Rough way to do font-sizes for various zoom levels
//
// TODO: different locations/markers have different levels of importance
.fs-4 { font-size: 0.15rem; }
.fs-5 { font-size: 0.25rem; }
.fs-6 { font-size: 0.65rem; }
.fs-7 { font-size: 1.15rem; }
.fs-8 { font-size: 1.5rem; }
.fs-9 { font-size: 2.55rem; }
.fs-10 { font-size: 3.5rem; }
.fs-11 { font-size: 6rem; }

.location-marker {
  padding: 2px;
  color: white;
  width: auto !important;
  height: auto !important;
  background: rgba(48, 48, 48, 0.3);
  transform: translateX(50%);
}
</style>
