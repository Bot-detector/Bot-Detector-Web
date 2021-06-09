<template>
  <div style="height: 1000px; width: 100%">
    <div style="height: 15%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>
    <l-map
      ref="map"
      :zoom="zoom"
      :center="center"
      :max-zoom="11"
      :options="{ zoomControl: false }"
      @update:zoom="x => { zoom = x }"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <rs-tile-layer :floor="floor"/>
      <!-- We need to wait for the $nextTick callback to fire -->
      <template v-if="map && showLabels">
        <!-- Render all the locations -->
        <rs-location-marker
          v-for="(location, $x) in locations"
          :key="$x"
          :label="location.name"
          :location="location.coords"
          :map="map"
          :zoom="zoom"
        />

        <Vue2LeafletHeatmap :lat-lng="latlngs" :radius="60" :min-opacity=".75" :max-zoom="10" :blur="60"></Vue2LeafletHeatmap>
      </template>
    </l-map>
  </div>
</template>

<script>
import { LMap } from 'vue2-leaflet'
import RsTileLayer from './RsTileLayer'
import RsLocationMarker from './RsLocationMarker'
import Vue2LeafletHeatmap from './vue2-leaflet-heatmap.vue'

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
    RsLocationMarker,
    RsTileLayer,
    Vue2LeafletHeatmap
  },

  data () {
    return {
      color: 'cyan',
      map: null,
      locations,
      zoom: 7,
      center: [-79.36, -134.48],
      bounds: null,
      activeTileRect: null,
      latlngs: [
        [-78.213999, -135.63755, 0]
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
    },
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
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
      if (this.map && x) {
        this.redraw()
      }
    }
  }
}
</script>

