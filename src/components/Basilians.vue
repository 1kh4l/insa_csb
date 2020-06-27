<template>
  <v-container class="basilians-page">
    <v-row no-gutters>
      <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
        <!-- Basilians About Us Section-->
        <v-container class="basilians-about-us-section">
          <v-row no-gutters align="center" justify="center">
            <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
              <v-img class="tree-left" src="../assets/tree_left.png"></v-img>
            </v-col>
            <div class="about-us-basilians" id="about">
              <v-card flat class="card-about">
                <v-card-title class="display-1 justify-center">
                  {{ $t("about") }}
                </v-card-title>
                <v-card-text class="body-2">
                  <p class="text-justify">{{ $t("content-basilians.about[0]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.about[1]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.about[2]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.about[3]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.about[4]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.about[5]") }}</p>
                </v-card-text>
              </v-card>
            </div>
            <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
              <v-img class="tree-right" src="../assets/tree_right.png"></v-img>
            </v-col>
          </v-row>
        </v-container>
        <!-- Basilians Gallery Section-->
        <v-container class="basilians-gallery-section">
          <v-row no-gutters align="center" justify="center">
            <v-col cols="12" sm="4" xs="4" lg="4" xl="4">
              <v-img id="img" :src="`${imgChange[0].src}`" />
            </v-col>
            <v-col cols="12" sm="4" xs="4" lg="4" xl="4">
              <v-img id="img" :src="`${imgChange[1].src}`" />
            </v-col>
            <v-col cols="12" sm="4" xs="4" lg="4" xl="4">
              <v-img id="img" :src="`${imgChange[2].src}`" />
            </v-col>
          </v-row>
          <v-row class="img-btn" align="center" justify="center">
            <v-col cols="12" sm="6" xs="6" lg="6" xl="6">
              <v-btn outlined class="backward" id="newImg" @click="prevImg()">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" xs="6" lg="6" xl="6">
              <v-btn outlined class="forward" @click="nextImg()">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!-- Basilians History Section-->
        <v-container class="basilians-history-section">
          <v-row no gutters>
            <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
              <v-img class="history-tree-right" src="../assets/tree_right2.png"></v-img>
            </v-col>
            <div class="history-basilians" id="history">
              <v-card flat class="card-history">
                <v-card-title class="display-1">
                  {{ $t("history") }}
                </v-card-title>
                <v-card-text class="body-2">
                  <p class="text-justify">{{ $t("content-basilians.history[0]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.history[1]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.history[2]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.history[3]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.history[4]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.history[5]") }}</p>
                  <p class="text-justify">{{ $t("content-basilians.history[6]") }}</p>
                </v-card-text>
              </v-card>
            </div>
            <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
              <v-img class="history-tree-left" src="../assets/tree_left2.png"></v-img>
            </v-col>
          </v-row>
        </v-container>
        <!-- Basilians Our Work Section-->
        <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
          <v-row justify="center">
            <div class="image-container-1" align="center">
              <v-img
                class="img"
                src="https://d2461yysjut9f6.cloudfront.net/photos/basilians_our_work.jpg"
              />
            </div>
          </v-row>
        </v-col>
        <v-row align="center" justify="center">
          <div class="basilians-work" align="center" id="work">
            <v-card flat class="card-vision">
              <v-card-title class="display-1 align-center justify-center">
                {{ $t("sidenav.basilians.items.work") }}
              </v-card-title>
              <v-card-text class="body-2">
                <blockquote class="text-center blockquote">
                  <span class="font-weight-bold">"</span>
                  {{ $t("content-basilians.our-work") }}
                  <span class="font-weight-bold">"</span>
                </blockquote>
              </v-card-text>
            </v-card>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

