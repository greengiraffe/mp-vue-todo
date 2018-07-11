<template>
  <div>
    <h2>ToDo</h2>
    <ul class="todo-list">
      <li class="todo-list__item"><Todo /></li>
      <li class="todo-list__item"><Todo /></li>
      <li class="todo-list__item"><Todo /></li>
      <li class="todo-list__item"><TodoInput /></li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo.vue'
import TodoInput from './TodoInput.vue'

export default {
  components: { Todo, TodoInput }
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
