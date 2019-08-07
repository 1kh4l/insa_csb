<template>
    <!-- CONTAINER NAVIGATION BAR -->
    <v-container class="container-nav-bar" justify-center>
        <!-- ROW WITH LOGO | SIDENAV MENU | INTERNATIONALIZATION CHANGE -->
        <v-layout row align-center class="row-logo">
            <!-- LOGO | SIDENAV MENU -->
            <v-flex class="logo-btn" md1 xs3>
                <img class="insa-logo" src="./../assets/insa_logo.png">
                <v-btn class="menu-btn" @click="showUpMenu()">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </v-flex>
            <!-- TITLE AND MOTTO -->
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
            <!-- INTERNATIONALIZATION FLAGS -->
            <v-flex class="international" md1 xs1>
                <div class="lang-btn">
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn class="btn-flag" v-on="on">
                                <flag class="flag" :iso="flagSelected.id"/>
                            </v-btn>
                        </template>
                        <v-list class="flag-list">
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
            const flagFiltered = this.flags.filter(f => f.id === flag.id)[0];
            this.flagSelected = flagFiltered;
        },
    },
    computed: {
        ...mapState('items', ['items']),
    },
    data: () => ({
        flags: [
            {
                country: 'Colombia',
                id: 'co',
            },
            {
                country: 'England',
                id: 'gb',
            },
            {
                country: 'France',
                id: 'fr',
            },
            {
                country: 'Italy',
                id: 'it',
            },
        ],
        flagSelected: {
            country: 'Colombia',
            id: 'co',
        },
    }),
};
</script>

<style lang="scss" scoped>
.container-nav-bar {
    width: 100% !important;
    padding: 0px !important;
    margin: 0px !important;
    max-width: 100% !important;

    .row-logo {
        margin-right: 0px !important;

        .logo-btn {
            max-height: 64px;

            .insa-logo {
                padding-top: 4px;
                max-height: 65px;
                max-width: 52px;
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
        }

        .title-motto {
            height: 64px !important;

            .ma-0 {
                font-size: 0.5em;

            }

            .insa-title {
                padding-top: 10px;
            }
        }

        .international {

            .lang-btn {

                .btn-flag {
                    min-width: 42px !important;
                    width: 42px !important;
                    border-radius: 50% !important;
                    box-shadow: none !important;
                    background-color: transparent !important;
                    .flag {
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
}

.flag-list {
    padding: 0px !important;
}
</style>
