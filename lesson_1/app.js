new Vue({
    el: '#vue-app',
    data: {
        name: 'Alexey',
        job: 'Developer',
        website: 'https://vk.com/im?sel=63014461',
        websiteTag: '<a href="https://vk.com/im?sel=63014461">my site</a>'
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time +' ' + this.name;
        }
    }
});
