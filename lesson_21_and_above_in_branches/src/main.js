import Vue from 'vue'
import App from './App.vue'

/*Vue.directive('rainbow', {
  inserted: function (el) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
});*/


new Vue({
  el: '#app',
  render: h => h(App)
});
