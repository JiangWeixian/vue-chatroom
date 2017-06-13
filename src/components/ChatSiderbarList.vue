<template>
  <div class="infolist">
    <div class="card-footer">
      <input type="search" v-on:focus="hideActive" v-on:keyup.enter="enterActive" v-on:blur="showActive"v-model="searchContent">
      <mu-icon value="search" color="#ccc" size=18 class="card-search" v-bind:class="[ activeNameClass? 'hide':'' ]"/>
    </div>
    <mu-divider/>
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
  import MuDivider from "../../node_modules/muse-ui/src/divider/divider";
  export default {
    components: {
      MuDivider,
      MuBadge, MuAvatar, MuListItem, MuList},
    name: 'ChatSiderbarList',
    data() {
      return {
        msg: '',
        activeNameClass: false,
        searchContent: ''
      }
    },
    computed: {
      ...mapGetters({
        threads: 'threads',
        currentThread: 'currentThread'
      }),
      sortedThreads() {
        let threads = this.threads
          .slice()
          .sort((a, b) => {
            return b.lastClickStamp - a.lastClickStamp});
        threads = threads.filter(thread => thread.name.includes(this.searchContent));
        return threads;
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
          return '' + count;
        }
      },
      hideActive() {
        this.activeNameClass = true;
      },
      showActive() {
        this.activeNameClass = false;
      },
      enterActive() {
        this.activeNameClass = True;
        this.searchContent = '';
      }
    }
  }
</script>

<style>
  .mu-item {
    color: white;
  }
  .mu-item .mu-item-text {
    color: #ccc;
  }
  .card-footer {
    padding-bottom: 1em;
    position: relative;
  }
  .card-footer input {
    background-color: #fff;
    text-align: center;
    height: 2em;
    margin: 0px auto;
    display: block;
    border-radius: 1em;
  }
  .card-footer .card-search {
    position: absolute;
    right: 36px;
    bottom: 1.1em;
  }
  .card-footer .card-search.hide {
    display: none;
  }
</style>

