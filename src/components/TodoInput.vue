<template>
  <div class="todo-input">
    <input type="text" class="todo-input__field" placeholder="...new Todo">
    <div class="todo-input__options">
      <div>
        <label for="todo-due-date-input">Due</label>
        <input class="todo-input__date" type="date" name="Todo due date" id="todo-due-date-input">
      </div>
      <div>
        <label for="todo-category-select">Category</label>
        <select class="todo-input__category" name="Category" id="todo-category-select">
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>
    </div>
    <button class="todo-input__button">Add</button>
  </div>
</template>

<script>
export default {

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
