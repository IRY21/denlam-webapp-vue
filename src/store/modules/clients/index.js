import { config, rejectError, axiosDataWrap } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS, SET_ITEM } from '@/store/mutation-types/setItems'
import { SET_TYPES, REMOVE_CLIENT } from '@/store/mutation-types/clients'

const state = {
  items: [],
  item: null,
  types: null
}

const mutations = {
  [SET_TYPES] (state, payload) {
    state.types = payload;
  },
  [REMOVE_CLIENT] (state, clientToRemove) {
    const index = state.items.findIndex(function (item) {
      if (item.id === clientToRemove.id) return true;
      return false;
    });
    if (index !== -1) state.items.splice(index, 1);
  }
}

const actions = {
  fetchClients({ state, commit, dispatch }, newClientsParam ) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client/show_all`, axiosDataWrap(newClientsParam))
      .then((res) => {
        const clients = res.data;
        let uniqueClients = state.items;
        if (uniqueClients.length !== 0) {
          // concatenate state.items and clients without duplicates
          for(var i = 0, l = uniqueClients.length; i < l; i++) {
            for(var j = 0, ll = clients.length; j < ll; j++) {
                if(uniqueClients[i].id === clients[j].id) {
                  uniqueClients.splice(i, 1, clients[j]);
                  clients.splice(j, 1);
                  break;
                }
            }
          }
          commit(SET_ITEMS, { resource: 'clients', items: [...uniqueClients, ...clients]}, {root: true});
        } else {
          commit(SET_ITEMS, { resource: 'clients', items: clients}, {root: true});
        }

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

    return axiosInstance.post(`${config.apiUrl}/client/show_all`, axiosDataWrap(searchClientsParam))
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
  fetchClient({ commit, dispatch }, clientId) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client/show`, axiosDataWrap({id: clientId}))
      .then((res) => {
        const client = res.data;
        commit(SET_ITEM, { resource: 'clients', item: client}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return client;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  addClient({ dispatch }, clientToAdd) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client/add`, axiosDataWrap(clientToAdd))
      .then((res) => {
        const client = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        return client;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  deleteClient({ dispatch, commit }, clientId) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client/delete`, axiosDataWrap(clientId))
      .then((res) => {
        const client = res.data;
        commit(REMOVE_CLIENT, client);
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