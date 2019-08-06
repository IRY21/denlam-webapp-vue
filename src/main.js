import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'

import storeModerator from '@/_helpers/store-moderator'

Vue.config.productionTip = false

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)

Vue.use(vuelidate)

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')

storeModerator(store, router)