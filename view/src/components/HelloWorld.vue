<template>
    <v-container>
        <v-card  max-width="344" class="mx-auto">
            <v-card-title>INSA CSB</v-card-title>
            <v-card-text>Getting data: </v-card-text>
            <v-card-text>{{ msg }}</v-card-text>
            <v-card-text>{{ myData }}</v-card-text>
            <v-card-actions>
                <v-btn v-on:click="getData()"> GET </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
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
                this.myData = data[0].name;
                console.log({ data });
            });
        },
    },
    data: () => ({
        myData: 'This is my data',
    }),
};
</script>
