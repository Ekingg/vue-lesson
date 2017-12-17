<!-- Root Component -->
<template>
  <div>
    <!--Use keep alive to save preset values-->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <br>
    <button v-on:click="component='form-one'">show form one</button>
    <button v-on:click="component='form-two'">show from two</button>
  </div>
</template>


<script>
  import formOne from './components/formOne'
  import formTwo from './components/formTwo'

  export default {
    components: {
      'form-one': formOne,
      'form-two': formTwo
    },
    data() {
      return {
        component: 'form-one'
      }
    }
  }
</script>


<style>
</style>
