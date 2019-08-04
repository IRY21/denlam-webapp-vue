import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user: null,
    token: null
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token;
    }
  },
  actions: {
    login ({ commit }, formData) {
      commit('shared/SET_LOADING', null, { root: true })
      return axios.post('http://api2.denlam.ru', formData).then((res) => {
        const data = res.data
        localStorage.setItem("access_token", data.auth_access_token);
        commit('SET_TOKEN', data.auth_access_token);
        commit('shared/CLEAR_LOADING', null, { root: true })
      })
      .catch(err => {
        commit('shared/CLEAR_LOADING', null, { root: true })
        return Promise.reject(err)
      })
    },
    getAuthUser({ commit }) {
      commit('shared/SET_LOADING', null, { root: true })
      const authUser = getters['authUser'];
      if (authUser) { 
        commit('shared/CLEAR_LOADING', null, { root: true })
        return Promise.resolve(authUser)
      }
      if (!authUser) { 
        commit('shared/CLEAR_LOADING', null, { root: true })
        return Promise.reject({message: 'noAuthUser'})
      }

      /* const config = {
        headers: {
          'Cache-Control': 'no-cache'
        }
      }

      return axios.get('http://api2.denlam.ru', config) */
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
    authUser: state => state.user,
    token: state => state.token
  }
}