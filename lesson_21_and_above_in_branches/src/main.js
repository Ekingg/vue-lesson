import Vue from 'vue'
import App from './App.vue'

//    For Vue Http requests
//     npm install vue-resource --save
import VueResource from 'vue-resource'

Vue.use(VueResource);

// create element for event exchanges between components
//(directly, no through root component)
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
