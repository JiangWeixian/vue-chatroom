<template>
  <div class="infolist">
    <mu-list>
      <mu-list-item v-for="thread in sortedThreads" :key="thread.id" :title="thread.name" v-on:click="switchThread(thread.id)" class="thread">
        <mu-badge :content="clearCount(thread.count)" slot="after" secondary/>
        <mu-avatar :src="thread.avatar" :alt="thread.name" class="thread-avatar" slot="leftAvatar"/>
        <span class="thread-timestamp" slot="describe">{{ thread.lastMessage.timestamp | time }} - {{ thread.lastMessage.text }}</span>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MuList from "../../node_modules/muse-ui/src/list/list";
  import MuListItem from "../../node_modules/muse-ui/src/list/listItem";
  import MuAvatar from "../../node_modules/muse-ui/src/avatar/avatar";
  import MuBadge from "../../node_modules/muse-ui/src/badge/badge";
  export default {
    components: {MuBadge, MuAvatar, MuListItem, MuList},
    name: 'ChatSiderbarList',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        threads: 'threads',
        currentThread: 'currentThread'
      }),
      sortedThreads() {
        return this.threads
          .slice()
          .sort((a, b) => {
            return b.lastClickStamp - a.lastClickStamp})
      }
    },
    methods: {
      switchThread(threadId) {
        this.$store.dispatch('switchThread', { threadId });
      },
      clearCount(count) {
        if(count == 0) {
          return '';
        }
        else {
          return count;
        }
      }
    }
  }
</script>

<style>
  .infolist {
    padding-top: 1em;
  }
  .mu-item {
    color: white;
  }
  .mu-item .mu-item-text {
    color: #ccc;
  }
</style>

