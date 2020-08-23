export default {
  namespaced: true,
  state: {
    firstName: 'z',
    age: 20
  },
  getters: {
    fullName (state) {
      return state.firstName + 'z'
    }
  },
  mutations: {
    GROW (state) {
      state.age += 1
    }
  },
  actions: {
    grow ({ commit }) {
      setTimeout(() => {
        commit('GROW')
      }, 1000)
    }
  }
}
