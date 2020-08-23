import Vue from 'vue'
import Vuex from 'vuex'
import people from './people'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Jack'
  },
  getters: {
    namePlus: state => state.name + '01'
  },
  mutations: {
    CHANGE_NAME (state, obj) {
      state.name = state.name + obj.str
    }
  },
  actions: {
    changeName ({ state, commit }) {
      setTimeout(() => {
        commit('CHANGE_NAME', { str: 'kk' })
      }, 1000)
    }
  },
  modules: {
    people
  }
})
