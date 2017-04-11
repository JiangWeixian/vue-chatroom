<template>
  <div id="LoginPanel" class="login-panel">
    <p class="login-title">Welcome come here, {{ nickname }}</p>
    <div id="Logininfo" class="login-info">
      <input type="text" v-model="nickname">
      <input type="text" v-model="account">
      <input type="text" v-model="password">
    </div>
    <div id="LoginSubmit" class="login-submit">
      <a href="#" class="signup">No Account!Sign Up</a>
      <button type="submit" v-on:click="SignUp()">Login</button>
    </div>
  </div>
</template>

<script>
  /**
   *The RegPanel
   * ------------------------
   * @ method-SignUp(still in building): post data to server, when status=200(ok), store token in localstorage; when status=301(not ok), go to Reg.vue
   * ------------------------
   */
  export default {
    name: 'RegPanel',
    data() {
      return {
        nickname: '',
        account: '',
        password: ''
      }
    },
    methods: {
      SignUp() {
        const nickname = this.nickname.trim(),
          account = this.nickname.trim(),
          password = this.nickname.trim();

        if(nickname && account && password) {
          this.$http.post('http://localhost:3000/reg', {
            nickname: nickname,
            account: account,
            password: password})
            .then((res) => {
            window.alert('signup successly!already send email, please checkout!');
            //localStorage.setItem('token', res.body.token);
            this.$store.dispatch('loginIn', { nickname });
          }, (res) => {
            window.alert(res.status);
            this.$router.push({path: '/push'});
          });
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
