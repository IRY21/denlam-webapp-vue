import { config, rejectError } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS } from '@/store/mutation-types/setItems'

const state = {
  items: null,
  item: null
}

const mutations = {
  
}

const actions = {
  fetchRoles({ commit, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.get(`${config.apiUrl}/role/show_all`)
      .then((res) => {
        const roles = res.data;
        commit(SET_ITEMS, { resource: 'roles', items: roles}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return roles;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
}

const getters = {
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}