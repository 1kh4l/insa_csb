<template>
    <v-container class="basilians-page">
        <div class="image-container-1">
            <img class="img1" src="../assets/img1.jpg"/>
        </div>
        <div class="about-us-basilians">
            <v-card class="card-about">
                <v-card-title class="display-1">{{ $t('about') }}</v-card-title>
                <v-card-text class="body-2">
                    <p class="text-justify"> {{ $t('content-basilians.about[0]') }} </p>
                    <p class="text-justify"> {{ $t('content-basilians.about[1]') }} </p>
                    <p class="text-justify"> {{ $t('content-basilians.about[2]') }} </p>
                    <p class="text-justify"> {{ $t('content-basilians.about[3]') }} </p>
                    <p class="text-justify"> {{ $t('content-basilians.about[4]') }} </p>
                    <p class="text-justify"> {{ $t('content-basilians.about[5]') }} </p>
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
                    <p class="text-justify">{{ $t('content-basilians.history[0]') }}</p>
                    <p class="text-justify">{{ $t('content-basilians.history[1]') }}</p>
                    <p class="text-justify">{{ $t('content-basilians.history[2]') }}</p>
                    <p class="text-justify">{{ $t('content-basilians.history[3]') }}</p>
                    <p class="text-justify">{{ $t('content-basilians.history[4]') }}</p>
                    <p class="text-justify">{{ $t('content-basilians.history[5]') }}</p>
                    <p class="text-justify">{{ $t('content-basilians.history[6]') }}</p>
                </v-card-text>
            </v-card>
        </div>

        <div class="image-container-2">
            <img class="img2" src="../assets/img1.jpg"/>
        </div>

        <div class="basilians-work">
            <v-card class="card-vision">
                <v-card-title class="display-1">
                    {{ $t('sidenav.basilians.items.work') }}
                </v-card-title>
                <v-card-text class="body-2">
                    <blockquote class="text-center blockquote">
                        <span class="font-weight-bold">"</span>
                        {{ $t('content-basilians.our-work') }}
                        <span class="font-weight-bold">"</span>
                    </blockquote>
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

.basilians-page {
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

    .about-us-basilians {
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

    .history-basilians {
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

    .basilians-work {
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
