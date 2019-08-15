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
  fetchFilials({ commit, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.get(`${config.apiUrl}/filial/show_all`)
      .then((res) => {
        const filials = res.data;
        commit(SET_ITEMS, { resource: 'filials', items: filials}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return filials;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  addFilials({ state, commit, dispatch }, filialToCreate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/flial/add`, filialToCreate)
      .then((res) => {
        const filial = res.data;
        const filials = state.items;
        commit(SET_ITEMS, { resource: 'filials', items: [ ...filials, filial]}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return filials;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  /* upadateFilials({ state, commit, dispatch }, filialToUpdate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/flial/update`, filialToUpdate)
      .then((res) => {
        const filial = res.data;
        const filials = state.items;
        commit(SET_ITEMS, { resource: 'filials', items: [ ...filials, filial]}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return filials;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  } */
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