<template>
    <v-toolbar-title class="headline">
        <v-container justify-center>
            <v-layout row align-center class="header">
                <v-flex md2 xs3>
                    <v-btn class="menu-btn" @click="showUpMenu()">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                    <img class="insa-logo" src="./../assets/insa_logo.png">
                </v-flex>
                <v-flex md10 xs9>
                    <div :class="{'ma-0': $vuetify.breakpoint.smAndDown}">
                        <span>INSA</span>
                        <span class="font-weight-light">
                            ~ Instituto Nuestra Señora de la Asunción
                        </span>
                    </div>
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
.header {
    margin-right: 0px !important;
}
</style>
