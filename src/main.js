import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'

// Vuex moderator
import storeModerator from '@/_helpers/store-moderator'

// My components
import commonComponents from '@/components/UI';
import AppSpinner from './components/AppSpinner'

// External components
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

import VModal from 'vue-js-modal'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

// Mixins
import okoModal from '@/_mixins/okoModal';
import pageLoader from "@/_mixins/pageLoader"

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

Vue.mixin(okoModal);
Vue.mixin(pageLoader);

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')

storeModerator(store, router)