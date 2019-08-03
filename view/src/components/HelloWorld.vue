<template>
    <v-container>
        <v-card  max-width="344" class="mx-auto">
            <v-card-title>INSA CSB</v-card-title>
            <v-card-text>Getting data: </v-card-text>
            <v-card-text>{{ msg }}</v-card-text>
            <v-card-text>{{ myData }}</v-card-text>
            <v-card-text v-if="items.length">{{ items }}</v-card-text>
            <v-card-actions>
                <v-btn v-on:click="getData(); setData();"> GET </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
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
                this.myData = data;
                console.log({ data });
                console.log(this.items);
            });
        },
        setData() {
            this.$store.dispatch('items/addItem', {
                name: 'example',
                data: 'bye',
            });
        },
    },
    computed: {
        ...mapState('items', ['items']),
    },
    data: () => ({
        myData: [],
    }),
};
</script>
