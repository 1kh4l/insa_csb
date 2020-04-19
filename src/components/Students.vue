<template>
  <v-container class="main-page">
    <v-row>
      <v-col cols="12" md="8" class="image-container-1">
        <v-row>
          <v-col cols="12" sm="10" offset-sm="3" class="collage">
            <v-card>
              <v-container fluid>
                <v-row>
                  <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                    <v-card flat tile class="d-flex">
                      <v-img
                        :src="`https://d2461yysjut9f6.cloudfront.net/photos/students${n}.jpg`"
                        :lazy-src="`https://d2461yysjut9f6.cloudfront.net/photos/students${n}.jpg`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey lighten-5">
                            </v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" md="4">
        <div class="about-us-insa" id="about">
          <v-card class="card-about">
            <v-card-title class="display-1 justify-center">
              {{ $t("content-education.students[0]") }}
            </v-card-title>
            <v-timeline>
              <v-timeline-item class="bubbles" color="brown">
                {{ $t("content-education.students[1]") }}
              </v-timeline-item>
              <v-timeline-item class="text-right bubbles" color="brown">
                {{ $t("content-education.students[2]") }}
              </v-timeline-item>
              <v-timeline-item class="bubbles" color="brown">
                {{ $t("content-education.students[3]") }}
              </v-timeline-item>
              <v-timeline-item class="text-right bubbles" color="brown">
                {{ $t("content-education.students[4]") }}
              </v-timeline-item>
              <v-timeline-item class="bubbles" color="brown">
                {{ $t("content-education.students[5]") }}
              </v-timeline-item>
              <v-timeline-item class="text-right bubbles" color="brown">
                {{ $t("content-education.students[6]") }}
              </v-timeline-item>
              <v-timeline-item class="bubbles" color="brown">
                {{ $t("content-education.students[7]") }}
              </v-timeline-item>
              <v-timeline-item class="text-right bubbles" color="brown">
                {{ $t("content-education.students[8]") }}
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Students",
  props: {
    msg: String,
  },
  methods: {
    setData() {
      this.$store.dispatch("items/addItem", {
        name: "example",
        data: "bye",
      });
    },
  },
  computed: {
    ...mapState("items", ["items"]),
  },
  data: () => ({
    myData: [],
    testShow: false,
  }),
};
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";
.main-page {
  width: 100% !important;
  max-width: 100% !important;
  height: 100% !important;
  padding: 0px !important;

  .collage {
    margin-left: 10% !important;
  }

  .image-container-1 {
    width: 100%;
    padding: 0px;
    background-color: white;
    .img1 {
      width: inherit;
      mask-image: url("../assets/mask1.svg");
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
      width: inherit;
      mask-image: url("../assets/mask1.svg");
      mask-size: cover;
      mask-position: left bottom;
      mask-repeat: no-repeat;
    }
  }

  .bubbles {
    color: $color-brown-base !important;
  }
}
</style>
