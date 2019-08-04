import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth/auth';
import shared from './modules/shared/shared';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shared,
    auth,
  }
})