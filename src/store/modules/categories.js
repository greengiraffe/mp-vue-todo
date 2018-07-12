// Categories Store Module
import { SET_CATEGORIES, ADD_CATEGORY, REMOVE_CATEGORY, UPDATE_CATEGORY, SET_SELECTED_CATEGORY } from '../mutation-types'

export default {
  state: {
    categories: [
      { id: 1, name: 'HTW' },
      { id: 2, name: 'Groceries' },
      { id: 3, name: 'Movies' }
    ],
    selected: undefined
  },
  getters: {
    // Getters behave similar to computed properties
  },
  mutations: {
    [SET_CATEGORIES] (state, categories) {
      state.categories = categories
    },
    [ADD_CATEGORY] (state, category) {
      state.categories.push(category)
    },
    [REMOVE_CATEGORY] (state, id) {
      state.categories = state.categories.filter(cat => cat.id !== id)
    },
    [UPDATE_CATEGORY] (state, updatedCategory) {
      state.categories = state.categories.map(cat => {
        if (cat.id === updatedCategory.id) return updatedCategory
        return cat
      })
    },
    [SET_SELECTED_CATEGORY] (state, id) {
      state.selected = id
    }
  },
  actions: {
    // actions for asynchronous mutations (e.g. API calls)
  }
}
