<template>
    <div class="test">
        <h1>{{ msg }}</h1>
        <button v-on:click="getData()">SHOT</button>
    </div>
</template>

<script>
import APIService from '../services/APIService';

const api = new APIService();

export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    methods: {
        getData() {
            api.getTodos().then((data) => {
                console.log(data);
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
