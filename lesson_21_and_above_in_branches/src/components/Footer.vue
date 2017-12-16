<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>
<script>
  import {bus} from '../main.js'

  export default {
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        copyright: 'Panda copyrights'
      }
    },
    created() {
      // listen event from Footer component through bus object
      bus.$on('titleChanged', (data) => { this.title = data })
    }
  }
</script>
<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }

  p {
    color: lightgreen;
    text-align: center;
  }
</style>
