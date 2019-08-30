import { config, rejectError } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS } from '@/store/mutation-types/setItems'
import { SET_TYPES } from '@/store/mutation-types/clients'

const state = {
  items: [],
  item: null,
  types: null
}

const mutations = {
  [SET_TYPES] (state, payload) {
    state.types = payload;
  }
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
  fetchClientTypes({ commit, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client_type/show_all`)
      .then((res) => {
        const clientTypes = res.data;
        commit(SET_TYPES, clientTypes);
        dispatch('shared/clearLoading', null, { root: true });
        return clientTypes;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  addClient({ dispatch }, clientToAdd) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client/add`, clientToAdd)
      .then((res) => {
        const client = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        return client;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  }
}

const getters = {
  getClients: state => state.items,
  getClient: state => state.item,
  getClientTypes: state => state.types,
  isClientsLoaded: state => !!state.items.length,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}