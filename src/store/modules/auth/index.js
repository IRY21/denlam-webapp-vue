import axios from 'axios';
import config from '@/_helpers/config'

import { SET_TOKEN } from '@/store/mutation-types/auth'
import { AUTH_LOGOUT } from '@/store/mutation-types/user'

const state = {
  token: null
}

const mutations = {
  [SET_TOKEN] (state, token) {
    state.token = token;
  },
  [AUTH_LOGOUT] (state) {
    state.token = null
  }
}

const actions = {
  login ({ commit }, formData) {
    commit('shared/SET_LOADING', null, { root: true })
    return axios.post(`${config.apiUrl}`, formData).then((res) => {
      const data = res.data
      localStorage.setItem("oko-jwt", data.auth_access_token);
      commit('shared/CLEAR_LOADING', null, { root: true })
      commit('SET_TOKEN', data.auth_access_token);
    })
    .catch(err => {
      commit('shared/CLEAR_LOADING', null, { root: true })
      return Promise.reject(err)
    })
  },
  logout ({ commit }) {
    return new Promise((resolve) => {
      localStorage.removeItem("oko-jwt");
      commit('SET_TOKEN', null);
      resolve();
    });
  }
}

const getters = {
  isAuthenticated: state => {
    return !!state.token
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}