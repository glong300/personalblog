import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  switchCom: true
}

export default new Vuex.Store({
  state,
  mutations: {
    updateSwitchCom(state, payLoad) {
      state.switchCom = payLoad
    }
  }
})
