<template>
  <mu-paper id="LoginPanel" class="login-panel clearfix" :zDepth="2">
    <p class="login-title" v-bind:class="[ activeNameClass? 'name':'message' ]">HELLO, {{ nickname }}</p>
    <div id="Logininfo" class="login-info">
      <mu-text-field label="NAME"  class="input" v-model="nickname" labelFloat/>
      <mu-text-field label="PASSWORD" class="input" v-model="password" type="password" labelFloat/>
    </div>
    <div id="LoginSubmit" class="login-submit pull-left">
      <a href="/reg" class="signup link">No Account!Sign Up</a>
      <mu-raised-button label="LOGIN" class="button-login" v-on:click="loginIn()" primary/>
    </div>
  </mu-paper>
</template>

<script>
  /**
   *The loginPanel
   * ------------------------
   * @ method-loginIn(still in building): post data to server, when status=200(ok), store token in localstorage; when status=301(not ok), go to Reg.vue
   * ------------------------
   */
  import { mapActions, mapGetters } from 'vuex'
  import * as cfg from '../config/cfg'
  import MuRaisedButton from "../../node_modules/muse-ui/src/raisedButton/raisedButton";
  import MuTextField from "../../node_modules/muse-ui/src/textField/textField";
  import MuPaper from "../../node_modules/muse-ui/src/paper/paper";
  export default {
    components: {MuPaper, MuTextField, MuRaisedButton},
    name: 'LoginPanel',
    data() {
      return {
        activeNameClass: false,
        nickname: '',
        password: ''
      }
    },
    methods: {
      loginIn() {
        const nickname = this.nickname.trim(),
              password = this.password.trim();

        if (nickname && password) {
          this.$http.post(cfg.url + 'login',{
            nickname: nickname,
            password: password })
            .then((res) => {
              this.$store.dispatch('loginIn', { nickname });
              localStorage.setItem('token', res.body.token);
            }, (res) => {
              this.$router.push({path: '/push'});
            });
        }
      }
    }
  }
</script>

<style>
  .login-panel {
    width: 30%;
    margin: 0em auto;
    position: relative;
    background-color: #ffffff;
    top: calc(50% - 18em);
    text-indent: 2em;
  }
  .login-panel .login-title {
    padding-top: 4em;
    font-size: 2em;
    line-height: 4em;
    color: #ffffff;
    background-color: #1976d2;
  }
  .login-panel .login-info {
    padding: 2em 2em 0 2em;
    text-indent: 0em;
  }
  .login-panel .login-info .input{
    width: 100%;
  }
  .login-panel .login-submit {
    padding: 2em;
    color: black;
  }
  .login-panel .login-submit .link {
    color: #ccc;
    text-decoration: underline;
    margin-right: 1em;
  }
</style>
