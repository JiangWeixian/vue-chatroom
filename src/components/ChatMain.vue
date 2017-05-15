<template>
  <div class="chat-main">
    <chat-main-mesage></chat-main-mesage>
    <chat-main-text></chat-main-text>
  </div>
</template>

<script>
  import ChatMainMesage from "./ChatMainMessage";
  import ChatMainText from "./ChatMainText";
  export default {
    name: 'ChatMain',
    components: {ChatMainText, ChatMainMesage},
    data() {
      return {
        msg: ''
      }
    }
  }
</script>
