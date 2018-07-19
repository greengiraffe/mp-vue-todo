import { getRequest, postRequest, putRequest, deleteRequest } from './utilities'

const API_URL = 'https://vue-js-todo-api.herokuapp.com'

// Categories
export const getCategories = getRequest(`${API_URL}/categories`)
export const postCategory = category => postRequest(`${API_URL}/categories`, category)
export const putCategory = category => putRequest(`${API_URL}/categories/${category.id}`, category)
export const deleteCategory = id => deleteRequest(`${API_URL}/categories/${id}`)

// Todos
export const getTodos = getRequest(`${API_URL}/todos`)
export const postTodo = todo => postRequest(`${API_URL}/todos`, todo)
export const putTodo = todo => putRequest(`${API_URL}/todos/${todo.id}`, todo)
export const deleteTodo = id => deleteRequest(`${API_URL}/todos/${id}`)
