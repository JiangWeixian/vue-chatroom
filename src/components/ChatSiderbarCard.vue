<template>
  <div class="card">
    <header>
      <mu-avatar :src="selfAvatar" :alt="nickname"/>
      <p class="selfnickname">{{ nickname }}</p>
    </header>
    <footer>
      <input type="search" v-on:focus="hideActive" v-on:keyup.enter="showActive" v-model="searchContent">
      <mu-icon value="search" color="#ccc" size=18 class="card-search" v-bind:class="[ activeNameClass? 'hide':'' ]"/>
    </footer>
    <mu-divider/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { staticFriendAvatarPath } from '../config/cfg'
  import MuAvatar from "../../node_modules/muse-ui/src/avatar/avatar";
  import MuDivider from "../../node_modules/muse-ui/src/divider/divider";
  import MuIcon from "../../node_modules/muse-ui/src/icon/icon";
  export default {
    components: {MuIcon, MuDivider, MuAvatar},
    name: 'ChatSiderbarCard',
    data () {
      return {
        activeNameClass: false,
        searchContent: ''
      }
    },
    computed: {
      ...mapGetters({
        nickname: 'nickname'
      }),
      selfAvatar() {
        return staticFriendAvatarPath + this.nickname + '.jpg'
      }
    },
    methods: {
      hideActive() {
        this.activeNameClass = true;
      },
      showActive() {
        this.activeNameClass = false;
        this.searchContent = ' ';
      }
    }
  }
</script>

<style scoped>
  header {
    display: block;
    color: #fff;
    padding-top: 1em;
    text-align: center;
  }
  footer {
    padding-bottom: 1em;
    position: relative;
  }
  footer input {
    background-color: #fff;
    text-align: center;
    height: 2em;
    margin: 0px auto;
    display: block;
    border-radius: 1em;
  }
  footer .card-search {
    position: absolute;
    right: 36px;
    bottom: 1em;
  }
  footer .card-search.hide {
    display: none;
  }

</style>
