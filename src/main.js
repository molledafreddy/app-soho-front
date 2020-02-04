import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/custom.scss'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Vue.use styles
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.config.productionTip = false

//Bootstrap Vue
Vue.use(BootstrapVue);


Vue.prototype.$moment = moment;
Vue.prototype.$http = axios;

// window.clone = function (obj) {
//     return JSON.parse(JSON.stringify(obj));
// }
axios.defaults.baseURL = 'http://localhost:3000/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
