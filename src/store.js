import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    setIsLoading(state) {
      this.isLoading = false
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
