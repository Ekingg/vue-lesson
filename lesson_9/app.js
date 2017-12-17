var one = new Vue({
    el: '#app-formOne',
    data: {
        title: 'Vue app formOne'
    },
    methods: {},
    computed: {
        greet: function(){
            return 'Hello from app 1'
        }
    }
});
var two = new Vue({
    el: '#app-formTwo',
    data: {
        title: 'Vue app formTwo'
    },
    methods: {
        changeTitle: function(){
            //interaction with first Vue instance saved in variable with name "formOne"
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