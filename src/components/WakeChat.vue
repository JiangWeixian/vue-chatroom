<template>
  <div class="wake-chat">
    <mu-float-button icon="chat" v-on:click="Wake()" class="wakebutton"/>
    <chat v-bind:display="display"></chat>
  </div>
</template>

<script>
  import Chat from "./Chat"
  import * as cfg from '../config/cfg'
  import { mapGetters } from 'vuex'
  import MuFlatButton from "../../node_modules/muse-ui/src/flatButton/flatButton";
  import MuFloatButton from "../../node_modules/muse-ui/src/floatButton/floatButton";
  /**
   * WakeChat vue - this button appear on every pages, and contain some small extendtions
   * ---------------
   * Chat vue - vue -chatroom
   * ---------------
   * @created(func) - when wakechat created, post token to server. emit login-socket or push to login.vue
   */
  export default {
    name: 'WakeChat',
    components: {MuFloatButton, Chat},
    data() {
      return {
        display: false
      }
    },
    computed: {
      ...mapGetters({
        nickname: 'nickname',
        logined: 'logined'
      })
    },
    methods: {
      Wake() {
        this.display = !this.display;
      }
    },
    created() {
      this.$http.post(cfg.url + 'auth').then((res) => {
        this.$socket.emit('login', {user: this.nickname})
      }, (res) => {
        console.log(res.body);
        if(res.status == 301) {
          this.$store.dispatch('loginOut');
          this.$router.push({path: '/login'})
        }
        else {
          window.alert('there is no network!')
        }
      })
    }
  }
</script>

<style scoped>
  .wake-chat {
    position: fixed;
    left: 95%;
    top: 86%;
    z-index: 999;
  }
  .wake-chat .wakebutton {
    z-index: 999;
  }
  .wake-chat .chat {
    position: relative;
    right: 670px;
    top: -530px;
  }
</style>
