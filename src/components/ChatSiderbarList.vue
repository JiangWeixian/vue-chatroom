<template>
  <div class="infolist">
    <ul>
      <li v-for="thread in sortedThreads" class="thread">
        <img v-bind:src="thread.avatar" v-bind:alt="thread.name" class="thread-avatar">
        <div class="thread-info">
          <p class="thread-username">{{ thread.name }}</p>
          <span class="thread-timestamp">{{ thread.lastClickStamp | time }}</span>
        </div>
        <p class="thread-lastmessage">11</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
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
          .sort((a, b) => {return a.timestamp - b.timestamp})
      }
    }
  }
</script>

<style scoped>
  .thread-avatar {
    width: 40px;
    height: 40px;
  }
</style>
