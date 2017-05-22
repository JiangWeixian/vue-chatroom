<template>
  <div class="chat" v-bind:class="[ display? '':'hide' ]">
    <chat-siderbar></chat-siderbar>
    <chat-main></chat-main>
  </div>
</template>

<script>
  import ChatSiderbar from "./ChatSiderbar";
  import ChatMain from "./ChatMain";
  export default {
    name: 'Chat',
    components: {ChatMain, ChatSiderbar},
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
