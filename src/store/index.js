import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import categories from './modules/categories'
import { SET_CATEGORIES, SET_TODOS, LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS } from './mutation-types'
import { API_FETCH_DATA } from './actions'
import { getCategories, getTodos } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    categories
  },
  state: {
    loading: true
  },
  mutations: {
    [LOAD_DATA_REQUEST]: state => {
      state.loading = true
    },
    [LOAD_DATA_SUCCESS]: state => {
      state.loading = false
    }
  },
  actions: {
    [API_FETCH_DATA]: ({ commit }) => {
      commit(LOAD_DATA_REQUEST)
      Promise.all([getCategories, getTodos])
        .then(responses => {
          let todos = responses[1].map(todo => {
            if (!todo.due) return todo
            return {
              ...todo,
              due: new Date(todo.due)
            }
          })
          commit(SET_CATEGORIES, responses[0])
          commit(SET_TODOS, todos)
          commit(LOAD_DATA_SUCCESS)
        })
    }
  }
})

export * from './mutation-types'
export * from './actions'
