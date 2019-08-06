<template>
    <v-navigation-drawer v-if="visible" permanent fixed app class="nav-bar">
        <v-list dense nav>
            <v-list-item @click="">
                <v-list-item-icon>
                    <v-icon class="icon-menu">mdi-church</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-group v-for="item in filteredMenu" :key="item.title">
                <template v-slot:activator>
                    <v-list-item-icon class="icon-menu">
                        <v-icon class="icon-menu" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </template>
                <v-list-item class="submenu" v-for="subItem in item.items"
                 :key="subItem.title" link>
                    <v-list-item-content>
                        <v-list-item-title v-text="subItem.title"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon class="icon-menu">
                        <v-icon class="icon-menu" v-text="subItem.icon"></v-icon>
                    </v-list-item-icon>
                </v-list-item>
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
        filteredMenu() { return this.menuItems.filter(n => n.title !== 'Home'); },
    },
    data: () => ({
        menuItems: [
            { title: 'Home', icon: 'mdi-church', items: [{ title: 'test', icon: 'mdi-home' }] },
            {
                title: 'About us',
                icon: 'mdi-christianity',
                items: [
                    {
                        title: 'INSA',
                        icon: 'mdi-school',
                    },
                    {
                        title: 'History',
                        icon: 'mdi-book-open-page-variant',
                    },
                ],
            },
            {
                title: 'About',
                icon: 'mdi-help-box',
                items: [{
                    title: 'world',
                    icon: 'mdi-home',
                }],
            },
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
.submenu {
    padding-left: 64px !important;
}
</style>
