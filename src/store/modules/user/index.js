//import axios from 'axios'
import { config, rejectError } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_AUTH_USER, USER_LOGOUT } from '@/store/mutation-types/user'

const state = {
  profile: null
}

const mutations = {
  [SET_AUTH_USER] (state, user) {
    state.profile = user;
  },
  [USER_LOGOUT] (state) {
    state.profile = null;
  }
}

const actions = {
  getAuthUser({ commit, getters, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    const authUser = getters['getProfile'];
    const token = localStorage.getItem('oko-jwt');

    if (authUser && token) { 
      dispatch('shared/clearLoading', null, { root: true });
      return Promise.resolve(authUser);
    }

    return axiosInstance.get(`${config.apiUrl}/user/me`)
      .then((res) => {
        const user = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        commit(SET_AUTH_USER, user);
        return user;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        commit(USER_LOGOUT);
        return rejectError(err);
      })
  },
  // addUser({ commit }) {

  // },
  userLogout ({ commit }) {
    commit(USER_LOGOUT);
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