<template>
    <v-toolbar-title class="headline">
        <v-container class="container-nav-bar" justify-center>
            <v-layout row align-center class="row-logo">
                <v-flex md3 xs3>
                    <img class="insa-logo" src="./../assets/insa_logo.png">
                    <v-btn class="menu-btn" @click="showUpMenu()">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex md8 xs8>
                    <v-layout column :class="{'ma-0': $vuetify.breakpoint.smAndDown}"
                     class="title-container">
                        <v-layout row class="insa-title">
                            <span>INSA</span>
                            <span class="font-weight-light">
                                ~ Instituto Nuestra Señora de la Asunción
                            </span>
                        </v-layout>
                        <span class="overline motto-insa text-end">
                            Enseñanos bondad, disciplina y ciencia
                        </span>
                    </v-layout>
                </v-flex>
                <v-flex md1 xs1>
                    <div>Language</div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-toolbar-title>
</template>

<script>
import { mapState } from 'vuex';

export default {
    methods: {
        showUpMenu() {
            this.$store.dispatch('items/setVisibility', {
                visible: true,
            });
        },
    },
    computed: {
        ...mapState('items', ['items']),
    },
    data: () => ({
        //
    }),
};
</script>

<style>
.insa-logo {
    padding-top: 10px;
    max-height: 65px;
    max-width: 52px;
}
.ma-0 {
    font-size: 0.5em;
}
.menu-btn {
    top: -23px;
    background-color: transparent !important;
    color: black !important;
    box-shadow: none !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    min-width: 0px !important;
    border-radius: 50% !important;
    width: 36px !important;
}
.menu-btn:hover {
    background-color: transparent !important;
    box-shadow: none !important;
    border-radius: 50% !important;
    justify-content: center !important;
    width: 36px !important;
}
.row-logo {
    margin-right: 0px !important;
}
.container-nav-bar {
    width: 100%;
    padding: 0px;
    margin: 0px;
    max-width: 100%;
}
.headline {
    width: 100%;
    padding-left: 13px;
}
.insa-title {
    padding-top: 10px;
}
</style>
