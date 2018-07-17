<template>
<div class="category">
  <span class="category__name">{{ name }}</span>
  <span class="category__count">({{ todoCount }})</span>
</div>
</template>

<script>
export default {
  props: {
    name: String,
    id: Number,
  },
  computed: {
    todoCount: function () {
      if (this.id === -1) return this.$store.state.todos.todos.length
      return this.$store.getters.getTodoCountForCategory(this.id)
    }
  }
}
</script>

<style lang="scss">
.category {
  cursor: pointer;
  padding: 0.5rem 0;
  &.active {
    .category__name {
      font-weight: bold;
    }
  }
}

.category__count {
  margin-left: 0.5rem;
}
</style>
