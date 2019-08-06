<template>
    <v-container class="main-page">
        <v-card v-if="testShow"  max-width="344" class="mx-auto">
            <v-card-title>INSA CSB</v-card-title>
            <v-card-text>Getting data: </v-card-text>
            <v-card-text>{{ msg }}</v-card-text>
            <v-card-text>{{ myData }}</v-card-text>
            <v-card-text v-if="items.length">{{ items }}</v-card-text>
            <v-card-actions>
                <v-btn v-on:click="getData(); setData();"> GET </v-btn>
            </v-card-actions>
        </v-card>

        <!--<div class="container-video">
            <video class="insa-video" autoplay muted loop id="myVideo">
                <source src="../assets/landing-video.mp4" type="video/mp4">
            </video>
        </div>-->

        <div class="about-us-insa">
            <v-card>
                <v-card-title>ABOUT US</v-card-title>
                <v-card-text>Here we go</v-card-text>
            </v-card>
        </div>
        <div class="inter-images">
        </div>
        <div class="history-insa">
            <v-card>
                <v-card-title>HISTORY</v-card-title>
                <v-card-text> Here we go </v-card-text>
            </v-card>
        </div>

        <div class="mission-insa">
            <v-card>
                <v-card-title>MISSION</v-card-title>
                <v-card-text> Here we go </v-card-text>
            </v-card>
        </div>

        <div class="vission-insa">
            <v-card>
                <v-card-title>VISION</v-card-title>
                <v-card-text> Here we go </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import APIService from '../services/APIService';

const api = new APIService();

export default {
    name: 'InsaHome',
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
        testShow: false,
    }),
};
</script>

<style lang="scss">
@import "../styles/settings.scss";

.insa-video {
    width: 100%;
    height: 100%;
    background-color: black;
    /*filter:blur(5px);*/
}
.main-page {
    width: 100% !important;
    max-width: 100% !important;
    height: 100% !important;
    padding: 0px !important;
}
</style>
