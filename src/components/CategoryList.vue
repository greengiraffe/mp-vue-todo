<template>
  <div>
    <h2>Categories</h2>
    <ul class="category-list">
      <li class="category-list__item"><Category /></li>
      <li class="category-list__item"><Category /></li>
      <li class="category-list__item"><Category /></li>
    </ul>
  </div>
</template>

<script>
import Category from './Category.vue'

export default {
  components: { Category }
}
</script>

<style>
.category-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
