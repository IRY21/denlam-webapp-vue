import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'

Vue.config.productionTip = false

import LayoutDefault from '@/layouts/LayoutDefault.vue'
import LayoutAuth from '@/layouts/LayoutAuth.vue'

Vue.component('layout-default', LayoutDefault)
Vue.component('auth-layout', LayoutAuth)

Vue.use(vuelidate)

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')
