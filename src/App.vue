<template>
  <v-app>
    <v-app-bar class="header" clipped-left app>
      <InsaNavBar />
    </v-app-bar>
    <TheSideNavMenu />
    <v-content>
      <router-view />
    </v-content>
    <v-footer>
      <InsaFooter />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import InsaFooter from "@/components/InsaFooter.vue";
import InsaNavBar from "@/components/InsaNavBar.vue";
import TheSideNavMenu from "@/components/TheSideNavMenu.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    InsaFooter,
    InsaNavBar,
    TheSideNavMenu,
  },
  name: "App",
});
</script>

<style lang="scss">
$color-pack: false;
@import "~vuetify/src/styles/main.sass";

.myFont {
  font-family: "Montserrat", sans-serif !important;
}

.header {
  background-size: 16%;
  background-position: right;
  min-height: 4% !important;
  max-height: 80px;
  width: 100vw;
}
</style>
