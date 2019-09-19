import { config, rejectError, axiosDataWrap } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS, SET_ITEM } from '@/store/mutation-types/setItems'
import { SET_TYPES, SET_POSITIONS, REMOVE_WORKER } from '@/store/mutation-types/workers'

const state = {
  items: [],
  item: null,
  types: null,
  positions: null
}

const mutations = {
  [SET_TYPES] (state, payload) {
    state.types = payload;
  },
  [SET_POSITIONS] (state, payload) {
    state.positions = payload;
  },
  [REMOVE_WORKER] (state, workerToRemove) {
    const index = state.items.findIndex(function (item) {
      if (item.id === workerToRemove.id) return true;
      return false;
    });
    if (index !== -1) state.items.splice(index, 1);
  }
}

const actions = {
  fetchWorkers({ state, commit, dispatch }, newWorkerParam ) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/worker/show_all`, axiosDataWrap(newWorkerParam))
      .then((res) => {
        const workers = res.data;
        let uniqueWorkers = state.items;
        if (uniqueWorkers.length !== 0) {
          // concatenate state.items and workers without duplicates
          for(var i = 0, l = uniqueWorkers.length; i < l; i++) {
            for(var j = 0, ll = workers.length; j < ll; j++) {
                if(uniqueWorkers[i].id === workers[j].id) {
                  uniqueWorkers.splice(i, 1, workers[j]);
                  workers.splice(j, 1);
                  break;
                }
            }
          }
          commit(SET_ITEMS, { resource: 'workers', items: [...uniqueWorkers, ...workers]}, {root: true});
        } else {
          commit(SET_ITEMS, { resource: 'workers', items: workers}, {root: true});
        }

        dispatch('shared/clearLoading', null, { root: true });
        return workers;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  searchWorkers({ commit, dispatch }, searchWorkersParam ) {
    dispatch('shared/setLoading', null, { root: true });

    return axiosInstance.post(`${config.apiUrl}/worker/show_all`, axiosDataWrap(searchWorkersParam))
      .then((res) => {
        const workers = res.data;
        commit(SET_ITEMS, { resource: 'workers', items: workers}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return workers;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  fetchWorker({ commit, dispatch }, workerId) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/worker/show`, axiosDataWrap({id: workerId}))
      .then((res) => {
        const worker = res.data;
        commit(SET_ITEM, { resource: 'clients', item: worker}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return worker;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  fetchWorkerPosition({ commit, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.get(`${config.apiUrl}/worker_position/show_all`)
      .then((res) => {
        const workerPosition = res.data;
        commit(SET_POSITIONS, workerPosition);
        dispatch('shared/clearLoading', null, { root: true });
        return workerPosition; 
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  fetchWorkerTypes({ commit, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.get(`${config.apiUrl}/worker_type/show_all`)
      .then((res) => {
        const workerTypes = res.data;
        commit(SET_TYPES, workerTypes);
        dispatch('shared/clearLoading', null, { root: true });
        return workerTypes; 
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  addWorker({ dispatch }, workerToAdd) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/worker/add`, axiosDataWrap(workerToAdd))
      .then((res) => {
        const worker = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        return worker;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  addWorkerPhoto({ dispatch }, workerPhoto) {
    let data = new FormData();
    data.append('worker_id', workerPhoto.worker_id);
    data.append('photo', workerPhoto.photo);
    let options = { headers: { 'Content-Type': 'multipart/form-data' } }
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/worker/photoadd`, data, options)
      .then((res) => {
        const workerPhoto = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        return workerPhoto;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  updateWorker({ dispatch, commit }, workerToUpdate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/worker/update`, axiosDataWrap(workerToUpdate))
      .then((res) => {
        const worker = res.data;
        commit(SET_ITEM, { resource: 'workers', item: worker}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return worker;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  }
}

const getters = {
  getWorkers: state => state.items,
  getWorker: state => state.item,
  isWorkersLoaded: state => !!state.items.length,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}