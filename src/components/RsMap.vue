<template>
<div style="height: 1000px; width: 100%">
  <l-map
    ref="map"
    :min-zoom="5"
    :max-zoom="12"
    @update:zoom="x => { zoom = x }"
    :options="{ zoomControl: true }"
  >
    <Vue2LeafletHeatmap 
      :lat-lng="latlngs" 
      :radius="60" 
      :min-opacity=".75" 
      :max-zoom="11" 
      :blur="60" 
      :floor="floor">
      </Vue2LeafletHeatmap>
    <rs-tile-layer :floor="floor"/>
    <!-- We need to wait for the $nextTick callback to fire -->
    <template v-if="map && showLabels">
      <!-- Render all the locations -->
      
    </template>
  </l-map>
  </div>
</template>

<script>
import { LMap } from 'vue2-leaflet'

import Vue2LeafletHeatmap from "./vue2-leaflet-heatmap.vue"
import RsTileLayer from './RsTileLayer'


import { Position } from '../model/Position'
import locations from '../data/locations.json'

export default {
  props: {
    showLabels: {
      type: Boolean,
      required: false,
      default: false
    },
    floor: {
      type: Number,
      required: false,
      default: 0
    },
    tile: {
      type: Object,
      required: false,
      default: function () {
        return new Position(3101, 3094, 0)
      }
    }
  },

  components: {
    LMap,

    RsTileLayer,
    Vue2LeafletHeatmap
  },

  data () {
    return {
      color: 'cyan',
      map: null,
      locations,
      zoom: 7,
      activeTileRect: null,
      latlngs: [
        [0,0,0],
        [500,500,0],
        [1000, 1000, 0],
        [1500, 1500, 0],
        [2000, 2000, 0],
        [3000, 3000, 0],
        [3500, 3500, 0],
        [4000, 4000, 0]
      ]
    }
  },

  computed: {
  },

  methods: {
    redraw () {
      const map = this.map
      const tile = this.tile
      if (this.activeTileRect !== null) {
        map.removeLayer(this.activeTileRect)
      }

      this.activeTileRect = tile.toLeaflet(map)
      this.activeTileRect.addTo(map)

      map.setView(tile.toLatLng(map), this.zoom)

      console.log(tile.toLatLng(map))
    }
  },

  mounted () {
    this.$nextTick(() => {
      window.map = this.map = this.$refs.map.mapObject
      if (this.tile) {
        this.redraw()
      } else {
        this.map.setView([-82, -148], this.zoom)
      }
    })
  },

  watch: {
    tile (x) {
      console.log(x)
      if (this.map && x) {
        this.redraw()
      }
    }
  }
}
</script>
