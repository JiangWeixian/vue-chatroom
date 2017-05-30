<template>
  <mu-paper id="RegPanel" class="login-panel clearfix">
    <p class="login-title">Welcome, {{ nickname }}</p>
    <div id="Reginfo" class="login-info">
      <mu-text-field hintText="NAME" icon="account_circle" v-model="nickname" name="name" class="input" :errorText="error['nickname']['msg']"/>
      <mu-text-field hintText="ACCOUNT" icon="email" v-model="account" name="account" class="input" :errorText="error['account']['msg']"/>
      <mu-text-field hintText="PASSWORD" type="password" icon="content_paste" v-model="password" name="password" class="input" :errorText="error['password']['msg']"/>
      <mu-text-field hintText="CONFIRM" type="password" icon="content_paste" v-model="passwordConfirmed" name="passwordConfirmd" class="input" :errorText="error['passwordConfirmed']['msg']"/>
    </div>
    <div id="LoginSubmit" class="login-submit pull-left">
      <a href="/login" class="login link">Already have a account?Just Login</a>
      <mu-raised-button label="SIGNUP" class="button-login" v-on:click="SignUp()" primary/>
    </div>
  </mu-paper>
</template>

<script>
  /**
   * The RegPanel
   * ------------------------
   * @ methods-SignUp: post data to server, when status=200(ok), store token in localstorage; when status=301(not ok), go to Reg.vue
   * @ methods-Check: post data to server when nickname/password validate-status is ok.
   * @ watch-nickname/account/password/password_confirmed: if nickname/password changed do some jobs
   * @ created: when RegPanel is created, do some jobs.
   * ------------------------
   */
  import * as cfg from '../config/cfg'
  import { Validator } from 'vee-validate'
  import { mapActions } from 'vuex'
  import MuTextField from "../../node_modules/muse-ui/src/textField/textField";
  import MuRaisedButton from "../../node_modules/muse-ui/src/raisedButton/raisedButton";
  import MuPaper from "../../node_modules/muse-ui/src/paper/paper";
  export default {
    components: {MuPaper, MuRaisedButton, MuTextField},
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
          this.error['nickname'] = cfg.tpl;
          this.Check({ 'nickname': value });
        }, error => {
          let errors = this.validator.getErrors().errors;
          this.error['nickname'] = this.Select(errors, 'nickname');
        })
      },
      account(value) {
        this.validator.validate('account', value).then(result => {
          this.error['account'] = cfg.tpl;
          this.Check({ 'account': value });
        }, error =>{
          let errors = this.validator.getErrors().errors;
          this.error['account'] = this.Select(errors, 'account');
        });
      },
      password(value) {
        this.validator.validate('password', value).then(result => {
          this.error['password'] = cfg.tpl;
        }, error => {
          let errors = this.validator.getErrors().errors;
          this.error['password'] = this.Select(errors, 'password');
        })
      },
      passwordConfirmed(value) {
        this.validator.validate('passwordConfirmed', value).then(result => {
          this.error['passwordConfirmed'] = cfg.tpl;
        }, error => {
          let errors = this.validator.getErrors().errors;
          this.error['passwordConfirmed'] = this.Select(errors, 'passwordConfirmed');
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
      },
      Select( errors, fieldName ) {
        let result;
        errors.forEach((error) => {
          if(error.field == fieldName) {
            result = error;
            return false;
          }
        });
        return result;
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
</style>
