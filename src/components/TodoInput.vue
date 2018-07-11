<template>
  <div class="todo-input">
    <input v-model="text" type="text" class="todo-input__field" placeholder="...new Todo">
    <div class="todo-input__options">
      <div>
        <label for="todo-due-date-input">Due</label>
        <input ref="dateInput" class="todo-input__date" type="date" name="Todo due date" id="todo-due-date-input">
      </div>
      <div>
        <label for="todo-category-select">Category</label>
        <select v-model="category" class="todo-input__category" name="Category" id="todo-category-select">
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
        </select>
      </div>
    </div>
    <button @click="addTodo" class="todo-input__button">Add</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      text: '',
      category: undefined,
      due: undefined,
    }
  },
  methods: {
    addTodo: function () {
      this.$store.commit('ADD_TODO', {
        text: this.text,
        category: this.category, // TODO use value instead of name
        due: this.$refs.dateInput.valueAsDate,
        important: false,
        done: false
      })
      this.cleanInputs();
    },
    cleanInputs: function () {
      this.text = ''
      this.category = ''
      this.$refs.dateInput.value = ''
    }
  }
}
</script>

<style lang="scss">
.todo-input {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 5rem;
  grid-gap: 0.5rem; 
}

.todo-input__field {
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
}

.todo-input__options {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  display: flex;
  width: 75%;
  margin-top: 0.5rem;

  div {
    display: flex;
    width: 100%;
    + div {
      margin-left: 2rem;
    }
  }

  .todo-input__button {
    grid-column-start: 2;
  }

  input, select {
    width: 100%;
    margin-left: 0.5rem;
  }
}
</style>
