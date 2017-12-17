<template>
  <div>
    <form-helper>
      <div slot="form-field">
        <h1>Welcome to first step of shopping</h1>
        <input type="text" placeholder="form one">
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './formHelper'

  export default {
    components: {
      'form-helper': formHelper
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>
