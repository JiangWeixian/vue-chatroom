<template>
  <div id="APP">
    <app-common-header></app-common-header>
    <app-body v-bind:id="id"></app-body>
  </div>
</template>

<script>
  import AppCommonHeader from './AppCommonHeader'
  import AppBody from './AppBody'
  import { url } from '../config/cfg'
  import { mapGetters } from 'vuex'
  export default {
    components: {AppBody, AppCommonHeader},
    name: 'Application',
    data() {
      return {
        msg: '',
        id: ''
      }
    },
    created() {
      const name = 'application'
        ,id = this.$route.params.id;
      this.id = id;
      this.$http.get(url + name + '/' + id).then((res) => {
        console.log(res.body);
        this.$store.dispatch('setAppSketch', res.body)
      }, (res) => {
        console.log('something wrong')
      })
    }
  }
</script>

<style>
  .app-header {
    background:url("../assets/login-bg.jpg") no-repeat fixed center;
  }
  .app-body {
    width: 100%;
    margin: 0 auto;
  }
</style>

