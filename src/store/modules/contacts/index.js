import { config, rejectError, axiosDataWrap } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS } from '@/store/mutation-types/setItems'

const state = {
  items: [],
  item: null,
}

const mutations = {
  
}

const actions = {
  fetchContacts({ commit, dispatch }, clientId ) {
    dispatch('shared/setLoading', null, { root: true });

    return axiosInstance.post(`${config.apiUrl}/client_contact/show_all`, axiosDataWrap(clientId))
      .then((res) => {
        const contacts = res.data;
        commit(SET_ITEMS, { resource: 'contacts', items: contacts}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return contacts;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  addContact({ dispatch }, contactToAdd) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client_contact/add`, axiosDataWrap(contactToAdd))
      .then((res) => {
        const contact = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        return contact;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  updateContact({ dispatch }, contactToUpdate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client_contact/update`, axiosDataWrap(contactToUpdate))
      .then((res) => {
        const contact = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        return contact;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  deleteContact({ dispatch }, contactId) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client_contact/delete`, axiosDataWrap({ id: contactId }))
      .then((res) => {
        const contact = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        return contact;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  }
}

const getters = {
  getContacts: state => state.items,
  getContact: state => state.item,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}