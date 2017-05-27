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
   * WakeButton vue - this button appear on every pages, and contain some small extendtions
   * ---------------
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
    },
    beforeDestroy() {
      this.$socket.emit('logout', {user: this.nickname})
    }
  }
</script>

<style scoped>
  .wake-chat {
    position: fixed;
    right: 2vw;
    top: 55vh;
    z-index: 999;
  }
</style>
