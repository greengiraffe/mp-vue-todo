<template>
  <div class="loading-screen">
    <div class="loading-screen__info">
      <fa-icon icon="spinner" spin></fa-icon>
      <span class="loading-screen__text">Loading data</span>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .loading-screen__info {
    text-align: center;
    margin: 4rem 0 2rem;

    .fa-spinner {
      font-size: 2rem;
    }
  }

  .loading-screen__text {
    display: block;
    margin-top: 1rem;
  }
</style>
