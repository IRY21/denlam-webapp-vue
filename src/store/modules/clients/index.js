import { config, rejectError } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS } from '@/store/mutation-types/setItems'

const state = {
  items: [],
  item: null,
}

const mutations = {
  
}

const actions = {
  fetchClients({ state, commit, dispatch }, newClientsParam ) {
    dispatch('shared/setLoading', null, { root: true });

    return axiosInstance.post(`${config.apiUrl}/client/show_all`, newClientsParam)
      .then((res) => {
        const clients = res.data;
        commit(SET_ITEMS, { resource: 'clients', items: [ ...state.items, ...clients]}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return clients;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  searchClients({ commit, dispatch }, searchClientsParam ) {
    dispatch('shared/setLoading', null, { root: true });

    return axiosInstance.post(`${config.apiUrl}/client/show_all`, searchClientsParam)
      .then((res) => {
        const clients = res.data;
        commit(SET_ITEMS, { resource: 'clients', items: clients}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return clients;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
}

const getters = {
  getClients: state => state.items,
  getClient: state => state.item,
  isClientsLoaded: state => !!state.items.length,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}