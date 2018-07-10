<template>
  <div class="app">
    <h1>Vue.js ToDo</h1>
    <Todo />
    <Todo />
    <Todo />
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  components: { Todo }
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

