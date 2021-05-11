import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true
  },
  mutations: {
    setIsLoading(state) {
      state.isLoading = false
    }
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading
    }
  },
  actions: {

  }
})
