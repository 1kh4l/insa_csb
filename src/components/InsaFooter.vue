<template>
  <footer class="footer-container" id="footer" role="contentinfo">
    <v-col class="col-footer" cols="12" sm="12" xs="12" xl="12">
      <v-row class="row-footer">
        <v-col class="first-col" cols="12" sm="6" xs="6" xl="4">
          <v-row class="logo-motto">
            <v-col class="logo" cols="12" sm="4" xs="4" xl="2">
              <v-img class="insa-logo" src="./../assets/insa_logo.png"></v-img>
            </v-col>
            <v-col class="footer-school-name" cols="12" sm="" xs="8" xl="10">
              <v-row class="title-motto">
                <span class="title-insa">INSA</span>
                <span class="motto">
                  ~ Instituto Nuestra Señora de la Asunción
                </span>
              </v-row>
              <v-row>
                <span class="motto-insa text-left">
                  {{ $t("header.motto") }}
                </span>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="rule">
            <span class="rule-comerce">
              {{ $t("content-contact.approve[0]") }}
            </span>
          </v-row>
        </v-col>
        <v-col cols="12" sm="2" xs="2" xl="2">
          <v-row class="footer-home">
            <li>
              <a
                href="https://insa-csb.education/home"
                data-gps-track="footer.click({ location: 2, link: 16})"
              >
                {{ $t("sidenav.home") }}
              </a>
            </li>
          </v-row>
          <v-row class="footer-home">
            <li>
              <a href="https://insa-csb.education/home#about">
                {{ $t("about") }}
              </a>
            </li>
          </v-row>
          <v-row class="footer-home">
            <li>
              <a href="https://insa-csb.education/basilians#about">
                {{ $t("sidenav.basilians.title") }}
              </a>
            </li>
          </v-row>
          <v-row class="footer-home">
            <li>
              <a href="https://insa-csb.education/students">
                {{ $t("sidenav.academic.title") }}
              </a>
            </li>
          </v-row>
        </v-col>
        <v-col cols="12" sm="2" xs="2" xl="2"></v-col>
        <v-col cols="12" sm="4" xs="4" xl="4"></v-col>
      </v-row>
      <v-row align="center" justify="center">
        <div class="footer-bottom">
          &copy; 2020 Copyright INSA
        </div>
      </v-row>
    </v-col>
  </footer>
</template>
<style lang="scss">
$color-pack: false;
@import "~vuetify/src/styles/main.sass";

.footer-container {
  width: 100%;
  height: 440px;

  .col-footer {
    height: inherit;

    .footer-bottom {
      opacity: 0.4;
    }

    .row-footer {
      .first-col {
        .logo-motto {
          .insa-logo {
            width: 96px;
          }
          .footer-school-name {
            .title-motto {
              font-weight: 500;
            }
            padding-top: 30px;
            margin-left: -130px;
          }
        }

        .rule {
          width: 62%;
          padding-left: 2%;
          font-size: 12px !important;
        }
      }
      height: 96%;
      padding-top: 5%;
      padding-right: 5%;
      padding-left: 5%;
    }

    .footer-school-name {
      .motto-insa,
      .tittle-insa,
      .motto {
        font-size: 16px !important;
        @media (max-width: 768px) {
          font-size: 10px !important;
        }
      }
    }
  }
}
</style>
