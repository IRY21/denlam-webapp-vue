import { config, rejectError, sortAlphabet, axiosDataWrap } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS } from '@/store/mutation-types/setItems'

const state = {
  items: null,
  item: null
}

const mutations = {
  
}

const actions = {
  fetchProducts({ commit, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.get(`${config.apiUrl}/product/show_all`)
      .then((res) => {
        const products = res.data;
        commit(SET_ITEMS, { resource: 'products', items: products}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return products;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  addProduct({ state, commit, dispatch }, productToCreate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/product/add`, axiosDataWrap(productToCreate))
      .then((res) => {
        const product = res.data;
        const products = state.items;

        const filtered = [ ...products, product].sort(sortAlphabet);

        commit(SET_ITEMS, { resource: 'products', items: filtered}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return products;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  updateProduct({ state, commit, dispatch }, productToUpdate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/product/update`, axiosDataWrap(productToUpdate))
      .then((res) => {
        const product = res.data;
        const products = state.items;
        const index = state.items.findIndex(uProduct => uProduct.id === product.id);
        products[index] = product;
        
        commit(SET_ITEMS, { resource: 'products', items: products}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return product;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  deleteProduct({ state, commit, dispatch }, productToDelete) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/product/delete`, axiosDataWrap(productToDelete))
      .then((res) => {
        const product = res.data;
        const products = state.items;
        const index = state.items.findIndex(uProduct => uProduct.id === product.id);
        
        products.splice(index, 1);
        
        commit(SET_ITEMS, { resource: 'products', items: products}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return product;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  }
}

const getters = {
  getProducts: state => state.items,
  getProduct: state => state.item,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}