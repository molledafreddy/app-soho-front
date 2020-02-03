import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import Toasted from 'vue-toasted';

Vue.config.productionTip = false

//Bootstrap Vue
Vue.use(BootstrapVue);

//componets
Vue.component('shoe-edit', require('./components/shoes/Edit.vue'));

//Toast alerts
Vue.use(Toasted,  {duration: 3000, iconPack : 'fontawesome', theme: 'outline'})

window.clone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
