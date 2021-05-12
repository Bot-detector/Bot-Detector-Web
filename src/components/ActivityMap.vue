<template>
<div style="height: 500px; width: 100%">
    <div style="height: 200px; overflow: auto;">
      <p>First marker is placed at {{ withPopup.lat }}, {{ withPopup.lng }}</p>
      <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
      <button @click="showLongText">
        Toggle long popup
      </button>
      <button @click="showMap = !showMap">
        Toggle map
      </button>
    </div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <Vue2LeafletHeatmap :lat-lng="latlngs" :radius="60" :min-opacity=".75" :max-zoom="11" :blur="60"></Vue2LeafletHeatmap>
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            I am a popup
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
  import { latLng } from "leaflet";
  import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet';
  import Vue2LeafletHeatmap from "./vue2-leaflet-heatmap.vue"

  export default {
    
    name: 'ActivityMap',
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        LTooltip,
        Vue2LeafletHeatmap
    },
    computed: {
        console: () => console,
    },
    data: () => ({
      zoom: 11,
      center: latLng(3170, 3489),
      url: 'https://raw.githubusercontent.com/Explv/osrs_map_tiles/master/0/{z}/{x}/{y}.png',
      attribution:
        'Test',
      withPopup: latLng(3170, 3489),
      withTooltip: latLng(3170, 3489),
      currentZoom: 7,
      currentCenter: latLng(3170, 3489),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },

      showMap: true
    }),
    mounted () {

    },
    methods: {
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
        showLongText() {
            this.showParagraph = !this.showParagraph;
        },
        innerClick() {
            alert("Click!");
        }   
    }
  }
</script>
