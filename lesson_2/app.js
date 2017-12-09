new Vue({
    el: '#app',
    data: {
        name: 'Alexey',
        age: 26,
        x: 0,
        y: 0
    },
    methods: {
        add: function (year) {
            this.age += year;
        },
        subtract: function (year) {
            this.age -= year;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        visit: function () {
            alert('Go to VK');
        }
    }
});
