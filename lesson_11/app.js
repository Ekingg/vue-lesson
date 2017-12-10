//refs used for any DOM elements to grab any info about it
new Vue({
    el: '#app',
    data: {
        output: '?'
    },
    methods: {
        readRefs: function () {
            //console.log(this.$refs.someInput.value);
            this.output = this.$refs.someInput.value;
            console.log(this.$refs.someSpan.innerText)
        }
    }
});