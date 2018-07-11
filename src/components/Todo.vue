<template>
  <div class="todo">
    <fa-icon class="todo__done" :icon="doneIcon"></fa-icon>
    <span class="todo__text">{{ todo.text }}</span>
    <div class="todo__info">
      <template v-if="todo.due">
        <time :datetime="todo.due" class="todo__due">{{ dueDateString }}</time>
      </template>
      <div class="todo__actions">
        <fa-icon icon="trash"></fa-icon>
        <fa-icon icon="edit"></fa-icon>
      </div>
      <fa-icon class="todo__important" :icon="[importantIconPrefix, 'star']"></fa-icon>
    </div>
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
    }
  },
  computed: {
    doneIcon: function () {
      return this.todo.done ? ['fas', 'check-circle'] : ['far', 'circle']
    },
    importantIconPrefix: function () {
      return this.todo.important ? 'fas' : 'far'
    },
    dueDateString: function () {
      if (!this.todo.due) return ''
      return this.todo.due.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      })
    }
  }
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

.todo__text {
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
