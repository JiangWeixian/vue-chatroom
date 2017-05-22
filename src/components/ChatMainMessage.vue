<template>
  <div class="chat-main-message">
    <ul>
      <li v-for="message in sortedMessages" class="message">
        <p class="message-timestamp">{{ message.timestamp | time  }}</p>
        <div class="message-main">
          <img v-bind:src="message.avatar" alt="avatar" class="message-avatar">
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
        messages: 'currentMessage',
        nickname: 'nickname',
        threads: 'threads'
      }),
      sortedMessages() {
        return this.messages
          .slice()
          .sort((a, b) => {return a.timestamp - b.timestamp})
      }
    },
    created() {
      this.$options.sockets.message = (msg) => {
        this.$store.dispatch('sendMessage', {
          text: msg.text,
          thread: this.$store.state.threads[msg.author],
          authorname: msg.author
        });
        console.log(this.$socket.id);
        console.log(msg)
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
