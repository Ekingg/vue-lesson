<template>
  <div>
    <h1>All about another planets</h1>
    <ul>
      <input type="text" v-model="searchPlanet" placeholder="search planets">
      <li v-for="star in filteredPlanets">
        {{ star.name }}
        <br>
        {{ star.description }}
        <hr>
      </li>
    </ul>
  </div>

</template>

<script>
  import serchMixins from '../mixins/serchMixins'
  export default {
    name: "other-planet",

    data() {
      return {
        planets: [
          {name: 'Earth', description: 'Wonderful planet with people and other lives'},
          {name: 'Mars', description: 'Cold, red'},
          {name: 'Venus', description: 'Warm, blue'},
          {name: 'Jupiter', description: 'Big... and something else'}
        ],
        searchPlanet: ''
      }
    },

    computed: {},
    mixins: [serchMixins]

  }
</script>

<style scoped>

</style>
