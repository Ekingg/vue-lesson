import Vue from 'vue'
import App from './App.vue'


Vue.filter('spaced-str', function (value) {
  let spacedString = '';
  for(let i = 0; i < value.length; i++){
    spacedString += value.charAt(i) + ' ';
  }
  return spacedString;
});


Vue.filter('snippet', function(value){
  return value.slice(0, 1)
});

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
