<template>
  <div class="chat-siderbar">
    <chat-siderbat-card></chat-siderbat-card>
    <chat-siderbar-list></chat-siderbar-list>
  </div>
</template>

<script>
  import ChatSiderbatCard from "./ChatSiderbarCard";
  import ChatSiderbarList from "./ChatSiderbarList";
  export default {
    name: 'ChatSiderbar',
    components: {ChatSiderbarList, ChatSiderbatCard},
    data() {
      return {
        msg: ''
      }
    }
  }
</script>
