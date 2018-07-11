<template>
  <div>
    <h2>ToDo</h2>
    <ul class="todo-list">
      
      <li v-for="todo in todos" :key="todo.id" class="todo-list__item">
        <Todo :todo="todo" />
      </li>
      <li class="todo-list__item"><TodoInput /></li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo.vue'
import TodoInput from './TodoInput.vue'

export default {
  components: { Todo, TodoInput },
  computed: {
    todos () {
      return this.$store.getters.sortedTodos
    }
  }
}
</script>

<style lang="scss">
.todo-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.todo-list__item:last-child {
  margin-top: 2rem;
}
</style>
