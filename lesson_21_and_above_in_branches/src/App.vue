<template>
  <div>
    <h1>All about planets</h1>
    <input type="text" v-model="searchPlanet" placeholder="search planet">
    <ul>
      <li v-rainbow v-for="planet in filteredPlanets">
        {{ planet.name | toUppercase }}
        <br>
        {{ planet.description }}
        <hr>
      </li>
    </ul>
    <all-stars></all-stars>
  </div>
</template>

<script>
  import planets from './components/anotherPlanets'
  import searchMixins from './mixins/serchMixins'
  export default {
    components: {
      'all-stars': planets
    },
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
    computed: {},
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    directives: {
      'rainbow': {
        bind(el, binding, vnode) {
          el.style.color = '#' + Math.random().toString().slice(2, 8);
        }
      }
    },
    mixins:[searchMixins]
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
