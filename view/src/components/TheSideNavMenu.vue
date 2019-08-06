<template>
    <v-navigation-drawer v-if="visible" permanent fixed app class="nav-bar">
        <v-list dense nav>
            <v-list-group v-for="item in menuItems" :key="item.title">
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </template>
                <v-list-group v-for="subItem in item.items"
                 no-action sub-group :key="subItem.title">
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>{{subItem.title}}</v-list-item-title>
                        </v-list-item-content>
                  </template>
                </v-list-group>
            </v-list-group>
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
            { title: 'Home', icon: 'mdi-church', items: [{ title: 'test', icon: 'mdi-home' }] },
            { title: 'About us', icon: 'mdi-christianity', items: [{ title: 'hello', icon: 'mdi-home' }] },
            { title: 'About', icon: 'mdi-help-box', items: [{ title: 'world', icon: 'mdi-home' }] },
        ],
    }),
};
</script>

<style lang="scss">
@import "../styles/settings.scss";

.nav-bar {
    top: 65px !important;
}
.icon-menu {
    color: $color-base-gray !important;
}
</style>
