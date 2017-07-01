<template>
  <div class="userinfo" id="USERINFO">
    <user-common-header></user-common-header>
  </div>
</template>

<script>
  import UserCommonHeader from './UserCommonHeader'
  export default {
    components: {UserCommonHeader},
    name: 'UserInfo',
    data() {
      return {
        msg: '',
      }
    }
  }
</script>
