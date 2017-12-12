<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
  //register component just here
  import Ninjas from './Ninjas.vue'
  export default {
    components: {
      ninjas: Ninjas
    },
    data() {
      return {
        title: 'Ninja app'
      }
    }
  }
</script>

<style>

</style>
