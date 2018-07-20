<template>
  <div class="todo-input">
    <input v-model="text" type="text" class="todo-input__field" placeholder="...new Todo">
    <div class="todo-input__options">
      <div>
        <label for="todo-due-date-input">Due</label>
        <input ref="dateInput" :value="dueDateString" @blur="due = $event.target.valueAsDate" class="todo-input__date" type="date" name="Todo due date" id="todo-due-date-input">
      </div>
      <div>
        <label for="todo-category-select">Category</label>
        <select v-model="category_id" class="todo-input__category" name="Category" id="todo-category-select">
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
        </select>
      </div>
    </div>
    <button @click="emitClick" class="todo-input__button">{{ buttonTitle }}</button>
  </div>
</template>

<script>

export default {
  props: {
    todo: {
      text: String,
      due: Date,
      done: Boolean,
      important: Boolean,
      category_id: Number,
      id: Number,
    },
    buttonTitle: {
      type: String,
      default: 'Add'
    }
  },
  data: function () {
    if (this.todo) {
      return {
        text: this.todo.text,
        category_id: this.todo.category_id,
        due: this.todo.due,
      }
    }
    return {
      text: '',
      category_id: 1, // TODO de-hardcode (breaks if no category is available)
      due: null,
    }
  },
  computed: {
    categories: function () {
      return this.$store.state.categories.categories
    },
    dueDateString: function () {
      if (!this.due) return ''
      const yyyy = this.due.getFullYear().toString();                                  
      const mm = ('0' + (this.due.getMonth() + 1).toString()).slice(-2);
      const dd  = ('0' + (this.due.getDate().toString())).slice(-2);
      return `${yyyy}-${mm}-${dd}`
    }
  },
  methods: {
    emitClick: function () {
      this.$emit('edited', {
        text: this.text,
        category_id: this.category_id,
        due: this.due,
        important: false,
        done: false,
      })
      this.cleanInputs();
    },
    cleanInputs: function () {
      this.text = ''
      this.category_id = 1 // TODO de-hardcode
      this.due = ''
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
  width: 100%;
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
