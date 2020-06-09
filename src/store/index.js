import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  counter: 1000
}

export default new Vuex.Store({
  state,
})