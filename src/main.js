import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';
import router from './router'
import Vuelidate from 'vuelidate'
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

Vue.use(Vuelidate);


new Vue({
  vuetify,
  axios,
  router,
  Vuelidate,
  render: h => h(App)
}).$mount('#app')
