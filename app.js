new Vue({
    el: '#vue-app',
    data: {
        name: 'Alexey',
        job: 'Developer'
    },
    methods: {
        greet: function () {
            return 'Good Morning'
        }
    }
});