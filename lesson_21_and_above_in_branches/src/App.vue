<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <!--                 |        |       -->
    <!-- (data from Ninjas.vue) (this data)  -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>




<script>
  // Imports
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Ninjas from './components/Ninjas.vue';

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-ninjas': Ninjas
    },
    data() {
      return {
        //  Object and Array it is a reference types.
        //  If child update root reference type data
        //  they will be updated everywhere
        ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
        ],
          // If data have primitive type: String, Number, Boolean
          // data will be updated locally in each component
          title: 'Vue Ninjas sa'
      }
    }
  }
</script>



<style>
  body {
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
