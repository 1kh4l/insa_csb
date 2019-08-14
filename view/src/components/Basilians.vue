<template>
    <v-container class="basilians-page">
        <!--<div class="container-video">
            <video class="insa-video" autoplay muted loop id="myVideo">
                <source src="../assets/landing-video.mp4" type="video/mp4">
            </video>
        </div>-->
        <div class="image-container-1">
            <img class="img1" src="../assets/img1.jpg"/>
        </div>
        <div class="about-us-basilians">
            <v-card class="card-about">
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
        <div class="image-container-2">
            <img class="img2" src="../assets/img1.jpg"/>
        </div>
        <div class="history-basilians">
            <v-card class="card-history">
                <v-card-title class="display-1">{{ $t('history') }}</v-card-title>
                <v-card-text class="body-2">
                    <p class="text-justify">{{ $t('content-insa.history') }}</p>
                </v-card-text>
            </v-card>
        </div>

        <div class="image-container-2">
            <img class="img2" src="../assets/img1.jpg"/>
        </div>

        <div class="basilians-work">
            <v-card class="card-vision">
                <v-card-title class="display-1">{{ $t('vision') }}</v-card-title>
                <v-card-text class="body-2">
                    <p class="text-center">{{ $t('content-insa.vision') }}</p>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>

<script>

export default {
    name: 'Basilians',
    data: () => ({
    }),
};
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";

</style>
