<template>
    <div style="text-align: center">
    <h1>Dashboard</h1>
    <heatmap></heatmap>
    </div>
</template>

<script>
import WorldHeatmapVue from './maps/WorldHeatmap.vue';
export default {
  name: 'Dashboard',
  components: {
      'heatmap': WorldHeatmapVue
  },
  data: () => ({
    
  }),
  mounted () {
   
  },
  methods: {
  }
};
</script>

<style>
  i {
    padding-right: 3px;
  }

  .footer {
    position:fixed !important;
    bottom:0;
    left:0;
    right:0;
    height:30px;
  }

  .centered {
    text-align: center;
  }
</style>
