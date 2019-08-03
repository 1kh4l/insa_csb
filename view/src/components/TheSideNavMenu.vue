<template>
    <v-navigation-drawer v-if="visible" permanent fixed class="nav-bar">
        <v-list dense nav>
            <v-list-item v-for="item in menuItems" :key="item.title" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'SideNavMenu',
    props: {
    },
    methods: {
    },
    computed: {
        ...mapState('items', ['visible']),
    },
    data: () => ({
        menuItems: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
        ],
    }),
};
</script>

<style>
.nav-bar {
    top: 65px !important;
}
</style>
