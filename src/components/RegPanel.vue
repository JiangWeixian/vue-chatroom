<template>
  <div id="LoginPanel" class="login-panel">
    <p class="login-title">Welcome come here, {{ nickname }}</p>
    <div id="Logininfo" class="login-info">
      <p>
        <input type="text" v-validate="'required|alpha_dash'" v-on:blur="Con()" v-model="nickname" name="name">
        <i v-show="errors.has('name')" class="fa fa-warning"></i>
        <span v-show="errors.has('name')" class="help is-danger"> {{ errors.first('name') }} </span>
      </p>
      <p>
        <input type="text" v-validate="'required|email'" v-on:blur="Con()" v-model="account" name="account">
        <i v-show="errors.has('account')" class="fa fa-warning"></i>
        <span v-show="errors.has('account')" class="help is-danger"> {{ errors.first('account') }} </span>
      </p>
      <p>
        <input type="text" v-validate="'required'" v-model="password" name="password">
        <i v-show="errors.has('password')" class="fa fa-warning"></i>
        <span v-show="errors.has('password')" class="help is-danger"> {{ errors.first('password') }} </span>
        <input type="text" v-validate="'required|confirmed:password'" name="password2">
        <i v-show="errors.has('password2')" class="fa fa-warning"></i>
        <span v-show="errors.has('password2')" class="help is-danger"> {{ errors.first('password2') }} </span>
      </p>
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
  import * as cfg from '../config/cfg'
  import { Validator } from 'vee-validate'
  export default {
    name: 'RegPanel',
    data() {
      return {
        nickname: '',
        account: '',
        password: '',
      }
    },
    methods: {
      SignUp() {
        const nickname = this.nickname.trim(),
          account = this.account.trim(),
          password = this.password.trim();

        if(nickname && account && password) {
          this.$http.post(cfg.url + 'reg', {
            nickname: nickname,
            account: account,
            password: password})
            .then((res) => {
            console.log('signup successly!already send email, please checkout!');
            localStorage.setItem('token', res.body.token);
            this.$store.dispatch('loginIn', { nickname });
          }, (res) => {
            console.log(res.status);
            this.$router.push({path: '/push'});
          });
        }
      },
      Con() {
        console.log(this.$validator.getErrors().errors[0]['msg']);
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
