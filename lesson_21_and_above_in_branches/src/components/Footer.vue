<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>
<script>
    export default {
        props: {
            title: {
                type: String
            }
        },
        data() {
            return {
                copyright: 'Panda copyrights'
            }
        }
    }
</script>
<style scoped>
    footer {
        background: #222;
        padding: 6px;
    }

    p {
        color: lightgreen;
        text-align: center;
    }
</style>
