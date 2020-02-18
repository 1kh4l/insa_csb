<template>
    <!-- SIDENAV -->
    <v-navigation-drawer v-if="visible" permanent fixed app class="nav-bar">
        <!-- LIST ITEMS CONTAINER-->
        <v-list dense nav>
            <!-- HOME -->
            <router-link to="/home" v-slot="{ href, route, navigate, isActive, isExactActive }">
                <v-list-item @click="navigate">
                    <v-list-item-icon>
                        <v-icon class="icon-menu">mdi-home-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        {{ $t('sidenav.home') }}
                    </v-list-item-title>
                </v-list-item>
            </router-link>
            <!-- NESTED SUBMENUS -->
            <v-list-group v-for="item in filteredMenu" :key="item.title">
                <template v-slot:activator>
                    <v-list-item-icon class="icon-menu">
                        <v-icon class="icon-menu" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
                </template>
                <v-list-item class="submenu" v-for="subItem in item.items"
                 :key="subItem.title" @click="menuRouting(item)" link>
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
        menuRouting(item) {
            const route = this.$route.name;
            if (item.title.includes('basilians') && route !== 'basilians') {
                this.$router.push('/basilians');
            } else if (item.title.includes('about-us') && route !== 'home' && route !== 'root') {
                this.$router.push('/home');
            }
        },
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

<style lang="scss" scoped>
@import "../styles/settings.scss";

.nav-bar {
    top: 64px !important;
    background-image: url('../assets/side.svg');
    background-size: 70%;
    background-position: bottom;
}
.icon-menu {
    color: $color-brown-base !important;
}
.submenu {
    padding-left: 64px !important;
}
</style>
