import Vue from 'vue'
import Vuex from 'vuex'
import state from '../store/state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    tosing(state,id){
      state.sing=id
      localStorage.setItem('sing',JSON.stringify(state.sing))
    },
    tosong(state,id){
      state.song=id
      localStorage.setItem('song',JSON.stringify(state.song))
    }
    // changesingdetailtrue(state){
    //   state.singdetail=true
    // },
    // changesingdetailfalse(state){
    //   state.singdetail=false
    // }
  },
  actions: {
  },
  getters:{
    getsingid(state){
      return state.sing
    }
  },
  modules: {
  }
})
