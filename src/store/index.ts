import { InjectionKey } from 'vue'
import createPersistedState from "vuex-persistedstate"
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { AppState, app } from './modules/app'

export interface GlobalState {
  app: AppState
}

export const key: InjectionKey<Store<GlobalState>> = Symbol()

export const store = createStore<GlobalState>({
  modules: {
    app,
  },
  plugins: [
    // 数据持久化
    createPersistedState({
      paths: ["app"],
    }),
  ],
})

export function useStore(): Store<GlobalState> {
  return baseUseStore(key)
}
