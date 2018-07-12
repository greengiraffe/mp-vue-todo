<template>
  <div class="todo-list">
    <div class="todo-list__header">
      <h2 class="todo-list__title">ToDo</h2>
      <label class="todo-list__sort-select">
        Sort by
        <select v-model="sortSelect" name="Sort todos" id="sort-todo-select">
          <option v-for="option in sortOptions" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
      </label>
    </div>
    <ul class="todo-list__list">
      <li v-for="todo in filter(todos)" :key="todo.id" class="todo-list__item">
        <Todo :todo="todo" />
      </li>
      <li class="todo-list__item"><TodoInput /></li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo.vue'
import TodoInput from './TodoInput.vue'

const SORT_BY_NAME = 'SORT_BY_NAME'
const SORT_BY_DATE_DESC = 'SORT_BY_DATE_DESC'
const SORT_BY_DATE_ASC = 'SORT_BY_DATE_ASC'

export default {
  components: { Todo, TodoInput },
  data: function () {
    return {
      sortOptions: [
        { text: 'Name', value: SORT_BY_NAME},
        { text: 'Due date (descending)', value: SORT_BY_DATE_DESC},
        { text: 'Due date (ascending)', value: SORT_BY_DATE_ASC},
      ],
      sortSelect: SORT_BY_NAME,
    }
  },
  computed: {
    todos: function () {
      switch (this.sortSelect) {
        case SORT_BY_NAME:
          return this.$store.getters.sortedTodosByName
        case SORT_BY_DATE_DESC:
          return this.$store.getters.sortedTodosByDateDesc
        case SORT_BY_DATE_ASC:
          return this.$store.getters.sortedTodosByDateAsc
      }
    },
    selectedCategory: function () {
      return this.$store.state.categories.selected
    }
  },
  methods: {
    filter: function (todos) {
      if (this.selectedCategory === undefined) return this.todos
      return this.todos.filter(todo => {
        return todo.category === this.selectedCategory
      })
    } 
  }
}
</script>

<style lang="scss">
.todo-list__header {
  display: flex;
  align-items: baseline;
}

.todo-list__title {
  display: inline-block;
}

.todo-list__sort-select {
  margin-left: auto;

  select {
    margin-left: 0.5rem;
  }
}

.todo-list__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.todo-list__item:last-child {
  margin-top: 2rem;
}
</style>
