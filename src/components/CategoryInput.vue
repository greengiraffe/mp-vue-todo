<template>
<div class="category-input">
  <input v-model="name" class="category-input__field" type="text" placeholder="...new Category">
  <button @click="addCategory" class="category-input__button">Add</button>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      name: undefined
    }
  },
  methods: {
    addCategory: function () {
      this.$store.commit('ADD_CATEGORY', {
        name: this.name
      })
      this.clearInput()
    },
    clearInput: function () {
      this.name = ''
    }
  }
}
</script>

<style lang="scss">
.category-input {
  display: flex;
}

.category-input__field {
  width: 100%;
}

.category-input__button {
  margin-left: 0.5rem;
}
</style>
