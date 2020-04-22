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

<script>
import InsaNavBar from "./components/InsaNavBar";
import TheSideNavMenu from "./components/TheSideNavMenu";

export default {
  name: "App",
  components: {
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
@import "~vuetify/src/styles/main.sass";
.header {
  background-image: url("./assets/header.svg");
  background-size: 16%;
  background-position: right;
}
</style>
