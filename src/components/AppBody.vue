<template>
  <div class="app-body">
    <div class="body-tabs-container">
      <mu-tabs class="body-tabs">
        <mu-tab value="info" title="INFO" :to="infoUrl" class="tab"/>
        <mu-tab value="home" title="HOME" :to="homeUrl" class="tab"/>
      </mu-tabs>
    </div>
    <router-view class="body-view"></router-view>
  </div>
</template>

<script>
  import MuTab from "../../node_modules/muse-ui/src/tabs/tab";
  import MuTabs from "../../node_modules/muse-ui/src/tabs/tabs";
  export default {
    components: {MuTabs, MuTab},
    name: 'AppBody',
    props: ['id'],
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      infoUrl() {
        return '/application/' + this.id + '/info'
      },
      homeUrl() {
        return '/application/' + this.id + '/home'
      }
    }
  }
</script>

<style scoped>
  .body-tabs-container {
    background-color: #7e57c2;
  }
  .body-tabs {
    width: 40%;
    margin: 0 auto;
  }
  .body-view {
    width: 60%;
    margin: 2em auto;
  }
</style>
