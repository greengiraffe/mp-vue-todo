<template>
  <div>
    <h2>Categories</h2>
    <ul class="category-list">
      <li
        @click="selectCategory(undefined)"
        class="category-list__item"
        :class="{ active: selected === undefined}"
      >
        <Category name="All" :id="-1" :class="{ active: selected === undefined}"/>
      </li>
      <li
        @click="selectCategory(cat.id)"
        v-for="cat in categories"
        :key="cat.id"
        class="category-list__item"
      >
        <Category v-bind="cat" :class="{ active: selected === cat.id}"/>
      </li>
      <li class="category-list__item"><CategoryInput /></li>
    </ul>
  </div>
</template>

<script>
import Category from './Category.vue'
import CategoryInput from   './CategoryInput.vue'
import { SET_SELECTED_CATEGORY } from '../store'

export default {
  components: { Category, CategoryInput },
  computed: {
    categories: function () {
      return this.$store.state.categories.categories
    },
    selected: function () {
      return this.$store.state.categories.selected
    },
  },
  methods: {
    selectCategory: function(id) {
      this.$store.commit(SET_SELECTED_CATEGORY, id)
    }
  }
}
</script>

<style lang="scss">
.category-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.category-list__item {
  &:last-child {
    margin-top: 2rem;
  }
}
</style>
