<template>
  <!-- CONTAINER NAVIGATION BAR -->
  <v-container class="container-nav-bar" justify-center>
    <!-- ROW WITH LOGO | SIDENAV MENU | INTERNATIONALIZATION CHANGE -->
    <v-layout row align-center class="row-logo">
      <!-- LOGO | SIDENAV MENU -->
      <v-flex class="logo-btn" md1 xs3>
        <v-btn class="menu-btn" @click="showUpMenu()">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-flex>
      <!-- TITLE AND MOTTO -->
      <v-flex class="title-motto" md10 xs8>
        <v-layout column align-center :class="{ 'ma-0': $vuetify.breakpoint.smAndDown }">
          <v-layout row class="insa-title">
            <v-flex class="logo-btn" md1 xs3>
              <img class="insa-logo" src="./../assets/insa_logo.png" />
            </v-flex>
            <span class="title">INSA</span>
            <span class="font-weight-light motto">
              ~ Instituto Nuestra Señora de la Asunción
            </span>
          </v-layout>
          <span class="overline motto-insa text-left">
            {{ $t("header.motto") }}
          </span>
        </v-layout>
      </v-flex>
      <!-- CONTACT BUTTON -->
      <v-flex class="international" md1 xs1>
        <v-btn
          class="contact"
          outlined
          color="brown"
          v-on="on"
          @click="contactRouting({ title: 'contact' })"
        >
          {{ $t("contact") }}
        </v-btn>
      </v-flex>
      <!-- INTERNATIONALIZATION FLAGS-->
      <v-flex class="international" md1 xs1>
        <v-btn
          class="contact"
          outlined
          color="brown"
          v-on="on"
          @click="contactRouting({ title: 'contact' })"
        >
          {{ $t("contact") }}
        </v-btn>
      </v-flex>
      <!-- INTERNATIONALIZATION FLAGS-->
      <v-flex class="international" md1 xs1>
        <div class="lang-btn">
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-btn class="btn-flag" v-on="on">
                <flag class="flag" :iso="flagSelected.id" />
              </v-btn>
            </template>
            <v-list class="flag-list">
              <v-list-item
                v-for="insaFlag in flags"
                @click="selectFlag(insaFlag)"
                :key="insaFlag.id"
              >
                <v-list-item-title>
                  <flag :iso="insaFlag.id" />
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import i18n from "../plugins/i18n";

const InsaNavBar = Vue.extend({
  computed: {
    ...mapState("items", ["items"]),
  },
  data: () => ({
    flagSelected: {
      country: "Colombia",
      id: "co",
    },
    flags: [
      {
        country: "Colombia",
        id: "co",
      },
      {
        country: "England",
        id: "gb",
      },
      {
        country: "France",
        id: "fr",
      },
      {
        country: "Italy",
        id: "it",
      },
    ],
  }),
  methods: {
    showUpMenu() {
      this.$store.dispatch("items/setVisibility", {
        visible: true,
      });
    },
    selectFlag(flag) {
      const flagFiltered = this.flags.filter((f) => f.id === flag.id)[0];
      this.flagSelected = flagFiltered;
      i18n.locale = this.flagSelected.id;
      this.$store.dispatch("items/setLanguage", i18n.locale);
    },
    contactRouting() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
  },
  name: "InsaNavBar",
});

export default InsaNavBar;
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";

.container-nav-bar {
  width: 100% !important;
  padding: 0px !important;
  margin: 0px !important;
  max-width: 100% !important;

  .row-logo {
    margin-right: 0px !important;

    .logo-btn {
      max-height: 6px;

      .insa-logo {
        padding-top: -12px;
        max-height: 46px;
        max-width: 52px;
      }

      .menu-btn {
        top: -12px;
        background-color: transparent !important;
        color: $color-brown-base !important;
        box-shadow: none !important;
        padding-left: 7px !important;
        padding-right: 7px !important;
        min-width: 0px !important;
        border-radius: 50% !important;
        width: 36px !important;
        left: 110px;
      }
      .menu-btn:hover {
        background-color: transparent !important;
        box-shadow: none !important;
        border-radius: 50% !important;
        justify-content: center !important;
        width: 36px !important;
      }
    }
    .title-motto {
      height: 64px !important;

      .ma-0 {
        font-size: 0.5em;
      }
      .insa-title {
        padding-top: 10px;
        padding-left: 9px;
        .title {
          color: $color-brown-base;
        }
        .motto {
          padding-top: 4px;
          padding-left: 9px;
          text-align: left;
        }
        .flex.md1 {
          max-width: 100px;
          padding-right: 10px;
        }
      }
    }
    .contact {
      top: 2px;
      right: 300px !important;
    }
    .international {
      .lang-btn {
        position: absolute;
        width: 21px;
        height: 17px;
        left: 1605px;
        top: 17px;
        color: #9a9696;
        .btn-flag {
          box-shadow: none !important;
          background-color: transparent !important;
        }
      }
    }
  }
}
</style>
