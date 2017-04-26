<template>
  <div class="chat">
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
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
  .chat-siderbar, .chat-main {
    display: inline-block;
  }

</style>
