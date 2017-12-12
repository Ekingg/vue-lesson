<!-------------------- HTML ------------------------>
<template>
  <div>
    <h1>List of ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
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
  h1 {
    color: green;
  }
</style>
