<template>
  <div>
    <h2>ToDo</h2>
    <ul class="todo-list">
      <li class="todo-list__item"><Todo /></li>
      <li class="todo-list__item"><Todo /></li>
      <li class="todo-list__item"><Todo /></li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  components: { Todo }
}
</script>

<style lang="scss">
.todo-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
