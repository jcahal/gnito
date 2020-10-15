import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios, router)

export default new Vuex.Store({
  state: {
    flash: {
      on: false,
      context: '',
      message: '',
      timeout: 0
    },
    drop: {
      message: '',
      password: '',
      title: ''
    },
  },
  mutations: {
    SET_FLASH(state, flash) {
      state.flash = flash
      state.flash.on = true
      
      // Staged for removal, close button on flash makes more sense
      state.flash.timeout = 10
      setTimeout(() => { state.flash = { 
        on: false, 
        context: '',
        message: '',
      }}, state.flash.timeout * 1000)
    },
    SET_DROP(state, drop) {
      state.drop = drop
    }
  },
  actions: {
    retrieveDrop(context) {
      axios.get(`http://localhost:3000/api${router.currentRoute.fullPath}`).then(response => {
        const drop = response.data
        context.commit('SET_DROP', drop)
      })
    },
    setFlash(context, flash) {
      context.commit('SET_FLASH', flash)
    }
  },
  getters: {

  }
})
