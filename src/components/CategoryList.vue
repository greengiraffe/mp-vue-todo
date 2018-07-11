<template>
  <div>
    <h2>Categories</h2>
    <ul class="category-list">
      <li class="category-list__item"><Category name="All" /></li>
      <li v-for="cat in categories" :key="cat.id" class="category-list__item">
        <Category v-bind="cat" />
      </li>
      <li class="category-list__item"><CategoryInput /></li>
    </ul>
  </div>
</template>

<script>
import Category from './Category.vue'
import CategoryInput from './CategoryInput.vue'

export default {
  components: { Category, CategoryInput },
  computed: {
    categories: function () {
      return this.$store.state.categories.categories
    }
  }
}
</script>

<style lang="scss">
.category-list {
  margin: 0;
  padding: 0;
  list-style-type: none;

  &:last-child {
    margin-top: 2rem;
  }
}
</style>
