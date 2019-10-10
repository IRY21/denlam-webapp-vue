import { config, rejectError, axiosDataWrap } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS, SET_ITEM } from '@/store/mutation-types/setItems'
import { REMOVE_CLIENT } from '@/store/mutation-types/projects'

const state = {
  items: [],
  item: null,
  types: null
}

const mutations = {
  [REMOVE_CLIENT] (state, projectToRemove) {
    const index = state.items.findIndex(function (item) {
      if (item.id === projectToRemove.id) return true;
      return false;
    });
    if (index !== -1) state.items.splice(index, 1);
  }
}

const actions = {
  fetchProjects({ state, commit, dispatch }, newProjectsParam ) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/project/show_all`, axiosDataWrap(newProjectsParam))
      .then((res) => {
        const projects = res.data;
        let uniqueProjects = state.items;
        if (uniqueProjects.length !== 0) {
          // concatenate state.items and projects without duplicates
          for(var i = 0, l = uniqueProjects.length; i < l; i++) {
            for(var j = 0, ll = projects.length; j < ll; j++) {
                if(uniqueProjects[i].id === projects[j].id) {
                  uniqueProjects.splice(i, 1, projects[j]);
                  projects.splice(j, 1);
                  break;
                }
            }
          }
          commit(SET_ITEMS, { resource: 'projects', items: [...uniqueProjects, ...projects]}, {root: true});
        } else {
          commit(SET_ITEMS, { resource: 'projects', items: projects}, {root: true});
        }

        dispatch('shared/clearLoading', null, { root: true });
        return projects;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  searchProjects({ commit, dispatch }, searchProjectsParam ) {
    dispatch('shared/setLoading', null, { root: true });

    return axiosInstance.post(`${config.apiUrl}/project/show_all`, axiosDataWrap(searchProjectsParam))
      .then((res) => {
        const projects = res.data;
        commit(SET_ITEMS, { resource: 'projects', items: projects}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return projects;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  fetchProjectStatus({ commit, dispatch }) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/project_status/show_all`)
      .then((res) => {
        const projectStatuses = res.data;
        commit(SET_TYPES, projectStatuses);
        dispatch('shared/clearLoading', null, { root: true });
        return projectStatuses;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  fetchProject({ commit, dispatch }, projectId) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/project/show`, axiosDataWrap({id: projectId}))
      .then((res) => {
        const project = res.data;
        commit(SET_ITEM, { resource: 'projects', item: project}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return project;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  addProject({ dispatch }, projectToAdd) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/project/add`, axiosDataWrap(projectToAdd))
      .then((res) => {
        const project = res.data;
        dispatch('shared/clearLoading', null, { root: true });
        return project;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  updateProject({ dispatch, commit }, projectToUpdate) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/project/update`, axiosDataWrap(projectToUpdate))
      .then((res) => {
        const project = res.data;
        commit(SET_ITEM, { resource: 'projects', item: project}, {root: true});
        dispatch('shared/clearLoading', null, { root: true });
        return project;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  },
  deleteProject({ dispatch, commit }, projectId) {
    dispatch('shared/setLoading', null, { root: true });
    return axiosInstance.post(`${config.apiUrl}/client/delete`, axiosDataWrap(projectId))
      .then((res) => {
        const project = res.data;
        commit(REMOVE_PROJECT, project);
        dispatch('shared/clearLoading', null, { root: true });
        return project;
      })
      .catch((err) => {
        dispatch('shared/clearLoading', null, { root: true });
        return rejectError(err);
      })
  }
}

const getters = {
  getProjects: state => state.items,
  isProjectsLoaded: state => !!state.items.length,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}