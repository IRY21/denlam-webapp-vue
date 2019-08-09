import axios from 'axios';
import { config, rejectError } from '@/_helpers'

import { AUTH_LOGIN, AUTH_LOGOUT } from '@/store/mutation-types/auth'

const state = {
  authenticated: false
}

const mutations = {
  [AUTH_LOGIN] (state) {
    state.authenticated = true;
  },
  [AUTH_LOGOUT] (state) {
    state.authenticated = false;
  }
}

const actions = {
  login ({ dispatch, commit }, formData) {
    dispatch('shared/setLoading', null, { root: true });
    return axios.post(`${config.apiUrl}/auth`, formData).then((res) => {
      dispatch('shared/clearLoading', null, { root: true });
      commit(AUTH_LOGIN);
      console.log(res)
    })
    .catch(err => {
      const errMessage = rejectError(err);
      dispatch('shared/clearLoading', null, { root: true });
      dispatch('shared/setError', errMessage, { root: true });
      return errMessage;
    })
  },
  logout ({ commit }) {
    return new Promise((resolve) => {
      commit(AUTH_LOGOUT);
      resolve();
    });
  }
}

const getters = {
  isAuthenticated: state => {
    return state.authenticated
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}