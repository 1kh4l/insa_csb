<template>
  <footer class="site-footer" id="footer" role="contentinfo">
    <div class="site-footer--container">
      <v-layout row align-center class="row-logo">
        <div class="site-footer--logo">
          <img class="insa-footer--logo" src="./../assets/insa_logo.png" />
        </div>
        <div class="title-motto" md10 xs8>
          <v-layout column align-center :class="{ 'ma-0': $vuetify.breakpoint.smAndDown }">
            <v-layout row class="insa-title">
              <span class="title">INSA</span>
              <span class="font-weight-light motto">
                ~ Instituto Nuestra Señora de la Asunción
              </span>
            </v-layout>
            <span class="overline motto-insa text-end">
              {{ $t("header.motto") }}
            </span>
          </v-layout>
          <div class="approve">
            <span class="overline">
              {{ $t("content-contact.approve[0]") }}
            </span>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2020 Copyright INSA
        </div>
      </v-layout>
    </div>
  </footer>
</template>
<style lang="scss">
$color-pack: false;
@import "~vuetify/src/styles/main.sass";

.site-footer {
  clear: both;
  position: relative;
  height: 200px;
  margin-top: 200px;
  .insa-footer--logo {
    width: 96px;
    height: 99px;
    margin-left: 121px;
    top: 4962px;
  }
  .insa-title {
    padding-top: 2px;
    padding-left: 9px;
  }
  .title-motto {
    padding-top: 0px;
    padding-left: 9px;
    text-align: left;
  }
  .flex.md10 {
    max-width: 100%;
    left: 10px;
  }
  .footer-bottom {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 30px;
    left: 640px !important;
    padding-top: 20px;
  }
  .approve {
    width: 400px;
  }
}
.v-application .text-end {
  text-align: end !important;
  padding-right: 52px;
}
</style>
