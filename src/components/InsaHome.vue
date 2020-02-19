<template>
    <v-container class="main-page">
        <div class="image-container-1">
            <img class="img1" src="https://d2461yysjut9f6.cloudfront.net/photos/cover_page_kids.jpg"/>
        </div>
        <div class="about-us-insa" id="about">
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
            <img class="img2" src="https://d2461yysjut9f6.cloudfront.net/photos/school_life_1.jpg"/>
        </div>
        <div class="history-insa" id="history">
            <v-card class="card-history">
                <v-card-title class="display-1">{{ $t('history') }}</v-card-title>
                <v-card-text class="body-2">
                    <p class="text-justify">{{ $t('content-insa.history') }}</p>
                </v-card-text>
            </v-card>
        </div>

        <div class="image-container-2">
            <img class="img2" src="https://d2461yysjut9f6.cloudfront.net/photos/cultural_week_1.jpg"/>
        </div>

        <div class="mission-insa" id="mission">
            <v-card class="card-mission">
                <v-card-title class="display-1">{{ $t('mission') }}</v-card-title>
                <v-card-text class="body-2">
                    <p class="text-center">{{ $t('content-insa.mission') }}</p>
                </v-card-text>
            </v-card>
        </div>

        <div class="image-container-2">
            <img class="img2" src="https://d2461yysjut9f6.cloudfront.net/photos/mission.jpg"/>
        </div>

        <div class="vision-insa" id="vision">
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
import { mapState } from 'vuex';

export default {
    name: 'InsaHome',
    props: {
        msg: String,
    },
    methods: {
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

<style lang="scss" scoped>
@import "../styles/settings.scss";
.main-page {
    width: 100% !important;
    max-width: 100% !important;
    height: 100% !important;
    padding: 0px !important;

    .image-container-1 {
        width: 100%;
        background-color: white;
        .img1 {
            width: inherit;
            mask-image: url('../assets/mask1.svg');
            mask-size: cover;
            mask-position: left bottom;
            mask-repeat: no-repeat;
        }
    }

    .about-us-insa {
        width: 100%;
        .card-about {
            z-index: 2;
            border: none !important;
            border-radius: 0px !important;
            width: inherit;
            mask-image: url('../assets/mask1.svg');
            mask-size: cover;
            mask-position: left bottom;
            mask-repeat: no-repeat;
        }
    }

    .image-container-2 {
        width: 100%;
        background-color: white;
        margin-top: -29px;
        .img2 {
            width: inherit;
            mask-image: url('../assets/mask1.svg');
            mask-size: cover;
            mask-position: left bottom;
            mask-repeat: no-repeat;
        }
    }

    .history-insa {
        width: 100%;
        .card-history {
            z-index: 2;
            border: none !important;
            border-radius: 0px !important;
            width: inherit;
            mask-image: url('../assets/mask1.svg');
            mask-size: cover;
            mask-position: left bottom;
            mask-repeat: no-repeat;
        }
    }

    .mission-insa {
        width: 100%;
        .card-mission {
            z-index: 2;
            border: none !important;
            border-radius: 0px !important;
            width: inherit;
            mask-image: url('../assets/mask1.svg');
            mask-size: cover;
            mask-position: left bottom;
            mask-repeat: no-repeat;
        }
    }

    .vision-insa {
        width: 100%;
        .card-vision {
            z-index: 2;
            border: none !important;
            border-radius: 0px !important;
            width: inherit;
            mask-image: url('../assets/mask1.svg');
            mask-size: cover;
            mask-position: left bottom;
            mask-repeat: no-repeat;
        }
    }
}
</style>
