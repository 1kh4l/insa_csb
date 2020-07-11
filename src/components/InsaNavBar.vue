<template>
  <!-- CONTAINER NAVIGATION BAR -->
  <v-container id="nav-bar" class="container-nav-bar">
    <!-- ROW WITH LOGO | SIDENAV MENU | INTERNATIONALIZATION CHANGE -->
    <v-row no-gutters>
      <v-col cols="12" sm="2" xs="2" lg="5" xl="5">
        <v-btn class="menu-btn" @click="showUpMenu()">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="7" xs="7" lg="5" xl="5">
        <v-row no-gutters>
          <v-col cols="12" sm="3" xs="2" lg="2" xl="2">
            <v-img class="insa-logo" src="./../assets/insa_logo.png"></v-img>
          </v-col>
          <v-col cols="12" sm="9" xs="10" lg="10" xl="10">
            <v-row class="insa-title">
              <v-col cols="12" sm="12" xs="12" lg="12" xl="12" class="container-tittle">
                <span class="title">INSA</span>
                <span class="motto">
                  ~ Instituto Nuestra Señora de la Asunción
                </span>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" sm="12" xs="12" lg="12" xl="12" class="container-motto">
                <span class="overline motto-insa text-left">
                  {{ $t("header.motto") }}
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="3" xs="3" lg="2" xl="2">
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
          <v-col class="international hidden-sm-and-down" align="right" justify="center">
            <div class="lang-btn">
              <v-menu>
                <template v-slot:activator="{ on }">
                  <v-btn class="btn-flag" v-on="on">
                    <div class="flag" value="flagSelected.id">
                      {{ flagSelected.label }}
                      <v-icon class="arrow-icon">mdi-apple-keyboard-control</v-icon>
                    </div>
                  </v-btn>
                </template>
                <v-list class="flag-list" style="box-shadow: none;">
                  <v-list-item
                    v-for="insaFlag in flags"
                    @click="selectFlag(insaFlag)"
                    :key="insaFlag.id"
                  >
                    <v-list-item-title>
                      <div class="flag" value="insaFlag.id">
                        {{ insaFlag.label }}
                      </div>
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
      label: "ES",
    },
    flags: [
      {
        country: "Colombia",
        id: "co",
        label: "ES",
      },
      {
        country: "England",
        id: "gb",
        label: "EN",
      },
      {
        country: "France",
        id: "fr",
        label: "FR",
      },
      {
        country: "Italy",
        id: "it",
        label: "IT",
      },
    ],
  }),
  methods: {
    showUpMenu(): void {
      this.$store.dispatch("items/setVisibility", {
        visible: true,
      });
    },
    selectFlag(flag): void {
      const flagFiltered = this.flags.filter((f) => f.id === flag.id)[0];
      this.flagSelected = flagFiltered;
      i18n.locale = this.flagSelected.id;
      this.$store.dispatch("items/setLanguage", i18n.locale);
    },
    contactRouting(): void {
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
  max-width: 100%;

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
    max-height: 36px;
  }

  .btn-flag {
    box-shadow: none;
    max-height: 36px;
    .flag-list {
      min-width: 86px;
      top: 3px;
      left: 1413px;
      transform-origin: left top 0px;
      z-index: 8;
      box-shadow: none;
    }
  }

  .flag {
    color: $color-gray-base !important;

    .arrow-icon {
      margin-top: -8px;
      transform: rotate(180deg);
    }
  }
  .btn-flag:hover {
    background-color: transparent !important;
  }
}
.theme--light.v-list {
  background: #f5f5f5 !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 47px;
  min-width: 64px;
  padding: 0 16px;
}
</style>
