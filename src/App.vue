<template>
  <div id="app">
    <router-view></router-view>
    <wake-button></wake-button>
  </div>
</template>

<script>
  import WakeButton from './components/WakeChat.vue'
  export default {
    name: 'app',
    components: { WakeButton }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
