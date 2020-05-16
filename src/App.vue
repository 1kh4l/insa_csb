<template>
  <v-app>
    <v-app-bar class="header" clipped-left app>
      <InsaNavBar />
    </v-app-bar>
    <TheSideNavMenu />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import InsaNavBar from "@/components/InsaNavBar.vue";
import TheSideNavMenu from "@/components/TheSideNavMenu.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    InsaNavBar,
    TheSideNavMenu,
  },
  name: "App",
});
</script>

<style lang="scss">
$color-pack: false;
@import "~vuetify/src/styles/main.sass";
.header {
  background-image: url("./assets/header.svg");
  background-size: 16%;
  background-position: right;
}
</style>
