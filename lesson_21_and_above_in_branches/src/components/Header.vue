<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>


<script>
  import { bus } from '../main.js'

    export default {
        props: {
            title: {
                type: String
            }
        },
        data() {
            return {}
        },
        methods: {
            changeTitle: function(){
                // emitting events ( излучаем событие ) to bus element
                // and then, listen there event with name titleChanged in Footer
                bus.$emit('titleChanged', 'This is a new title send to Footer');
                this.title = 'And together change Header Title'
              //            (event)         (data sending with event)
            }
        }
    }
</script>


<style scoped>
    header {
        background: lightgreen;
        padding: 10px;
    }

    h1 {
        color: #222;
        text-align: center;
    }
</style>
