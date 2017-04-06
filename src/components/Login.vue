<template>
  <div class="login-page-bg">
    <login-panel></login-panel>
  </div>
</template>

<script>
  import LoginPanel from "./LoginPanel";
  export default {
    components: {LoginPanel},
    name: 'Login',
    data() {
      return {
        back: ''
      }
    }
  }
</script>

<style scoped>
  .login-page-bg {
    overflow: hidden;
    height: 100%;
    width: 100%;
    background:url("../assets/login-bg.jpg") no-repeat fixed center;
  }
</style>
