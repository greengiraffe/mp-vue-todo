// Todos Store Module
import { SET_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../mutation-types'

export default {
  state: {
    todos: [
      { id: 1, text: 'Create vue.js ToDo App', important: false, done: false, due: new Date('2018-07-25T09:45:00'), category: 1 },
      { id: 2, text: 'Buy milk', important: true, done: false, due: undefined, category: 2 },
      { id: 3, text: 'Watch Batman', important: false, done: true, due: undefined, category: 3 },
      { id: 4, text: 'Watch Star Wars', important: false, done: true, due: undefined, category: 3 },
      { id: 5, text: 'Watch Lord of the Rings', important: false, done: false, due: undefined, category: 3 },
      { id: 6, text: 'Buy spaghetti', important: false, done: false, due: new Date('2018-07-20T09:45:00'), category: 2 },
      { id: 7, text: 'Do math homework', important: false, done: false, due: new Date('2018-07-18T09:45:00'), category: 1 },
      { id: 8, text: 'Do a workout', important: true, done: false, due: undefined, category: undefined }
    ]
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
