<template>
  <div class="card">
    <header>
      <mu-avatar :src="selfAvatar" :alt="nickname"/>
      <p class="selfnickname">{{ nickname }}</p>
    </header>
    <footer>
    </footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { staticFriendAvatarPath } from '../config/cfg'
  import MuAvatar from "../../node_modules/muse-ui/src/avatar/avatar";
  import MuDivider from "../../node_modules/muse-ui/src/divider/divider";
  import MuIcon from "../../node_modules/muse-ui/src/icon/icon";
  export default {
    components: {MuIcon, MuAvatar},
    name: 'ChatSiderbarCard',
    data () {
      return {
        msg: ''
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
</style>
