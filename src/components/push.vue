<template>
  <div class="wrap">
    <p>push successfully!</p>
    <span>This is Dynamic Segment! {{ this.$route.params.id }}</span>
  </div>
</template>

<script>
  export default {
    name: 'push',
    data() {
      return ''
    },
    watch: {
        '$route' (to, from) {
            console.log('route change')
        }
    }
  }
</script>
