<template>
  <div>
    <ul v-theme="'wide'">
      <li v-rainbow v-for="planet in planets">{{ planet | spaced-str }}</li>
    </ul>
    <ul v-theme:bordered="'narrow'">
      <li v-rainbow v-for="planet in planets">{{ planet | snippet }}
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aut cumque debitis dolorem ea hic
          inventore laudantium natus neque, nulla praesentium quasi qui rem reprehenderit voluptas. Animi autem
          doloribus natus.

        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        planets: ['Earth', 'Mars', 'Venus', 'Jupiter']
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
