//Reusable common blocks of code
// for every declaration creates new independent instance
Vue.component('greeting', {
   template:
   '<p>Hey there, i am {{name}}' +
   '<button v-on:click="changeName">Change name</button>' +
   '</p>',
    data: function(){
       return {
           name: 'Yoshi'
       }
    },
    methods: {
       changeName: function(){
           this.name = 'Mario'
       }
    }
});

var one = new Vue({
    el:'#app-one'
});
var two = new Vue({
    el:'#app-two'
});