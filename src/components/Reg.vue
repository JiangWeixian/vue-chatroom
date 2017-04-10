<template>
  <div class="reg-page-bg">
    <reg-panel></reg-panel>
  </div>
</template>

<script>
  import RegPanel from './RegPanel.vue'
  export default {
    name: 'Reg',
    components: { RegPanel },
    data() {
      return {
        Reg: ''
      }
    }
  }
</script>


<style scoped>
  .reg-page-bg {
    overflow: hidden;
    height: 100%;
    width: 100%;
    background:url("../assets/login-bg.jpg") no-repeat fixed center;
  }
</style>
