<template>
  <div class="app">
    <h1 class="app__title">Vue.js ToDo</h1>
    <div class="app__grid">
      <CategoryList />
      <TodoList />
    </div>
  </div>
</template>

<script>
import CategoryList from './CategoryList.vue'
import TodoList from './TodoList.vue'

export default {
  components: { CategoryList, TodoList }
}
</script>

<style lang="scss">
@import '../styles/normalize.css';

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
}

button {
  background: none;
  border: 2px solid #0043a8e1;
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  font-size: inherit;
  cursor: pointer;

  &:hover {
    background: #0043a8e1;
    color: #fff;
  }
}

.app {
  max-width: 900px;
  margin: 0 auto;
  height: 100vh;
  padding: 1rem;
}

.app__grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 2rem;
  margin-top: 1rem;
}

.app__title {
}
</style>

