import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    categories
  }
})
