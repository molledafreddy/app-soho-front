import Vue from 'vue'
import moment from 'moment'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/custom.scss'
import { BootstrapVue, BootstrapVueIcons, BVToastPlugin } from 'bootstrap-vue'

import Notifications from 'vue-notification'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



//notifications
Vue.use(Notifications)
// Vue.use styles
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.config.productionTip = false

//Bootstrap Vue
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)
Vue.use(BVToastPlugin)


Vue.prototype.$moment = moment;
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://localhost:3000/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
