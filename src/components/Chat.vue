<template>
  <mu-paper class="chat" v-bind:class="[ display? '':'hide' ]" :zDepth="2" :rounded=false>
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

<style>
  .hide {
    display: none;
  }
  .chat {
    width: 700px;
    height: 500px;
  }
  .chat-siderbar, .chat-main {
    margin: 0px;
    padding: 0px;
    display: inline-block;
    float: left;
  }
  .chat-siderbar {
    width: 30%;
    height: 100%;
  }
  .chat-main {
    width: 70%;
    height: 100%;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #673ab7;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #673ab7;
  }
</style>
