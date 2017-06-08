<template>
  <div>
    <ul>
      <li>
        <p>{{ posters }}</p>
        <img/>
      </li>
    </ul>
    <div></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'AppBodyHome',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        posters: 'currentAppThreadPosters'
      }),
      sortedPosters() {
        return this.posters
          .slice()
          .sort((a, b) => {return a.timestamp - b.timestamp})
      }
    },
    created() {
      console.log('ok')
    }
  }
</script>
