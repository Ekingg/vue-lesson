<template>
  <div>
    <h1>Main page</h1>
    <router-view></router-view>
    <!--<page-one></page-one>-->
    <!--<page-two></page-two>-->
  </div>
</template>

<script>
import pageOne from './components/page-1'
import pageTwo from './components/page-2'

  export default {
    components: {
      'page-one': pageOne,
      'page-two': pageTwo
    },
    data() {
      return {}
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
