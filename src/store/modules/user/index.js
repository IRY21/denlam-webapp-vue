// import axios from 'axios'
// import config from '@/_helpers/config'

import jwt from 'jsonwebtoken'

import { SET_AUTH_USER, AUTH_LOGOUT } from '@/store/mutation-types/user'

function checkTokenValidity(token) {
  debugger
  if(token) {
    const decodedToken = jwt.decode(token)

    return decodedToken && (decodedToken.exp * 1000) > new Date().getTime()
  }

  return false
}

const state = {
  profile: null
}

const mutations = {
  [SET_AUTH_USER] (state, payload) {
    state.profile = payload;
  },
  [AUTH_LOGOUT] (state) {
    state.profile = null
  }
}

const actions = {
  getAuthUser({ commit, getters }) {
    commit('shared/SET_LOADING', null, { root: true });
    const authUser = getters['getProfile'];
    const token = localStorage.getItem('oko-jwt');
    const isTokenValid = checkTokenValidity(token);

    if (authUser && isTokenValid) { 
      commit('shared/CLEAR_LOADING', null, { root: true });
      return Promise.resolve(authUser);
    }
    if (!authUser) {
      const authUser = {id: "1", login: "denlam", role: "ADMIN"}
      commit(SET_AUTH_USER, authUser)
      commit('shared/CLEAR_LOADING', null, { root: true });
      return Promise.reject(authUser);
    }

    /* const config = {
      headers: {
        'Cache-Control': 'no-cache'
      }
    }

    return axios.get('http://api2.denlam.ru', config) */
  },
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