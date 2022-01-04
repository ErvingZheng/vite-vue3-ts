import { Module } from 'vuex'
import { GlobalState } from '../index'
import { TOGGLE_COLLAPSE } from '../mutation-types'

export interface AppState {
  isCollapse: boolean
}

export const app: Module<AppState, GlobalState> = {
  namespaced: true,

  state: {
    isCollapse: false,
  },

  mutations: {
    [TOGGLE_COLLAPSE]: (state) => {
      state.isCollapse = !state.isCollapse
    },
  },

  actions: {
    toggleCollapse({ commit }) {
      commit(TOGGLE_COLLAPSE)
    },
  },
}
