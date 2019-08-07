<template>
    <v-container class="container-nav-bar" justify-center>
        <v-layout row align-center class="row-logo">
            <v-flex class="logo-btn" md1 xs3>
                <img class="insa-logo" src="./../assets/insa_logo.png">
                <v-btn class="menu-btn" @click="showUpMenu()">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </v-flex>
            <v-flex class="title-motto" md10 xs8>
                <v-layout column align-center :class="{'ma-0': $vuetify.breakpoint.smAndDown}">
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
                <div class="lang-btn">
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark v-on="on">
                                <flag :iso="flagSelected.id"/>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="insaFlag in flags"
                             @click="selectFlag(insaFlag)" :key="insaFlag.id">
                                <v-list-item-title>
                                    <flag :iso="insaFlag.id"/>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
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
        selectFlag(flag) {
            this.flagSelected = this.flags.filter(f => f.id === flag.id)[0];
        },
    },
    computed: {
        ...mapState('items', ['items']),
    },
    data: () => ({
        flags: [
            {
                nationality: 'Colombian',
                id: 'co',
            },
            {
                nationality: 'Britain',
                id: 'gb',
            },
            {
                nationality: 'French',
                id: 'fr',
            },
            {
                nationality: 'Italian',
                id: 'it',
            },
        ],
        flagSelected: {
            nationality: 'Colombian',
            id: 'co',
        },
    }),
};
</script>

<style lang="scss">
.toolbar-insa {
    padding: 0px 8px 0px 8px;
}
.logo-btn {
    max-height: 64px;
}
.insa-logo {
    padding-top: 4px;
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
.title-motto {
    height: 64px !important;
}
</style>
