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

import Multiselect from 'vue-multiselect'

import InfiniteLoading from 'vue-infinite-loading';

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

// Mixins
import okoModal from '@/_mixins/okoModal';
import pageLoader from "@/_mixins/pageLoader"
import checkInputType from "@/_mixins/checkInputType"
import vuelidateCheck from "@/_mixins/vuelidateCheck"

Vue.config.productionTip = false
Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)
Vue.component('AppSpinner', AppSpinner)
Vue.component('multiselect', Multiselect)

commonComponents.forEach(component => {
  Vue.component(component.name, component);
});

Vue.use(vuelidate)
Vue.use(Autocomplete)
Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
Vue.use(InfiniteLoading);

Vue.mixin(okoModal);
Vue.mixin(pageLoader);
Vue.mixin(checkInputType);
Vue.mixin(vuelidateCheck);

/**
 * Formats a phone number.
 * Example: 89999999999 => 8 (999) 999-99-99
 *
 * @param {String} phone
 * @return {Void}
 */
Vue.filter('formatPhone', function (phone) {
  return phone.replace(/[^0-9]/g, '')
              .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
});

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')

storeModerator(store, router)