<template>
  <div class="todo">
    <fa-icon class="todo__check" :icon="['far', 'circle']"></fa-icon>
    <span class="todo__name">Name of Todo</span>
    <div class="todo__info">
      <time class="todo__due">18.07.2018</time>
      <fa-icon :icon="['far', 'star']"></fa-icon>
      <div class="todo__actions">
        <fa-icon icon="edit"></fa-icon>
        <fa-icon icon="trash"></fa-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.todo {
  display: flex;
  padding: 1rem 0;

  + .todo {
    border-top: 1px solid lightgray;
  }

  &:hover {
    .todo__actions {
      display: inline;
    }
  }

  svg {
    cursor: pointer;
  }
}

.todo__name {
  margin-left: 1rem;
}

.todo__info {
  margin-left: auto;

  svg {
    margin-left: .5rem;
  }
}

.todo__actions {
  display: none;
}
</style>
