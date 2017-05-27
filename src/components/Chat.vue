<template>
  <mu-paper class="chat" v-bind:class="[ display? '':'hide' ]" :zDepth="1" :rounded=false>
    <chat-siderbar></chat-siderbar>
    <chat-main></chat-main>
  </mu-paper>
</template>

<script>
  import ChatSiderbar from "./ChatSiderbar";
  import ChatMain from "./ChatMain";
  import MuPaper from "../../node_modules/muse-ui/src/paper/paper";
  export default {
    name: 'Chat',
    components: {MuPaper, ChatMain, ChatSiderbar},
    props: ['display'],
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
  .hide {
    display: none;
  }
  .chat-siderbar, .chat-main {
    display: inline-block;
  }

</style>
