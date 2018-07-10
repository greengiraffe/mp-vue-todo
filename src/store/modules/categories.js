// Categories Store Module

const SET_CATEGORIES = 'SET_CATEGORIES'
const ADD_CATEGORY = 'ADD_CATEGORY'
const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

export default {
  state: {
    categories: [
      { id: 1, name: 'HTW' },
      { id: 2, name: 'Groceries' }
    ]
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
    }
  },
  actions: {
    // actions for asynchronous mutations (e.g. API calls)
  }
}
