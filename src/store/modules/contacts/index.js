import { config, rejectError } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS } from '@/store/mutation-types/setItems'
import { SET_TYPES } from '@/store/mutation-types/clients'

const state = {
  items: [],
  item: null,
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