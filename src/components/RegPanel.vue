<template>
  <div id="LoginPanel" class="login-panel">
    <p class="login-title">Welcome come here, {{ nickname }}</p>
    <div id="Logininfo" class="login-info">
      <p>
        <input type="text" v-model="nickname" name="name">
        <span class="help is-danger"> {{ error['nickname']['msg'] }} </span>
      </p>
      <p>
        <input type="text" v-model="account" name="account">
        <span class="help is-danger"> {{ error['account']['msg'] }} </span>
      </p>
      <p>
        <input type="password" v-model="password" name="password">
        <span class="help is-danger"> {{ error['password']['msg'] }} </span>
      </p>
      <p>
        <input type="password" v-model="passwordConfirmed" name="passwordConfirmed">
        <span class="help is-danger"> {{ error['passwordConfirmed']['msg'] }} </span>
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
  import { mapActions } from 'vuex'
  export default {
    name: 'RegPanel',
    validator: null,
    data() {
      return {
        nickname: '',
        account: '',
        password: '',
        passwordConfirmed: '',
        error: {
          'nickname': {
            'field': '',
            'msg': '',
            'rule': ''
          },
          'account': {
            'field': '',
            'msg': '',
            'rule': ''
          },
          'password': {
            'field': '',
            'msg': '',
            'rule': ''
          },
          'passwordConfirmed': {
            'field': '',
            'msg': '',
            'rule': ''
          }
        }
      }
    },
    watch: {
      nickname(value) {
        this.validator.validate('nickname', value).then(result => {
          this.Check({ 'nickname': value });
        }, error => {
          this.error['nickname'] = this.validator.getErrors().errors[0];
        })
      },
      account(value) {
        this.validator.validate('account', value).then(result => {
          this.Check({ 'account': value });
        }, error =>{
          this.error['account'] = this.validator.getErrors().errors[0];
        });
      },
      password(value) {
        this.validator.validate('password', value).then(result => {
          this.error['password'] = cfg.tpl;
        }, error => {
          this.error['password'] = this.validator.getErrors().errors[0];
        })
      },
      passwordConfirmed(value) {
        this.validator.validate('passwordConfirmed', value).then(result => {
          this.error['passwordConfirmed'] = cfg.tpl;
        }, error => {
          this.error['passwordConfirmed'] = this.validator.getErrors().errors[0];
        })
      }
    },
    methods: {
      Check( postdata ) {
        this.$http.post(cfg.url + 'check', postdata )
          .then(res => {
            const msg = res.body;
            const field = msg['field'];
            this.error[field] = msg;
          }, res => {
            if(res.status == 301) {
              const msg = res.body;
              const field = msg['field'];
              this.error[field] = msg;
            }
          });
      },
      SignUp() {
        const nickname = this.nickname.trim(),
          account = this.account.trim(),
          password = this.password.trim(),
          passwordConfirmed = this.passwordConfirmed.trim();

        this.validator.validateAll({
          nickname: nickname,
          account: account,
          password: password,
          passwordConfirmed: passwordConfirmed
        }).then( result => {
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
        }, error => {
          console.log('please confirm your form data');
        })
      }
    },
    created() {
      this.validator = new Validator({
        nickname: 'required|alpha_dash|min:6',
        account: 'required|email',
        password: 'required|alpha_num|min:6',
        passwordConfirmed: 'required|confirmed:password'
      })
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
