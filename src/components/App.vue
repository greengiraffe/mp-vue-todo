<template>
  <div class="app">
    <h1 class="app__title">Vue.js ToDo</h1>
    <transition name="fade" mode="out-in">
      <LoadingScreen v-if="loading" />
      <div v-else class="app__grid">
        <CategoryList />
        <TodoList />
      </div>
    </transition>
  </div>
</template>

<script>
import CategoryList from './CategoryList.vue'
import TodoList from './TodoList.vue'
import LoadingScreen from './LoadingScreen.vue'
import { API_FETCH_DATA } from '../store'

export default {
  components: { CategoryList, TodoList, LoadingScreen },
  computed: {
    loading: function () {
      return this.$store.state.loading
    }
  },
  created: function () {
    this.$store.dispatch(API_FETCH_DATA)
  }
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
  border: 2px solid #0043a8;
  color: #0043a8;
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  font-size: inherit;
  cursor: pointer;

  &:hover {
    background: #0043a8;
    color: #fff;
  }
}

input, select {
  border: 0;
  border-bottom: 2px solid lightgray;
  font-size: inherit;
}

.app {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem 1rem;
}

.app__grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 2rem;
  margin-top: 1rem;
}

.app__title {
  text-align: center;
  margin-bottom: 2rem;

  &::after {
    content: "";
    display: block;
    margin: 2rem 0;
    width: 100%;
    height: 2px;
    background: lightgray;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

