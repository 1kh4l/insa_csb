<template>
    <!-- SIDENAV -->
    <v-navigation-drawer v-if="visible" permanent fixed app class="nav-bar">
        <!-- LIST ITEMS CONTAINER-->
        <v-list dense nav>
            <v-list-item @click="">
                <v-list-item-icon>
                    <v-icon class="icon-menu">mdi-church</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ $t('sidenav.home') }}</v-list-item-title>
            </v-list-item>
            <!-- NESTED SUBMENUS -->
            <v-list-group v-for="item in filteredMenu" :key="item.title">
                <template v-slot:activator>
                    <v-list-item-icon class="icon-menu">
                        <v-icon class="icon-menu" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
                </template>
                <v-list-item class="submenu" v-for="subItem in item.items"
                 :key="subItem.title" link>
                    <v-list-item-content>
                        <v-list-item-title>{{ $t(subItem.title) }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon class="icon-menu">
                        <v-icon class="icon-menu" v-text="subItem.icon"></v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>
            <v-list-item @click="">
                <v-list-item-icon>
                    <v-icon class="icon-menu">mdi-church</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ $t('contact') }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import sideNav from '../assets/sidenav-menu.json';

export default {
    name: 'SideNavMenu',
    props: {
    },
    methods: {
    },
    computed: {
        ...mapState('items', ['visible']),
        ...mapState('items', ['lang']),
        filteredMenu() { return this.menuItems.filter(n => n.title !== 'Home'); },
    },
    data: () => ({
        menuItems: sideNav.menu,
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
