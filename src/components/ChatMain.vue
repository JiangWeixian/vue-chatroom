<template>
  <div class="chat-main">
    <chat-main-title></chat-main-title>
    <chat-main-mesage></chat-main-mesage>
    <chat-main-text></chat-main-text>
  </div>
</template>

<script>
  import ChatMainMesage from "./ChatMainMessage";
  import ChatMainText from "./ChatMainText";
  import ChatMainTitle from './ChatMainTitle.vue';
  export default {
    name: 'ChatMain',
    components: {ChatMainText, ChatMainMesage, ChatMainTitle},
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<style>
  .chat-main-message {
    width: 100%;
    height: 65%;
    overflow-y: auto;
    background-color: #f3edf6;
  }
  .chat-main-text {
    height: 20%;
  }
  .chat-main-title {
    height: 15%;
  }
  .chat-main-text .mu-text-field-input {
    padding: 0.7em;
    padding-bottom: 0.75em;
    overflow-y: hidden;
  }
</style>
