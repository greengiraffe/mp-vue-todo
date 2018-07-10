// Todos Store Module

const SET_TODOS = 'SET_TODOS'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const UPDATE_TODO = 'UPDATE_TODO'

export default {
  state: {
    todos: [
      { id: 1, text: 'Create vue.js ToDo App', important: true, done: false, due: new Date('2018-07-25T09:45:00'), category: 1 },
      { id: 2, text: 'Buy milk', important: false, done: false, due: undefined, category: 2 },
      { id: 3, text: 'Watch Batman', important: false, done: false, due: undefined, category: undefined }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
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
