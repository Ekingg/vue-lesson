<template>
  <div>
    <h1>Main page</h1>
    <nav>
      <ul>
        <!-- This way will reload page -->
        <!--<li><a href="/">Home</a></li>-->
        <!--<li><a href="/one">Page one</a></li>-->
        <!--<li><a href="/two">Page two</a></li>-->

        <li>
          <router-link to="/" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/one" exact>Page one</router-link>
        </li>
        <li>
          <router-link to="/two" exact>Page two</router-link>
        </li>
        <!-- exact for selector .router-link-active:
             exactly for this url without any parent-->
      </ul>
    </nav>
    <router-view></router-view>
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

  .router-link-active {
    background-color: cornflowerblue;
    border-radius: 3px;
  }
</style>
