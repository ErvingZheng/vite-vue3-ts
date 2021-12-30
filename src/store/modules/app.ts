import { Module, MutationTree } from 'vuex'
import { GlobalState } from '../index'
import { TOGGLE_COLLAPSE } from '../mutation-types'

export interface AppState {
  isCollapse: boolean
}

const appState: AppState = {
  isCollapse: false,
}

const appMutations: MutationTree<AppState> = {
  [TOGGLE_COLLAPSE]: (state) => {
    state.isCollapse = !state.isCollapse
  },
}

export const app: Module<AppState, GlobalState> = {
  namespaced: true,

  state: appState,

  mutations: appMutations,
}
