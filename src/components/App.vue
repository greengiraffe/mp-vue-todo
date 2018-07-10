<template>
  <div class="app">
    <h1>Vue.js ToDo</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './TodoList.vue'

export default {
  components: { TodoList }
}
</script>

<style lang="scss">
@import '../styles/normalize.css';

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
}

.app {
  max-width: 900px;
  margin: 0 auto;
}
</style>

