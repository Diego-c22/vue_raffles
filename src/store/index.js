import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    raffle: {},
    raffles: [],
    token: '',
    tokenRefresh: '',
    editState: false
  },
  mutations: {
    setRaffle (state, payload = {}) {
      state.raffle = payload
    },

    setToken (state, payload = '') {
      localStorage.setItem('token', payload)
      state.token = payload
    },

    setTokenRefresh (state, payload = '') {
      localStorage.setItem('tokenRefresh', payload)
      state.tokenRefresh = payload
    },

    setRaffles (state, payload = []) {
      state.raffles = payload
    },

    setEditState (state, payload = false) {
      state.editState = payload
    }
  },
  getters: {
    getToken (state) {
      if (state.token === '') {
        state.token = localStorage.getItem('token')
      }
      return state.token
    }
  },
  actions: {
  },
  modules: {
  }
})
