<template>
  <div class="chat-main-message">
    <ul>
      <li v-for="message in sortedMessages" class="message">
        <p class="message-timestamp">{{ message.timestamp | time  }}</p>
        <div class="message-main">
          <img src="../assets/avatar.jpg" alt="avatar" class="message-avatar">
          <p class="message-content">{{ message.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ChatMainMesage',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        messages: 'currentMessage'
      }),
      sortedMessages() {
        return this.messages
          .slice()
          .sort((a, b) => {return a.timestamp - b.timestamp})
      }
    },
    filters: {
      time(timestamp) {
        return new Date(timestamp).toLocaleTimeString()
      }
    }
  }
</script>

<style scoped>
  .message-main .message-avatar {
    width: 50px;
    height: 50px;
  }
</style>
