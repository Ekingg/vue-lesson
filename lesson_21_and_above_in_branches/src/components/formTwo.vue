<template>
  <div>
    <form-helper>
      <div slot="form-field">
        <h1>We call you!</h1>
        <input type="tel" placeholder="STEP 2: PHONE NUM">
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
