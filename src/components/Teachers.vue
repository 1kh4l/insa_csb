<template>
  <v-container class="main-page">
    <v-row>
      <v-col cols="12" md="8">
        <div class="teacher-goals" id="about">
          <v-card class="card-about">
            <v-card-title class="display-1 justify-center">
              {{ $t("content-education.teachers[0]") }}
            </v-card-title>
            <v-timeline>
              <v-timeline-item class="bubbles" color="brown">
                {{ $t("content-education.teachers[1]") }}
              </v-timeline-item>
              <v-timeline-item class="text-right bubbles" color="brown">
                {{ $t("content-education.teachers[2]") }}
              </v-timeline-item>
              <v-timeline-item class="bubbles" color="brown">
                {{ $t("content-education.teachers[3]") }}
              </v-timeline-item>
              <v-timeline-item class="text-right bubbles" color="brown">
                {{ $t("content-education.teachers[4]") }}
              </v-timeline-item>
              <v-timeline-item class="bubbles" color="brown">
                {{ $t("content-education.teachers[5]") }}
              </v-timeline-item>
              <v-timeline-item class="text-right bubbles" color="brown">
                {{ $t("content-education.teachers[6]") }}
              </v-timeline-item>
              <v-timeline-item class="bubbles" color="brown">
                {{ $t("content-education.teachers[7]") }}
              </v-timeline-item>
              <v-timeline-item class="text-right bubbles" color="brown">
                {{ $t("content-education.teachers[8]") }}
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </div>
      </v-col>
      <v-col cols="6" md="4"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

const Teachers = Vue.extend({
  computed: {
    ...mapState("items", ["items"]),
  },
  data: () => ({
    myData: [],
    testShow: false,
  }),
  methods: {
    setData(): void {
      this.$store.dispatch("items/addItem", {
        data: "bye",
        name: "example",
      });
    },
  },
  name: "Teachers",
  props: {
    msg: String,
  },
});

export default Teachers;
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

  .teacher-goals {
    width: 100%;
    margin-left: 22px;
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
