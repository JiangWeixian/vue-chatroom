<template>
  <div class="chat-main-title">
    <mu-list>
      <mu-list-item :title="currentThread.name">
        <mu-avatar :src="threadAvatar" slot="leftAvatar"></mu-avatar>
        <mu-icon-menu slot="right" icon="more_vert">
          <mu-menu-item title="HOMEPAGE" />
          <mu-menu-item title="REMOVE" />
        </mu-icon-menu>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  import MuList from "../../node_modules/muse-ui/src/list/list";
  import MuListItem from "../../node_modules/muse-ui/src/list/listItem";
  import MuAvatar from "../../node_modules/muse-ui/src/avatar/avatar";
  import { staticFriendAvatarPath } from '../config/cfg'
  import { mapGetters } from 'vuex'
  import MuIconMenu from "../../node_modules/muse-ui/src/iconMenu/iconMenu";
  export default {
    components: {MuIconMenu, MuAvatar, MuListItem, MuList},
    name: 'ChatMainTitle',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        currentThread: 'currentThread'
      }),
      threadAvatar() {
        return staticFriendAvatarPath + this.currentThread.name + '.jpg'
      }
    }
  }
</script>

<style>
  .chat-main-title .mu-item {
    color: #000000;
    overflow: hidden;
  }
</style>
