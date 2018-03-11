<template>
  <div>
    <h1>Other page</h1>
    <kittens/>
  </div>
</template>

<script>
import Kittens from '~/components/Kittens.vue'

export default {
  components: {
    Kittens
  },
  transition: 'bounce'
}
</script>
