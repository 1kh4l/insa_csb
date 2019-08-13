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
        <div class="image-container-1">
            <img class="img1" src="../assets/img1.jpg"/>
        </div>
        <div class="about-us-insa">
            <v-card>
                <v-card-title class="display-1">{{ $t('about') }}</v-card-title>
                <v-card-text class="body-2">
                    <p class="text-justify"> {{ $t('content-insa.about[0]') }} </p>
                    <p class="text-justify"> {{ $t('content-insa.about[1]') }} </p>
                    <p class="text-justify"> {{ $t('content-insa.about[2]') }} </p>
                    <p class="text-center"> {{ $t('content-insa.about[3]') }} </p>
                    <p class="text-right"> {{ $t('content-insa.about[4]') }} </p>
                    <!-- Initial project in INSA -->
                    <p class="title"> {{ $t('content-insa.about[5]') }} </p>
                    <p class="text-justify"> {{ $t('content-insa.about[6]') }} </p>
                    <p class="text-right"> {{ $t('content-insa.about[7]') }} </p>
                    <p class="text-justify"> {{ $t('content-insa.about[8]') }} </p>
                    <p class="text-right"> {{ $t('content-insa.about[9]') }} </p>
                </v-card-text>
            </v-card>
        </div>
        <div class="inter-images">
        </div>
        <div class="history-insa">
            <v-card>
                <v-card-title class="display-1">{{ $t('history') }}</v-card-title>
                <v-card-text class="body-2">
                    <p class="text-justify">{{ $t('content-insa.history') }}</p>
                </v-card-text>
            </v-card>
        </div>

        <div class="mission-insa">
            <v-card>
                <v-card-title class="display-1">{{ $t('mission') }}</v-card-title>
                <v-card-text class="body-2">
                    <p class="text-center">{{ $t('content-insa.mission') }}</p>
                </v-card-text>
            </v-card>
        </div>

        <div class="vission-insa">
            <v-card>
                <v-card-title class="display-1">{{ $t('vision') }}</v-card-title>
                <v-card-text class="body-2">
                    <p class="text-center">{{ $t('content-insa.vision') }}</p>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
/* import APIService from '../services/APIService'; */

/* const api = new APIService(); */

export default {
    name: 'InsaHome',
    props: {
        msg: String,
    },
    methods: {
        /*
         getData() {
            api.getTodos().then((data) => {
                this.myData = data;
                console.log({ data });
                console.log(this.items);
            });
            },
        */
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

    .image-container-1 {
        width: 100%;
        .img1 {
            width: inherit;
            mask-image: url('../assets/mask1.svg');
            mask-size: cover;
            mask-position: left bottom;
            mask-repeat: no-repeat;
        }
    }
}
</style>
