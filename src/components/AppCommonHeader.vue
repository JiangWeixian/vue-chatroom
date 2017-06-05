<template>
  <div class="app-header">
    <div class="header-info">
      <mu-avatar :src="currentAppThread.avatar" :alt="currentAppThread.name" :size="150" class="header-avatar"/>
      <p class="header-name">{{ currentAppThread.name }}</p>
    </div>
    <div class="header-button">
      <mu-raised-button label="Follow" icon="add" class="button" primary/>
      <mu-raised-button label="Message" icon="email" class="button" default/>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MuAvatar from "../../node_modules/muse-ui/src/avatar/avatar";
  import MuRaisedButton from "../../node_modules/muse-ui/src/raisedButton/raisedButton";
  import MuPaper from "../../node_modules/muse-ui/src/paper/paper";
  export default {
    components: {MuPaper, MuRaisedButton, MuAvatar},
    name: 'AppCommonHeader',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        currentAppThread: 'currentAppThread'
      })
    }
  }
</script>

<style scoped>
  .header-info, .header-button {
    margin: 0 auto;
    padding: 1em 0;
    text-align: center;
  }
  .header-info .header-name {
    color: #fff;
    font-size: 1.5em;
    text-transform: uppercase;
  }
  .header-info .header-avatar {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.117647);
  }
  .header-button .button {
    margin-left: 0.5em;
  }
</style>
