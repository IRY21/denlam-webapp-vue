import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'

import storeModerator from '@/_helpers/store-moderator'

import commonComponents from '@/components/UI';
import AppSpinner from './components/AppSpinner'

import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

import VModal from 'vue-js-modal'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

Vue.config.productionTip = false
Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)
Vue.component('AppSpinner', AppSpinner)

commonComponents.forEach(component => {
  Vue.component(component.name, component);
});

Vue.use(vuelidate)
Vue.use(Autocomplete)
Vue.use(VModal, { dynamic: true, injectModalsContainer: true })

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')

storeModerator(store, router)