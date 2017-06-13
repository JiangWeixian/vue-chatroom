<template>
  <div>
    <mu-paper>
      <ul class="info-header">
        <li><span class="prefix">creater:</span><mu-flat-button :label="''+info.creater"/></li>
        <li><span class="prefix">follow:</span><mu-flat-button :label="''+info.follow"/></li>
        <li><span class="prefix">post:</span><mu-flat-button :label="''+info.post"/></li>
      </ul>
      <mu-divider/>
      <div class="info-body">
        <mu-card-title :title="info.body.title"/>
        <mu-card-text>{{ info.body.sketch }}</mu-card-text>
      </div>
    </mu-paper>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MuPaper from "../../node_modules/muse-ui/src/paper/paper";
  import MuFlatButton from "../../node_modules/muse-ui/src/flatButton/flatButton";
  import MuAvatar from "../../node_modules/muse-ui/src/avatar/avatar";
  import MuCardTitle from "../../node_modules/muse-ui/src/card/cardTitle";
  import MuCardText from "../../node_modules/muse-ui/src/card/cardText";
  export default {
    components: {MuCardText, MuCardTitle, MuAvatar, MuFlatButton, MuPaper},
    name: 'AppBodyInfo',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        info: 'currentAppThreadInfo'
      })
    }
  }
</script>

<style scoped>
  .info-header {
    font-size: 0px;
  }
  .info-header li {
    display: inline-block;
    width: 33%;
    text-align: center;
  }
  .info-header li span.prefix {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
