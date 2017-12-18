<template>
  <div>
    <h1>All about planets</h1>
    <input type="text" v-model="searchPlanet" placeholder="search planet">
    <ul>
      <li v-rainbow v-for="planet in filteredPlanets">
        {{ planet.name }}
        <br>
        {{ planet.description }}
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {},
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
    methods: {},
    computed: {
      filteredPlanets: function () {
        return this.planets.filter((planet) => {
          return planet.description.toLowerCase().match(this.searchPlanet.toLowerCase()) ||
            planet.name.toLowerCase().match(this.searchPlanet.toLowerCase());
        })
      }
    }
  }
</script>

<style>
  ul {
    background-color: lightgrey;
    width: 400px;
  }

  input {
    width: 435px;
  }
</style>
