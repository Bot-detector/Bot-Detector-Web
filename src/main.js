import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';

Vue.config.productionTip = false

new Vue({
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
