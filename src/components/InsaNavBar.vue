<template>
  <!-- CONTAINER NAVIGATION BAR -->
  <v-container id="nav-bar" class="container-nav-bar">
    <!-- ROW WITH LOGO | SIDENAV MENU | INTERNATIONALIZATION CHANGE -->
    <v-row no-gutters>
      <v-col cols="12" sm="2" xs="2" xl="5">
        <v-btn class="menu-btn" @click="showUpMenu()">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="7" xs="7" xl="5">
        <v-row no-gutters>
          <v-col cols="12" sm="3" xs="1" xl="1">
            <v-img class="insa-logo" src="./../assets/insa_logo.png"></v-img>
          </v-col>
          <v-col cols="12" sm="9" xs="11" xl="11">
            <v-row class="insa-title">
              <v-col cols="12" sm="12" xs="12" xl="12" class="container-tittle">
                <span class="title">INSA</span>
                <span class="motto">
                  ~ Instituto Nuestra Señora de la Asunción
                </span>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" sm="12" xs="12" xl="12" class="container-motto">
                <span class="overline motto-insa text-left">
                  {{ $t("header.motto") }}
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="3" xs="3" xl="2">
        <v-row no-gutters>
          <v-col class="international" align="right" justify="center">
            <v-btn
              class="contact"
              outlined
              color="brown"
              v-on="on"
              @click="contactRouting({ title: 'contact' })"
            >
              {{ $t("contact") }}
            </v-btn>
          </v-col>
          <!-- INTERNATIONALIZATION FLAGS-->
          <v-col class="international" align="right" justify="center">
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
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
  height: inherit;
  .menu-btn {
    background-color: transparent !important;
    color: $color-brown-base !important;
    box-shadow: none !important;
    border-radius: 50% !important;
    width: 36px;
  }
  .insa-logo {
    max-height: 46px;
    max-width: 52px;
  }
  .insa-title {
    font-size: 12px !important;
    max-height: 40%;
    .container-tittle {
      padding-top: 0px;
      .title {
        font-size: 12px !important;
        @media (min-width: 800px) {
          font-size: 16px !important;
        }
      }
    }
  }
  .school-name {
    padding-top: 1%;
    padding-bottom: 0px;
    .motto {
      font-size: 12px !important;
      @media (min-width: 800px) {
        font-size: 16px !important;
      }
    }
  }
  .container-motto {
    padding-top: 0px;
    margin-top: -1%;
    .motto-insa {
      @media (min-width: 800px) {
        font-size: 10px !important;
      }
    }
  }
  .menu-btn:hover {
    background-color: transparent !important;
    box-shadow: none !important;
    border-radius: 50% !important;
    justify-content: center !important;
  }
  .contact {
    font-family: "Montserrat", sans-serif !important;
    text-transform: none !important;
    font-size: 12px;
  }
}
</style>
