<template>
  <div class="wake-chat">
    <button class="wakebutton" v-on:click="Wake()">wake me</button>
    <chat v-bind:display="logined"></chat>
  </div>
</template>

<script>
  import Chat from "./Chat"
  import * as cfg from '../config/cfg'
  import { mapGetters } from 'vuex'
  /**
   * WakeButton vue - this button appear on every pages, and contain some small extendtions
   * ---------------
   */
  export default {
    name: 'WakeChat',
    components: {Chat},
    data() {
      return {
        msg: ''
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
        if(this.logined) {

        }
      }
    },
    created() {
      this.$http.post(cfg.url + 'auth').then((res) => {
        console.log('ok');
      }, (res) => {
        console.log(res.body);
        this.$store.dispatch('loginOut');
        this.$router.push({path: '/login'})
      })
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
