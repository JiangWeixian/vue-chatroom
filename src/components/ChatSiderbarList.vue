<template>
  <div class="infolist">
    <mu-list>
      <mu-list-item v-for="thread in sortedThreads" :key="thread.id" :title="thread.name" v-on:click="switchThread(thread.id)" class="thread">
        <mu-avatar :src="thread.avatar" :alt="thread.name" class="thread-avatar" slot="leftAvatar"/>
        <span class="thread-timestamp" slot="describe">{{ thread.lastClickStamp | time }}</span>
        <p class="thread-lastmessage">{{ thread.lastMessage.text }}</p>
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
    name: 'ChatSiderbarList',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        threads: 'threads'
      }),
      sortedThreads() {
        return this.threads
          .slice()
          .sort((a, b) => {return b.lastClickStamp - a.lastClickStamp})
      }
    },
    methods: {
      switchThread(threadId) {
        this.$store.dispatch('switchThread', { threadId });
      }
    }
  }
</script>

<style scoped>
  .thread {
    width: 500px;
  }
</style>
