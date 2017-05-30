<template>
  <div class="chat-main-message" ref="list">
    <mu-list>
      <mu-list-item v-for="message in sortedMessages" :key="message.authorName" :title="message.authorName" class="message" :class="message.slot">
        <mu-avatar :src="message.avatar" :alt="message.id" class="message-avatar" :slot="message.slot"/>
        <p class="message-content">{{ message.text }}</p>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MuList from "../../node_modules/muse-ui/src/list/list";
  import MuListItem from "../../node_modules/muse-ui/src/list/listItem";
  import MuAvatar from "../../node_modules/muse-ui/src/avatar/avatar";
  export default {
    components: {MuAvatar, MuListItem, MuList},
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
        threads: 'threads',
        currentThread: 'currentThread'
      }),
      sortedMessages() {
        return this.messages
          .slice()
          .sort((a, b) => {return a.timestamp - b.timestamp})
      }
    },
    watch: {
      'currentThread.lastMessage': function () {
        this.$nextTick(() => {
          const ul = this.$refs.list;
          ul.scrollTop = ul.scrollHeight;
        })
      }
    },
    created() {
      this.$options.sockets.message = (msg) => {
        this.$store.dispatch('sendMessage', {
          text: msg.text,
          thread: this.$store.state.threads[msg.author],
          authorname: msg.author,
          left: false
        });
      }
    }
  }
</script>

<style>
  .chat-main-message .message .mu-item-title {
    color: black;
    text-align: right;
  }
  .chat-main-message .message.leftAvatar .mu-item-title {
    text-align: left;
  }
  .chat-main-message .message-content {
    position: relative;
    padding: 0.5em 0.6em 0.5em 1em;
    margin-top: 0.5em;
    min-height: 2em;
    max-width: 80%;
  }
  .chat-main-message .message.leftAvatar .message-content:before {
    content: " ";
    position: absolute;
    top: 0px;
    right: 100%;
    border: 4px solid transparent;
    border-right-color: #fff;
    border-top-color: #fff;
  }
  .chat-main-message .message.leftAvatar .message-content {
    text-align: left;
    background-color: #fff;
    color: #000;
  }
  .chat-main-message .message.rightAvatar .mu-item-title {
    text-align: right;
    padding-right: 1em;
  }
  .chat-main-message .message.rightAvatar .message-content:after {
    content: " ";
    position: absolute;
    top: 0px;
    left: 100%;
    border: 4px solid transparent;
    border-left-color: #673ab7;
    border-top-color: #673ab7;
  }
  .chat-main-message .message.rightAvatar .message-content {
    text-align: right;
    margin-right: 1em;
    float: right;
    background-color: #673ab7;
    color: #fff;
  }
</style>
