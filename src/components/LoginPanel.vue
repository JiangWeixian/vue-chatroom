<template>
  <div id="LoginPanel" class="login-panel">
    <p class="login-title" v-bind:class="[ activeNameClass? 'name':'message' ]">hello, {{ nickname }}</p>
    <div id="Logininfo" class="login-info">
      <input type="text" v-model="nickname">
      <input type="text" v-model="account">
      <input type="text" v-model="password">
    </div>
    <div id="LoginSubmit" class="login-submit">
      <a href="#" class="signup">No Account!Sign Up</a>
      <button type="submit" v-on:click="loginIn()">Login</button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'LoginPanel',
    data() {
      return {
        activeNameClass: false,
        nickname: '',
        account: '',
        password: ''
      }
    },
    methods: {
      loginIn () {
        const nickname = this.nickname.trim(),
              account = this.account.trim(),
              password = this.password.trim()

        if (nickname && account && password) {
          this.$store.dispatch('loginIn', {
            nickname,
            account,
            password
          })
        }
      }
    }
  }
</script>

<style scoped>
  .login-panel {
    width: 30%;
    padding: 20em 2em;
    margin: 0 auto;
    background-color: #ffffff;
  }
  .login-panel .login-submit {
    color: black;
  }
</style>
