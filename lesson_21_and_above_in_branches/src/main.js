import Vue from 'vue'
import App from './App.vue'

// create element for event exchanges between components
//(directly, no through root component)
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
