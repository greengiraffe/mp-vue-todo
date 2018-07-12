<template>
  <div class="todo">
    <template v-if="editMode">
      <TodoInput :todo="todo" buttonTitle="Save" @edited="saveEdit"/>
    </template>
    <template v-else>
      <fa-icon @click="toggleDone" class="todo__done" :icon="doneIcon"></fa-icon>
      <span class="todo__text">{{ todo.text }}</span>
      <div class="todo__info">
        <template v-if="todo.due">
          <time :datetime="todo.due" class="todo__due">{{ dueDateString }}</time>
        </template>
        <div class="todo__actions">
          <fa-icon @click="deleteTodo" icon="trash"></fa-icon>
          <fa-icon @click="editMode = !editMode" icon="edit"></fa-icon>
        </div>
        <fa-icon @click="toggleImportant" class="todo__important" :icon="[importantIconPrefix, 'star']"></fa-icon>
      </div>
    </template>
  </div>
</template>

<script>
import { UPDATE_TODO, REMOVE_TODO } from '../store'
import TodoInput from './TodoInput.vue'

export default {
  components: { TodoInput },
  props: {
    todo: {
      text: String,
      due: Date,
      done: Boolean,
      important: Boolean,
      id: Number,
    },
  },
  data: function () {
    return {
      editMode: false
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
  },
  methods: {
    toggleImportant: function () {
      this.updateTodo({
        ...this.todo,
        important: !this.todo.important
      })
    },
    toggleDone: function () {
      this.updateTodo({
        ...this.todo,
        done: !this.todo.done
      })
    },
    saveEdit: function (todo) {
      const { due, text, category } = todo
      this.updateTodo({
        ...this.todo,
        due, text, category
      })
      this.editMode = false
    },
    updateTodo: function (updatedTodo) {
      this.$store.commit(UPDATE_TODO, updatedTodo)
    },
    deleteTodo: function () {
      if(confirm(`Do you want to delete "${this.todo.text}"?`)) {
        this.$store.commit(REMOVE_TODO, this.todo.id)
      }
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
