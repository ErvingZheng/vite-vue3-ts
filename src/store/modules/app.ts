import { Module } from 'vuex'
import { GlobalState } from '../index'

export interface AppState {
  sideMenuVisible: boolean
}

export const app: Module<AppState, GlobalState> = {
  namespaced: true,

  state: {
    sideMenuVisible: true,
  },
}
