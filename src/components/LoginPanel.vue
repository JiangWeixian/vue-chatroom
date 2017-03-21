<template>
  <div id="LoginPanel" class="login-panel">
    <span class="login-title" v-bind:class="[ activeNameClass? 'name':'message' ]">hello</span>
    <div id="Logininfo" class="login-info">
      <input type="text">
      <input type="text">
    </div>
    <div id="LoginSubmit" class="login-submit">
      <a href="#" class="signup">No Account!Sign Up</a>
      <button type="submit">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginPanel',
    data() {
      return {
        activeNameClass: false
      }
    }
  }
</script>
