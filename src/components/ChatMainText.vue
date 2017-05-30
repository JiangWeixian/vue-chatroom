<template>
  <div class="chat-main-text" v-on:keyup.enter="sendMessage()">
    <mu-text-field multiLine fullWidth :rows="3" :rowsMax="3" v-model="msg"></mu-text-field>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MuTextField from "../../node_modules/muse-ui/src/textField/textField";
  import MuIcon from "../../node_modules/muse-ui/src/icon/icon";
  export default {
    components: {MuIcon, MuTextField},
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
      sendMessage() {
        let text = this.msg;
        if (text.trim()) {
          this.$store.dispatch('sendMessage', {
            text: text,
            thread: this.currentThread,
            authorname: this.nickname,
            left: true
          });
          this.$socket.emit('message', {
            text: text,
            //to: this.currentThread.id,
            to: this.nickname,
            author: this.nickname
          })
        }
        this.msg = '';
      }
    }
  }
</script>


