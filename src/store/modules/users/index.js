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
  fetchUsers({ commit, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.get(`${config.apiUrl}/user/show_all`)
      .then((res) => {
        const users = res.data;
        commit(SET_ITEMS, { resource: 'users', items: users}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return users;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  addUser({ state, commit, dispatch }, userToCreate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/user/add`, userToCreate)
      .then((res) => {
        const user = res.data;
        const users = state.items;
        commit(SET_ITEMS, { resource: 'users', items: [ ...users, user]}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return users;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  updateUser({ state, commit, dispatch }, userToUpdate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/user/update`, userToUpdate)
      .then((res) => {
        const user = res.data;
        const users = state.items;
        const index = state.items.findIndex(uUser => uUser.id === user.id);
        users[index] = user;
        
        commit(SET_ITEMS, { resource: 'users', items: users}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return user;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  deleteUser({ state, commit, dispatch }, userToDelete) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/user/delete`, userToDelete)
      .then((res) => {
        const user = res.data;
        const users = state.items;
        const index = state.items.findIndex(uUser => uUser.id === user.id);
        
        users.splice(index, 1);
        
        commit(SET_ITEMS, { resource: 'users', items: users}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return user;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  }
}

const getters = {
  getUsers: state => state.items,
  getUser: state => state.item,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}