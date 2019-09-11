import { config, rejectError, sortAlphabet, axiosDataWrap } from '@/_helpers'
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
  addFilial({ state, commit, dispatch }, filialToCreate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/filial/add`, axiosDataWrap(filialToCreate))
      .then((res) => {
        const filial = res.data;
        const filials = state.items;

        const filtered = [ ...filials, filial].sort(sortAlphabet);

        commit(SET_ITEMS, { resource: 'filials', items: filtered}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return filials;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  upadateFilial({ state, commit, dispatch }, filialToUpdate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/filial/update`, axiosDataWrap(filialToUpdate))
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
  deleteFilial({ state, commit, dispatch }, filialToDelete) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/filial/delete`, axiosDataWrap(filialToDelete))
      .then((res) => {
        const filial = res.data;
        const filials = state.items;
        const index = state.items.findIndex(uFilial => uFilial.id === filial.id);
        
        filials.splice(index, 1);
        
        commit(SET_ITEMS, { resource: 'filials', items: filials}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return filials;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  }
}

const getters = {
  getFilials: state => state.items,
  getFilial: state => state.item,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}