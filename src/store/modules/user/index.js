// import axios from 'axios'
//import { config, rejectError } from '@/_helpers'

import { SET_AUTH_USER, USER_LOGOUT } from '@/store/mutation-types/user'

const state = {
  profile: null
}

const mutations = {
  [SET_AUTH_USER] (state, payload) {
    state.profile = payload;
  },
  [USER_LOGOUT] (state) {
    state.profile = null
  }
}

const actions = {
  getAuthUser({ commit, getters, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    const authUser = getters['getProfile'];

    if (authUser) { 
      dispatch('shared/clearLoading', null, { root: true });
      return Promise.resolve(authUser);
    }
    if (!authUser) {
      const authUser = {
        id: "1",
        login: "denlam",
        role_id: "1",
        role_name: "admin"
      }
      commit(SET_AUTH_USER, authUser)
      dispatch('shared/clearLoading', null, { root: true });
      return Promise.resolve(authUser);
    }

    /* const config = {
      headers: {
        'Cache-Control': 'no-cache'
      }
    }

    return axios.get('http://api2.denlam.ru', config) */
  },
  userLogout ({ commit }) {
    commit(USER_LOGOUT)
  }
}

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}