const Basilians = Vue.extend({
  computed: {
    ...mapState("items", ["items"]),
    ...mapState("items", ["visible"]),
  },
  data() {
    return {
      images: [
        {
          src: "https://d2461yysjut9f6.cloudfront.net/photos/basilians_gallery_1.jpg",
        },
        {
          src: "https://d2461yysjut9f6.cloudfront.net/photos/church_comunity.jpg",
        },
        {
          src: "https://d2461yysjut9f6.cloudfront.net/photos/basilians_gallery_2.jpg",
        },
        {
          src: "https://d2461yysjut9f6.cloudfront.net/photos/basilians_gallery_3.jpg",
        },
        {
          src: "https://d2461yysjut9f6.cloudfront.net/photos/basilians_gallery_4.jpg",
        },
      ],
      imgChange: [
        {
          src: "https://d2461yysjut9f6.cloudfront.net/photos/basilians_gallery_1.jpg",
        },
        {
          src: "https://d2461yysjut9f6.cloudfront.net/photos/church_comunity.jpg",
        },
        {
          src: "https://d2461yysjut9f6.cloudfront.net/photos/basilians_gallery_2.jpg",
        },
      ],
    };
  },
  methods: {
    nextImg() {
      const thirdImgPosition = this.images.findIndex((img) => img.src === this.imgChange[2].src);
      const imgLen = this.images.length - 1;
      if (thirdImgPosition < imgLen) {
        this.imgChange[0].src = this.imgChange[1].src;
        this.imgChange[1].src = this.imgChange[2].src;
        this.imgChange[2].src = this.images[thirdImgPosition + 1].src;
      }
    },
    prevImg() {
      const firstImgPosition = this.images.findIndex((img) => img.src === this.imgChange[0].src);
      if (firstImgPosition > 0) {
        this.imgChange[2].src = this.imgChange[1].src;
        this.imgChange[1].src = this.imgChange[0].src;
        this.imgChange[0].src = this.images[firstImgPosition - 1].src;
      }
    },
  },
  name: "Basilians",
});

export default Basilians;
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";

.basilians-page {
  width: 100% !important;
  max-width: 100% !important;
  height: 100% !important;
  padding: 0px !important;
  .tree-right {
    position: relative;
    float: right;
    max-width: 18%;
    bottom: 254px;
  }
  .tree-left {
    position: relative;
    float: left;
    width: 19%;
    top: 230px;
  }

  .basilians-gallery-section {
    width: 100% !important;
    .img-btn {
      margin-top: 5%;
      .forward {
        background-color: white;
        color: grey;
        border-radius: 50% !important;
        float: left;
        height: 50px;
      }
      .backward {
        float: right;
        color: grey;
        background-color: white;
        border-radius: 50% !important;
        height: 50px;
      }
    }
  }

  .basilians-about-us-section {
    max-width: 100% !important;
    padding: 0px !important;
    .about-us-basilians {
      width: 60%;
      .card-about {
        z-index: 2;
        width: 100%;
        justify-content: center;
        color: black;
      }
    }
  }

  .image-container-1 {
    width: 84%;
    background-color: white;
    margin-top: 13%;
    .img1 {
      width: inherit;
      margin-top: 13% !important;
    }
  }

  .basilians-history-section {
    background-color: #f5f5f5;
    margin: 0px;
    padding: 0px;
    max-width: 100% !important;
    width: 100% !important;
    margin-top: 10% !important;
    .history-tree-right {
      position: relative;
      float: right;
      max-width: 27%;
      bottom: -31px;
    }
    .history-tree-left {
      position: relative;
      float: left;
      width: 27%;
      top: 64%;
    }
    .history-basilians {
      width: 70%;
      margin-top: -33%;
      .card-history {
        z-index: 2;
        background-color: #f5f5f5;
        width: inherit;
        left: 12%;
        color: black;
      }
    }
  }

  .basilians-work {
    width: 85%;
    margin-bottom: 10%;
    .card-vision {
      z-index: 2;
      border: none !important;
      border-radius: 0px !important;
      width: inherit;
      justify-content: center;
    }
  }
  .body-2 {
    color: black;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
  }
}
</style>
