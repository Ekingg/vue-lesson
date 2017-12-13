<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    //props: ['ninjas'], // To receive from the root component
    // and You can check type of received object
    // if it's not true, all will work,
    // but You see error message in console
    props: {
      ninjas: Array,
      required: true
    },
    // Used if we want to have have access to common data in many pages
    data() {
      return {}
    }
  }
</script>


<style scoped>
  #ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  li:hover {
    transition: all 0.5s;
    background: cornflowerblue;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
