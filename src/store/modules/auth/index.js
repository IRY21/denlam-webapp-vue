import axios from 'axios';

export default {
  namespaced: true,
  state: {
    token: null,
    loading: false
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token;
    },
    LOGIN_PENDING (state) {
      state.loading = true;
    },
    LOGIN_SUCCESS (state) {
      state.loading = false;
    }
  },
  actions: {
    login ({ commit }, formData) {
      commit('LOGIN_PENDING');
      return axios.post('http://api.denlam.ru/auth', formData).then((res) => {
        const data = res.data
        if (data.error) return new Promise((resolve, reject) => {
          reject(data.error)
        })
        localStorage.setItem("access_token", data.auth_access_token);
        commit('SET_TOKEN', data.auth_access_token);
        commit('LOGIN_SUCCESS');
      });
    },
    logout ({ commit }) {
      return new Promise((resolve) => {
        localStorage.removeItem("access_token");
        commit('SET_TOKEN', null);
        resolve();
      });
    }
  },
  getters: {
    token: state => state.token,
    loading: state => state.loading
  }
}