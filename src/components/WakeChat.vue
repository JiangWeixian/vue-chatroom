<template>
  <div class="wake-chat">
    <button class="wakebutton">wake me</button>
    <chat></chat>
  </div>
</template>

<script>
  import Chat from "./Chat";
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
