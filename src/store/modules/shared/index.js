import { SET_LOADING, CLEAR_LOADING, SET_ERROR, CLEAR_ERROR } from '@/store/mutation-types/shared'

const state = {
  loading: false,
  error: null
}

const mutations = {
  [SET_LOADING] (state) {
    state.loading = true;
  },
  [CLEAR_LOADING] (state) {
    state.loading = false;
  },
  [SET_ERROR] (state, payload) {
    state.error = payload;
  },
  [CLEAR_ERROR] (state) {
    state.error = null;
  }
}

const actions = {
  setLoading({ commit }) {
    commit('SET_LOADING')
  },
  clearLoading({ commit }) {
    commit('CLEAR_LOADING')
  },
  setError({ commit }, payload) {
    commit('SET_ERROR', payload)
  },
  clearError({ commit }) {
    commit('CLEAR_ERROR')
  },
}

const getters = {
  loading: state => state.loading,
  error: state => state.error
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}