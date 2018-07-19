import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import categories from './modules/categories'
import { SET_CATEGORIES, SET_TODOS } from './mutation-types'
import { API_FETCH_DATA } from './actions'
import { getCategories, getTodos } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    categories
  },
  actions: {
    [API_FETCH_DATA]: ({ commit }) => {
      Promise.all([getCategories, getTodos])
        .then(responses => {
          commit(SET_CATEGORIES, responses[0])
          commit(SET_TODOS, responses[1])
        })
    }
  }
})

export * from './mutation-types'
export * from './actions'
