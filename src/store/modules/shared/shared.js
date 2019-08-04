export default {
  namespaced: true,
  state: {
    loading: false,
    error: null
  },
  mutations: {
    SET_LOADING (state) {
      state.loading = true;
    },
    CLEAR_LOADING (state) {
      state.loading = false;
    },
    SET_ERROR (state, payload) {
      state.error = payload;
    },
    CLEAR_ERROR (state, token) {
      state.error = null;
    }
  },
  actions: {
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
  },
  getters: {
    loading: state => state.loading,
    error: state => state.error
  }
}