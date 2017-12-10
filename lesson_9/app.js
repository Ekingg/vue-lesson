var one = new Vue({
    el: '#app-one',
    data: {
        title: 'Vue app one'
    },
    methods: {},
    computed: {
        greet: function(){
            return 'Hello from app 1'
        }
    }
});
var two = new Vue({
    el: '#app-two',
    data: {
        title: 'Vue app two'
    },
    methods: {
        changeTitle: function(){
            //interaction with first Vue instance saved in variable with name "one"
            one.title = 'Changed title';
        }
    },
    computed: {
        greet: function(){
            return 'Hello from app 2'
        }
    }
});

two.title = 'Changed from outside';