import Vue from 'vue'
import Vuex from 'vuex'
import { SET_ITEMS, SET_ITEM } from '@/store/mutation-types/setItems'

import auth from './modules/auth/';
import shared from './modules/shared/';
import user from './modules/user/';
import users from './modules/users/';
import filials from './modules/filials/';
import roles from './modules/roles/';
import products from './modules/products/';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shared,
    auth,
    user,
    users,
    filials,
    roles,
    products,
  },
  mutations: {
    [SET_ITEMS](state, { resource, items }) {
      state[resource].items = items
    },
    [SET_ITEM](state, { resource, item }) {
      state[resource].item = item
    }
  }
})