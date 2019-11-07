import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data1: []
  },
  mutations: {
    setList(state, payload) {
      state.data1 = payload
    }
  },
  actions: {
    getList({ commit }) {
      Axios.get('/list').then(({ data }) => {
        commit('setList', data)
      })
    }
  },
  modules: {
  }
})
