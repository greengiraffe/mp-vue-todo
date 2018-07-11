// Todos Store Module

const SET_TODOS = 'SET_TODOS'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const UPDATE_TODO = 'UPDATE_TODO'

export default {
  state: {
    todos: [
      { id: 1, text: 'Create vue.js ToDo App', important: false, done: false, due: new Date('2018-07-25T09:45:00'), category: 1 },
      { id: 2, text: 'Buy milk', important: true, done: false, due: undefined, category: 2 },
      { id: 3, text: 'Watch Batman', important: false, done: true, due: undefined, category: undefined },
      { id: 4, text: 'Watch Star Wars', important: false, done: true, due: undefined, category: undefined },
      { id: 5, text: 'Watch Lord of the Rings', important: false, done: false, due: undefined, category: undefined }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    sortedTodos: state => {
      return state.todos.sort((a, b) => {
        // check if done
        if (a.done && b.done) return 0
        if (a.done && !b.done) return 1
        if (!a.done && b.done) return -1
        if (!(a.done || b.done)) {
          // check if important
          if (a.important && b.important) return a > b
          if (a.important && !b.important) return -1
          if (!a.important && b.important) return 1
          if (!(a.important || b.important)) return 0
        }
      })
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
