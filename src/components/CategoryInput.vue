<template>
<div class="category-input">
  <input class="category-input__field" type="text" placeholder="...new Category">
  <button class="category-input__button">Add</button>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.category-input {
  display: flex;
}

.category-input__field {
  border: 0;
  border-bottom: 2px solid lightgray;
  width: 100%;
}

.category-input__button {
  margin-left: 0.5rem;
}
</style>
