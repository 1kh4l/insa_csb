<template>
    <v-app>
        <v-app-bar app>
            <InsaNavBar/>
        </v-app-bar>
        <v-content>
            <HelloWorld msg="Welcome to the new INSA's web site"/>
        </v-content>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import InsaNavBar from './components/InsaNavBar.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
        InsaNavBar,
    },
    data: () => ({
        //
    }),
};
</script>

<style>
</style>
