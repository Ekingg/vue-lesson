<template>
  <div>
    <ul v-theme="'wide'">
      <li v-rainbow v-for="planet in planets">{{ planet }}</li>
    </ul>
    <ul v-theme:bordered="'narrow'">
      <li v-rainbow v-for="planet in planets">{{ planet }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        planets: ['Earth', 'Mars', 'Venus', 'Jupiter' ]
      }
    },
    methods: {}
  }
</script>

<style>
  ul {
    background-color: lightgrey;
  }
</style>
