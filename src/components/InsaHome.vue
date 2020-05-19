<template>
  <v-container class="main-page">
    <div class="image-container-1">
      <img class="img1" src="https://d2461yysjut9f6.cloudfront.net/photos/cover_page_kids.jpg" />
    </div>
    <div class="image-container-2">
      <img class="img2" style="float: right" src="https://d2461yysjut9f6.cloudfront.net/photos/main_page_school" />
    </div>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <div class="about-us-insa" style="clear: right" id="about">
      <v-card class="card-about">
        <v-card-title class="display-1 font-size:20px;">{{ $t("about") }}</v-card-title>
        <v-card-text class="body-2 font-size:20px;">
          <p class="text-justify">{{ $t("content-insa.about[0]") }}</p>
          <p class="text-justify">{{ $t("content-insa.about[1]") }}</p>
          <p class="text-justify">{{ $t("content-insa.about[2]") }}</p>
          <p class="text-justify">{{ $t("content-insa.about[3]") }}</p>
          <p class="text-right">{{ $t("content-insa.about[4]") }}</p>
        </v-card-text>
      </v-card>
    </div>
    <div class="about-us-insa2" id="about2">
      <v-card flat class="card-about2 text-center">
        <v-card-title class="display-1 text-center">{{ $t("content-insa.about[5]") }}</v-card-title>
        <v-card-text class="body-2">
          <!-- Initial project in INSA -->
          <p class="text-center">{{ $t("content-insa.about[6]") }}</p>
          <p class="text-center">{{ $t("content-insa.about[7]") }}</p>
          <p class="text-center">{{ $t("content-insa.about[8]") }}</p>
          <p class="text-center">{{ $t("content-insa.about[9]") }}</p>
        </v-card-text>
      </v-card>
    </div>
    <div class="image-container-2">
      <img class="img2" style="float: left" src="https://d2461yysjut9f6.cloudfront.net/photos/school_life_1.jpg" />
    </div>
    <div class="history-insa" style="clear: left" id="history">
      <v-card flat class="card-history">
        <v-card-title class="display-1">{{ $t("history") }}</v-card-title>
        <v-card-text class="body-2">
          <p class="text-left">{{ $t("content-insa.history") }}</p>
        </v-card-text>
      </v-card>
    </div>

    <div class="image-container-2">
      <img class="img2" style="float: right" src="https://d2461yysjut9f6.cloudfront.net/photos/main_page_mission" />
    </div>

    <div class="mission-insa" style="clear: right" id="mission">
      <v-card flat class="card-mission">
        <v-card-title class="display-1">{{ $t("mission") }}</v-card-title>
        <v-card-text class="body-2">
          <p class="text-left">{{ $t("content-insa.mission") }}</p>
        </v-card-text>
      </v-card>
    </div>

    <div class="image-container-2">
      <img class="img2" style="float: left" src="https://d2461yysjut9f6.cloudfront.net/photos/main_page_vision"/>
    </div>

    <div class="vision-insa" style="clear: left" id="vision">
      <v-card flat class="card-vision">
        <v-card-title class="display-1">{{ $t("vision") }}</v-card-title>
        <v-card-text class="body-2">
          <p class="text-left">{{ $t("content-insa.vision") }}</p>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
const InsaHome = Vue.extend({
  computed: {
    ...mapState("items", ["items"]),
  },
  data: () => ({
    myData: [],
    testShow: false,
  }),
  methods: {
    setData() {
      this.$store.dispatch("items/addItem", {
        data: "bye",
        name: "example",
      });
    },
  },
  name: "InsaHome",
  props: {
    msg: String,
  },
});
export default InsaHome;
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.main-page {
  width: 100% !important;
  max-width: 100% !important;
  height: 100% !important;
  padding: 0px !important;
  .image-container-1 {
    width: 100%;
    background-color: white;
    .img1 {
      width: inherit;
      mask-size: cover;
      mask-position: left bottom;
      mask-repeat: no-repeat;
    }
  }
    .about-us-insa {
    width: 100%;
    .card-about {
      z-index: 2;
      border: none !important;
      border-radius: 0px !important;
      width : 600px;
      mask-image: url("../assets/mask1.svg");
      mask-size: cover;
      mask-position: left bottom;
      mask-repeat: no-repeat;
      left: 75px;
      top:0px;
      font-family: 'Montserrat', sans-serif;
      font-size:20px;
      .body-2 {
        font-family: 'Montserrat', sans-serif;
        font-size:40px;
      }
    }
  
  }
  .about-us-insa2 {
    width: 100%;
    height:500px;
    background-color: #f5f5f5;
    .card-about2 {
      background-color: #f5f5f5;
      left: 396px;
      top: 80px;
      width: 750px;
      
    }
  }
  .image-container-2 {
    width: 100%;
    background-color: white;
    margin-top: -29px;
    .img2 {
      max-width: 700px;
      mask-size: cover;
      mask-position: left bottom;
      mask-repeat: no-repeat;
      margin-top: 185px;
      margin-left: 100px;
      margin-right: 121px;
    
    }
  }
  .history-insa {
    width: 100%;
    .card-history {
      z-index: 2;
      border: none !important;
      border-radius: 5px !important;
      width : 600px;
      left: 845px;
      top: -320px;
      mask-size: cover;
      mask-position: left bottom;
      mask-repeat: no-repeat;
    }
  }
  .mission-insa {
    width: 100%;
    .card-mission {
      z-index: 2;
      border: none !important;
      border-radius: 0px !important;
      width : 600px;
      top: -223px;
      left: 75px;
      mask-size: cover;
      mask-position: left bottom;
      mask-repeat: no-repeat;
    }
  }
  .vision-insa {
    width: 100%;
    .card-vision {
      z-index: 2;
      border: none !important;
      border-radius: 0px !important;
      width : 600px;
      left: 797px;
      top: -290px;
      mask-size: cover;
      mask-position: left bottom;
      mask-repeat: no-repeat;
    }
  }
}
</style>