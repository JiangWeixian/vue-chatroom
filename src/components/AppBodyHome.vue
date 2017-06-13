<template>
  <div>
    <ul>
      <li v-for="poster in posters" class="body-item">
        <p>{{ poster.name }}</p>
        <img :src="poster.img"/>
        <p>
          <span>{{ poster.imdb }}</span>
          <span>{{ poster.time | time }}</span>
          <span>{{ poster.like }}</span>
        </p>
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

<style scoped>
  li.body-item, img {
    width: 100%;
  }
</style>
