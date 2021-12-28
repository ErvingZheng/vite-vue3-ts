import { Module } from 'vuex'
import { GlobalState } from '../index'

export interface AppState {
  isCollapse: boolean
}

export const app: Module<AppState, GlobalState> = {
  namespaced: true,

  state: {
    isCollapse: false,
  },
}
