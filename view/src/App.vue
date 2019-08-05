<template>
    <v-app>
        <v-app-bar clipped-left app>
            <InsaNavBar/>
        </v-app-bar>
        <TheSideNavMenu/>
        <v-content>
            <HelloWorld msg="Welcome to the new INSA's web site"/>
        </v-content>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import InsaNavBar from './components/InsaNavBar.vue';
import TheSideNavMenu from './components/TheSideNavMenu.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
        InsaNavBar,
        TheSideNavMenu,
    },
    data: () => ({
        //
    }),
};
</script>

<style>
</style>
