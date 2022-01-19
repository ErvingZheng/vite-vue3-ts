import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'useApp', // id必填，且需要唯一
  state: () => {
    return { isCollapse: false }
  },
  // 通过actions修改state
  // 支持async/await语法
  // 可以调用actions里的另一个方法
  // 可以调用其他store的actions方法
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    // strategies: [
    //   {
    //     storage: localStorage,
    //     paths: [] // 可指定哪些数据要持久化 如['isCollapse']
    //   }
    // ]
  }
  // getters: {
  //   isCollapse: (state) => {
  //     return state.isCollapse
  //   }
  // }
})