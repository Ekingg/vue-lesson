<!-------------------- HTML ------------------------>
<template>
  <ul>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</template>


<!--------------------- JS ------------------------->
<script>
  export default {
    data() {
      return {
        ninjas: ['Yoshi', 'Mario', 'Rui']
      }
    }
  }
</script>


<!-------------------- CSS ------------------------->
<style scoped>

</style>
