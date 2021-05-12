import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';
import router from './router'
import Vuelidate from 'vuelidate'
import 'leaflet/dist/leaflet.css';
import GAuth from 'vue-google-oauth2'

Vue.config.productionTip = false

const gauthOption = {
  clientId: '1070359550637-tsaaivrj1ah7uphvotis95ap5aqi1g4h.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(Vuelidate);
Vue.use(GAuth, gauthOption)


new Vue({
  vuetify,
  axios,
  router,
  Vuelidate,
  render: h => h(App)
}).$mount('#app')
