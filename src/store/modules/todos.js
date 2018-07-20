// Todos Store Module
import { SET_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../mutation-types'
import { API_REMOVE_TODO, API_ADD_TODO, API_UPDATE_TODO } from '../actions'
import { deleteTodo, postTodo, putTodo } from '../../api'

export default {
  state: {
    todos: []
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    sortedTodosByName: state => {
      let sorted = state.todos.sort(sortByText)
      // sorted = sorted.sort(sortDoneToBottom)
      // sorted = sorted.sort(sortImportantToTop)
      return sorted
    },
    sortedTodosByDateDesc: state => {
      let sorted = state.todos.sort(sortByDateDesc)
      return sorted
    },
    sortedTodosByDateAsc: state => {
      let sorted = state.todos.sort(sortByDateAsc)
      return sorted
    },
    getTodoCountForCategory: state => categoryID => {
      return state.todos.filter(todo => todo.category_id === categoryID).length
    }
  },
  mutations: {
    [SET_TODOS] (state, todos) {
      state.todos = todos
    },
    [ADD_TODO] (state, todo) {
      state.todos.push(todo)
    },
    [REMOVE_TODO] (state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    [UPDATE_TODO] (state, updatedTodo) {
      state.todos = state.todos.map(todo => {
        if (todo.id === updatedTodo.id) return updatedTodo
        return todo
      })
    }
  },
  actions: {
    // actions for asynchronous mutations (e.g. API calls)
    [API_REMOVE_TODO]: ({ commit }, id) => {
      deleteTodo(id).then(
        commit(REMOVE_TODO, id)
      )
    },
    [API_ADD_TODO]: ({ commit }, todo) => {
      postTodo(todo).then(response => {
        let newTodo = response
        if (newTodo.due) {
          newTodo = {
            ...newTodo,
            due: new Date(newTodo.due)
          }
        }
        commit(ADD_TODO, newTodo)
      })
    },
    [API_UPDATE_TODO]: ({ commit }, todo) => {
      putTodo(todo).then(response => commit(UPDATE_TODO, todo))
    }
  }
}

function sortByDateDesc (a, b) {
  if (!a.due && b.due) return 1
  if (a.due && !b.due) return -1
  if (a.due && b.due) return b.due - a.due
  return 0
}

function sortByDateAsc (a, b) {
  if (!a.due && b.due) return 1
  if (a.due && !b.due) return -1
  if (a.due && b.due) return a.due - b.due
  return 0
}

function sortByText (a, b) {
  return a.text.toLowerCase().localeCompare(b.text.toLowerCase())
}

function sortDoneToBottom (a, b) {
  if ((a.done && b.done) || !(a.done || b.done)) return 0
  if (a.done && !b.done) return 1
  if (!a.done && b.done) return -1
}

function sortImportantToTop (a, b) {
  if (a.important && b.important) return a > b
  if (a.important && !b.important) return -1
  if (!a.important && b.important) return 1
  if (!(a.important || b.important)) return 0
}
