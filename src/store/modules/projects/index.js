import { config, rejectError, axiosDataWrap } from '@/_helpers'
import axiosInstance from '@/_services/axios';

import { SET_ITEMS, SET_ITEM } from '@/store/mutation-types/setItems'
import { REMOVE_PROJECT, SET_NEW_PROJECTS, SET_IN_PROGRESS_PROJECTS, SET_DONE_PROJECTS, SET_SIGNED_PROJECTS } from '@/store/mutation-types/projects'

const state = {
  items: [],
  item: null, 
  types: null,
  new: [],
  inProgress: [],
  done: [],
  signed: [],
}

const mutations = {
  [SET_NEW_PROJECTS] (state, payload) {
    state.new = payload;
  },
  [SET_IN_PROGRESS_PROJECTS] (state, payload) {
    state.inProgress = payload;
  },
  [SET_DONE_PROJECTS] (state, payload) {
    state.done = payload;
  },
  [SET_SIGNED_PROJECTS] (state, payload) {
    state.signed = payload;
  },
  [REMOVE_PROJECT] (state, projectToRemove) {
    const index = state.items.findIndex(function (item) {
      if (item.id === projectToRemove.id) return true;
      return false;
    });
    if (index !== -1) state.items.splice(index, 1);
  }
}

const actions = {
  fetchProjects({ state, commit, dispatch }, newProjectsParam) {
    dispatch('shared/setLoading', null, { root: true });
    let type = null;
    const statusId = newProjectsParam.status_id;
    switch (statusId) {
      case 1: {
        type = 'new';
        break;
      }
      case 2: {
        type = 'inProgress';
        break;
      }
      case 3: {
        type = 'done';
        break;
      }
      case 4: {
        type = 'signed';
        break;
      }
      default: {
        type = null;
      }
    }
    return axiosInstance.post(`${config.apiUrl}/project/show_all`, axiosDataWrap(newProjectsParam))
      .then((res) => {
        const projects = res.data;
        
        let uniqueProjects = state[type];
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
          if (statusId) {
            switch (statusId) {
              case 1: {
                commit(SET_NEW_PROJECTS, [...uniqueProjects, ...projects]);
                break;
              }
              case 2: {
                commit(SET_IN_PROGRESS_PROJECTS, [...uniqueProjects, ...projects]);
                break;
              }
              case 3: {
                commit(SET_DONE_PROJECTS, [...uniqueProjects, ...projects]);
                break;
              }
              case 4: {
                commit(SET_SIGNED_PROJECTS, [...uniqueProjects, ...projects]);
                break;
              }
            }
          } else {
            commit(SET_ITEMS, { resource: 'projects', items: [...uniqueProjects, ...projects]}, {root: true});
          }
        } else {
          if (type) {
            switch (statusId) {
              case 1: {
                commit(SET_NEW_PROJECTS, projects);
                break;
              }
              case 2: {
                commit(SET_IN_PROGRESS_PROJECTS, projects);
                break;
              }
              case 3: {
                commit(SET_DONE_PROJECTS, projects);
                break;
              }
              case 4: {
                commit(SET_SIGNED_PROJECTS, projects);
                break;
              }
              default: {
                type = null;
              }
            }
          } else {
            commit(SET_ITEMS, { resource: 'projects', items: projects}, {root: true});
          }
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
    let type = null;
    const statusId = searchProjectsParam.status_id;
    switch (statusId) {
      case 1: {
        type = 'new';
        break;
      }
      case 2: {
        type = 'inProgress';
        break;
      }
      case 3: {
        type = 'done';
        break;
      }
      case 4: {
        type = 'signed';
        break;
      }
      default: {
        type = null;
      }
    }

    return axiosInstance.post(`${config.apiUrl}/project/show_all`, axiosDataWrap(searchProjectsParam))
      .then((res) => {
        const projects = res.data;
        
        if (type) {
          switch (statusId) {
            case 1: {
              commit(SET_NEW_PROJECTS, projects);
              break;
            }
            case 2: {
              commit(SET_IN_PROGRESS_PROJECTS, projects);
              break;
            }
            case 3: {
              commit(SET_DONE_PROJECTS, projects);
              break;
            }
            case 4: {
              commit(SET_SIGNED_PROJECTS, projects);
              break;
            }
            default: {
              type = null;
            }
          }
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
  getNewProjects: state => state.new,
  getInProgressProjects: state => state.inProgress,
  getDoneProjects: state => state.done,
  getSignedProjects: state => state.signed,
  isProjectsLoaded: state => !!state.items.length,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}