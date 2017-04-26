<template>
  <div class="chat-main-text">
    <textarea v-on:keyup.enter="sendMessage"></textarea>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ChatMainText',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        nickname: 'nickname',
        currentThread: 'currentThread'
      })
    },
    methods: {
      sendMessage(e) {
        const event = e || window.event;
        const text = event.target.value;
        if (text.trim()) {
          this.$store.dispatch('sendMessage', {
            text: text,
            thread: this.currentThread,
            authorname: this.nickname
          })
        }
        event.target.value = '';
      }
    }
  }
</script>
