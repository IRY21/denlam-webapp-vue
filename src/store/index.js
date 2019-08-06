import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth/';
import shared from './modules/shared/';
import user from './modules/user/';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shared,
    auth,
    user,
  }
})