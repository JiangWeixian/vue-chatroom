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
  /**
   *The loginPanel
   * ------------------------
   * @ method-loginIn(still in building): post data to server, when status=200(ok), store token in localstorage; when status=301(not ok), go to Reg.vue
   * ------------------------
   */
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
              password = this.password.trim();

        if (nickname && account && password) {
          this.$http.post('http://localhost:3000/login',{
            nickname: nickname,
            account: account,
            password: password })
            .then(function (res) {
              console.log(res);
              localStorage.setItem('token', res.body.token);
            }, function (res) {
              console.log(res.status);
              this.$router.push({path: '/reg'});
            });
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
