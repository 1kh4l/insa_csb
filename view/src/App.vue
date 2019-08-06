<template>
    <v-app>
        <v-app-bar class="header" clipped-left app>
            <InsaNavBar/>
        </v-app-bar>
        <TheSideNavMenu/>
        <v-content>
            <InsaHome msg="Welcome to the new INSA's web site"/>
        </v-content>
    </v-app>
</template>

<script>
import InsaHome from './components/InsaHome.vue';
import InsaNavBar from './components/InsaNavBar.vue';
import TheSideNavMenu from './components/TheSideNavMenu.vue';

export default {
    name: 'App',
    components: {
        InsaHome,
        InsaNavBar,
        TheSideNavMenu,
    },
    data: () => ({
        //
    }),
};
</script>

<style lang="scss">
$color-pack: false;
@import '~vuetify/src/styles/main.sass';
.header {
    background-color: transparent !important;
}

</style>
