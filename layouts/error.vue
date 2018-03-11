<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <img src="http://www.pngmart.com/files/2/Pikachu-PNG-File.png" alt="error">
    <nuxt-link to="/" class="back-button">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'dark' // you can set a custom layout for the error page
}
</script>

<style lang="scss">
.back-button {
  padding: 10px;
  font-size: 1em;
  background-color: rosybrown;
  color: white !important;
  text-transform: uppercase;
}
</style>
