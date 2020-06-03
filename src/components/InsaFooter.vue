<template>
  <footer class="footer-container" id="footer" role="contentinfo">
    <v-col class="col-footer" cols="12" sm="12" xs="12" xl="12">
      <v-row class="row-footer">
        <v-col class="first-col" cols="12" sm="4" xs="6" xl="4">
          <v-row class="logo-motto">
            <v-col class="logo" cols="12" sm="2" xs="4" xl="2">
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
        <v-col class="footer-links" cols="12" sm="2" xs="2" xl="2">
          <v-row class="footer-list">
            <li class="item">
              <a class="link" href="/home">
                {{ $t("sidenav.home") }}
              </a>
            </li>
          </v-row>
          <v-row class="footer-list">
            <li class="item">
              <a class="link" href="/home">
                {{ $t("about") }}
              </a>
            </li>
          </v-row>
          <v-row class="footer-list">
            <li class="item">
              <a class="link" href="/basilians">
                {{ $t("sidenav.basilians.title") }}
              </a>
            </li>
          </v-row>
          <v-row class="footer-list">
            <li>
              <a class="link" href="/students">
                {{ $t("sidenav.academic.title") }}
              </a>
            </li>
          </v-row>
        </v-col>
        <v-col class="footer-links" cols="12" sm="2" xs="2" xl="2">
          <v-row class="footer-list">
            <li class="item">
              <a class="link" href="#">
                {{ $t("sidenav.life-stu.title") }}
              </a>
            </li>
          </v-row>
          <v-row class="footer-list">
            <li class="item">
              <a class="link" href="/insa-admission">
                {{ $t("sidenav.insa-admission.title") }}
              </a>
            </li>
          </v-row>
          <v-row class="footer-list">
            <li class="item">
              <a class="link" href="#">
                {{ $t("sidenav.support-insa.title") }}
              </a>
            </li>
          </v-row>
          <v-row class="footer-list">
            <li class="item">
              <a class="link" href="/contact">
                {{ $t("contact") }}
              </a>
            </li>
          </v-row>
        </v-col>
        <v-col class="footer-contact" cols="12" sm="4" xs="4" xl="4">
          <v-row class="phone">
            <span class="contact-name">{{ $t("content-contact.telephones[2]") }}:</span>
            <span class="numbers">
              {{ $t("content-contact.telephones[0]") }},
              {{ $t("content-contact.telephones[1]") }}
            </span>
          </v-row>
          <v-row class="direction">
            <span class="contact-name">{{ $t("content-contact.direction[1]") }}:</span>
            <span class="address-location">
              {{ $t("content-contact.direction[0]") }}
            </span>
          </v-row>
          <v-row class="email">
            <span class="contact-name">{{ $t("content-contact.email[0]") }}:</span>
            <span class="address">{{ $t("content-contact.email[1]") }}</span>
          </v-row>
          <v-row class="footer-public-attention">
            <span class="footer-attention">
              {{ $t("content-contact.public-attention[0]") }},
              {{ $t("content-contact.days-and-hours[0]") }}
            </span>
          </v-row>
        </v-col>
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
      margin-top: -15px;
    }

    .footer-links {
      .footer-list {
        list-style: none;
        padding: 4px 0;
        line-height: 1.9;
        .link {
          color: #272727;
          text-decoration-line: none;
          color: #272727;
          text-decoration-line: none;
          position: relative;
          overflow: hidden;
          background: linear-gradient(to right, #2d992b, #2d992b 50%, #272727 50%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          background-position: 100%;
          transition: background-position 275ms ease;
          &:hover {
            background-position: 0 100%;
          }
        }
      }
      margin-top: 20px;
    }

    .footer-contact {
      max-width: 420px;
      line-height: 1.9;
      margin-top: 20px;

      .contact-name {
        font-weight: 600;
      }

      .address-location,
      .numbers,
      .address {
        padding-left: 1%;
      }

      .footer-public-attention {
        margin-top: 30px;
        .footer-attention {
          font-style: italic;
          font-size: 16px;
        }
      }
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
            max-width: 450px;
          }
        }

        .rule {
          width: 87%;
          padding-left: 2%;
          padding-top: 4%;
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
