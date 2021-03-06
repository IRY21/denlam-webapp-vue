import axios from 'axios';
//import moment from 'moment';
import momentTimezone from 'moment-timezone';
import { config, rejectError, axiosDataWrap } from '@/_helpers';

import { AUTH_LOGIN, AUTH_LOGOUT } from '@/store/mutation-types/auth';

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
    let authData = { 
      ...formData,
      device_datetime: momentTimezone.tz.guess(),
    }
    return axios.post(`${config.apiUrl}/auth`, axiosDataWrap(authData))
      .then((res) => {
        const data = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        localStorage.setItem("oko-jwt", data.access_token);
        sessionStorage.setItem("oko-jwt", data.access_token);
        commit(AUTH_LOGIN);
      })
      .catch(err => {
        const errMessage = rejectError(err);
        dispatch('shared/clearLoading', null, { root: true });
        return errMessage;
      })
  },
  logout ({ commit }) {
    return new Promise((resolve) => {
      localStorage.removeItem("oko-jwt");
      sessionStorage.removeItem("oko-jwt");
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