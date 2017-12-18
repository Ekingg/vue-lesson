import Vue from 'vue'
import App from './App.vue'

Vue.directive('rainbow', {
  inserted: function (el) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
});


Vue.directive('theme', {
  bind(el, binding, vnode){
    if( binding.value === 'wide' ){
      el.style.maxWidth = '800px';
    } else if( binding.value === 'narrow' ){
      el.style.maxWidth = '400px';
    }
    if (binding.arg === 'bordered'){
      el.style.border = '1px solid black';
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
});
