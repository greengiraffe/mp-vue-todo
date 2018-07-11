<template>
<div class="category">
  <span class="category__name">{{ name }}</span>
</div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style lang="scss">
.category {
  cursor: pointer;
  padding: 0.5rem 0;
}
</style>
