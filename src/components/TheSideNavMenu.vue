<template>
  <!-- SIDENAV -->
  <v-navigation-drawer :width="350" v-if="visible" permanent fixed app class="nav-bar">
    <v-row no-gutters>
      <v-col cols="12" sm="12" xs="12" xl="12">
        <v-img class="tree-left" src="../assets/tree_left.png"></v-img>
      </v-col>
    </v-row>
    <!-- LIST ITEMS CONTAINER-->
    <v-list dense nav class="menu-list">
      <!-- HOME -->
      <router-link to="/home" v-slot="{}">
        <!-- Creates home menu without subitem -->
        <v-list-item @click="menuRouting({ title: 'home' })">
          <v-list-item-icon>
            <v-icon class="icon-menu">mdi-home-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("sidenav.home") }}
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
        <v-list-item
          class="submenu"
          v-for="subItem in item.items"
          :key="subItem.title"
          @click="menuRouting(item, subItem)"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ $t(subItem.title) }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon class="icon-menu">
            <v-icon class="icon-menu" v-text="subItem.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <v-list-item @click="menuRouting({ title: 'contact' })">
        <v-list-item-icon>
          <v-icon class="icon-menu">mdi-church</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $t("contact") }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-row no-gutters>
      <v-col cols="12" sm="12" xs="12" xl="12">
        <v-img class="tree-right" src="../assets/tree_right.png"></v-img>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import sideNavTree from "../assets/sidenav-menu.json";

const SideNavMenu = Vue.extend({
  computed: {
    ...mapState("items", ["visible"]),
    ...mapState("items", ["lang"]),
    filteredMenu() {
      return this.menuItems.filter((n) => n.title !== "Home");
    },
  },
  data: () => ({
    menuItems: sideNavTree.menu,
  }),
  methods: {
    menuRouting(item, subItem = null) {
      // Allows to go to top of the home page
      if (item.title.includes("home") && !subItem) {
        this.$router.push("/home");
        window.scrollTo(0, 0);
      }
      if (item.title.includes("contact") && !subItem) {
        this.$router.push("/contact");
        window.scrollTo(0, 0);
      }
      const lastItemPosition = subItem.title.split(".").length - 1;
      if (item.title.includes("about-us")) {
        this.$router.push(`/home#${subItem.title.split(".").pop()}`);
      } else if (item.title.includes("basilians")) {
        this.$router.push(`/basilians#${subItem.title.split(".")[lastItemPosition]}`);
      } else if (subItem.title.includes("student")) {
        this.$router.push("/students");
      } else if (subItem.title.includes("teachers")) {
        this.$router.push("/teachers");
      } else if (subItem.title.includes("education-levels")) {
        this.$router.push("/education-levels");
      } else if (item.title.includes("insa-admission")) {
        this.$router.push(`/insa-admission#${subItem.title.split(".").pop()}`);
      } else if (subItem.title.includes("support-insa")) {
        this.$router.push("/support-insa");
      }
    },
  },
  name: "SideNavMenu",
  props: {},
});

export default SideNavMenu;
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";

.nav-bar {
  top: 64px !important;
  height: 100% !important;

  .menu-list {
    padding-top: 10%;
    padding-left: 15%;
    padding-right: 10%;
  }

  .tree-left {
    float: left;
    max-width: 60%;
  }

  .tree-right {
    position: relative;
    float: right;
    max-width: 60%;
  }
}
.icon-menu {
  color: $color-brown-base !important;
}
.submenu {
  padding-left: 64px !important;
}
</style>
