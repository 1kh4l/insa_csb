<template>
  <v-container class="student-page">
    <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
      <v-row>
        <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
          <v-card flat class="student-title">
            <v-card-title class="student-title justify-center">
              {{ $t("sidenav.academic.items.student") }}
            </v-card-title>
          </v-card>
        </v-col>
        <v-row no-gutters>
          <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
            <v-img class="education-section-tree-top" src="../assets/student_tree_top.png" />
          </v-col>
        </v-row>
      </v-row>
      <!--Student Page Gallery Section-->
      <v-container class="student-page-gallery">
        <v-row no-gutters align="center" justify="center">
          <v-col class="col-size" align="center" cols="12" sm="12" xs="12" lg="12" xl="12">
            <v-row class="img-size">
              <v-col cols="12" sm="6" xs="6" lg="6" xl="6">
                <v-img class="img1" src="../assets/students_gallery_1.jpg" />
                <!-- <v-img src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_1.jpg" />-->
              </v-col>
              <v-col cols="12" sm="3" xs="3" lg="3" xl="3">
                <v-img class="img1" src="../assets/students_gallery_2.jpg" />
                <!-- <v-img
                  class="img1"
                  src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_2.jpg"
                />-->
              </v-col>
              <v-col cols="12" sm="3" xs="3" lg="3" xl="3">
                <v-img class="img1" src="../assets/students_gallery_3.jpg" />
                <!-- <v-img
                  class="img1"
                  src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_3.jpg"
                />-->
              </v-col>
            </v-row>
            <v-row class="img-size2">
              <v-col cols="12" sm="3" xs="3" lg="3" xl="3">
                <v-img class="img2" src="../assets/students_gallery_4.jpg" />
                <!-- <v-img
                  class="img1"
                  src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_4.jpg"
                />-->
              </v-col>
              <v-col cols="12" sm="3" xs="3" lg="3" xl="3">
                <v-img class="img2" src="../assets/students_gallery_5.jpg" />
                <!-- <v-img
                  class="img1"
                  src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_5.jpg"
                />-->
              </v-col>
              <v-col cols="12" sm="4" xs="4" lg="4" xl="4">
                <v-img class="img2" src="../assets/students_gallery_6.jpg" />
                <!-- <v-img
                  class="img1"
                  src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_6.jpg"
                />-->
              </v-col>
              <v-col class="small-img" cols="12" sm="2" xs="2" lg="2" xl="2">
                <v-row class="small-img-row1">
                  <v-col cols="12" sm="2" xs="2" lg="12" xl="12">
                    <v-img class="img2" src="../assets/students_gallery_7.jpg" />
                    <!-- <v-img
                      src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_7.jpg"
                    />-->
                  </v-col>
                </v-row>
                <v-row class="small-img-row2">
                  <v-col cols="12" sm="2" xs="2" lg="12" xl="12">
                    <v-img class="img2" src="../assets/students_gallery_8.jpg" />
                    <!-- <v-img
                      src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_8.jpg"
                    />-->
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <div class="showMoreBtn" v-if="show">
              <v-row no-gutters align="center" justify="center">
                <v-btn class="showMoreBtn" outlined color="brown" v-on="on" @click="show = !show">
                  {{ $t(`buttons.show-more`) }}
                </v-btn>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- Images that moving down-->
      <div class="imgBelow" style="display: none;" v-show="(showMoreBtn = !show)">
        <v-container class="student-page-gallery-below">
          <v-row no-gutters align="center" justify="center">
            <v-col class="col-size" align="center" cols="12" sm="12" xs="12" lg="12" xl="12">
              <v-row class="img-size-below">
                <v-col cols="12" sm="6" xs="6" lg="6" xl="6">
                  <v-img class="img1" src="../assets/students_gallery_9.jpg" />
                  <!-- <v-img src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_9.jpg" />-->
                </v-col>
                <v-col cols="12" sm="3" xs="3" lg="3" xl="3">
                  <v-img class="img1-below" src="../assets/students_gallery_10.jpg" />
                  <!-- <v-img
                    class="img1"
                    src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_10.jpg"
                  />-->
                </v-col>
                <v-col cols="12" sm="3" xs="3" lg="3" xl="3">
                  <v-img class="img1-below" src="../assets/students_gallery_11.jpg" />
                  <!-- <v-img
                    class="img1"
                    src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_11.jpg"
                  />-->
                </v-col>
              </v-row>
              <v-row class="img-size2-below">
                <v-col cols="12" sm="3" xs="3" lg="3" xl="3">
                  <v-img class="img2-below" src="../assets/students_gallery_12.jpg" />
                  <!-- <v-img
                    class="img1"
                    src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_12.jpg"
                  />-->
                </v-col>
                <v-col cols="12" sm="3" xs="3" lg="3" xl="3">
                  <v-img class="img2-below" src="../assets/students_gallery_13.jpg" />
                  <!-- <v-img
                    class="img1"
                    src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_13.jpg"
                  />-->
                </v-col>
                <v-col cols="12" sm="4" xs="4" lg="4" xl="4">
                  <v-img class="img2-below" src="../assets/students_gallery_14.jpg" />
                  <!-- <v-img
                    class="img1"
                    src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_14.jpg"
                  />-->
                </v-col>
                <v-col class="small-img" cols="12" sm="2" xs="2" lg="2" xl="2">
                  <v-row class="small-img-row1-below">
                    <v-col cols="12" sm="2" xs="2" lg="12" xl="12">
                      <v-img class="img2-row1-below" src="../assets/students_gallery_15.jpg" />
                      <!-- <v-img
                        src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_15.jpg"
                      />-->
                    </v-col>
                  </v-row>
                  <v-row class="small-img-row2-below">
                    <v-col cols="12" sm="2" xs="2" lg="12" xl="12">
                      <v-img class="img2-below" src="../assets/students_gallery_16.jpg" />
                      <!-- <v-img
                        src="https://d2461yysjut9f6.cloudfront.net/photos/students_gallery_16.jpg"
                      />-->
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-btn
              class="show-less-btn"
              outlined
              color="brown"
              v-on="on"
              @click="show = !show"
              v-if="!show"
            >
              {{ $t(`buttons.show-less`) }}
            </v-btn>
          </v-row>
        </v-container>
      </div>
      <!--Education Content Section-->
      <v-container class="education-content">
        <v-row>
          <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
            <v-card flat class="content-title" color="#f5f5f5">
              <v-card-title class="content-title justify-center">
                {{ $t(`content-education.students[0]`) }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
            <v-img class="education-section-tree-right" src="../assets/student_tree_right.png" />
          </v-col>
        </v-row>
        <v-col cols="12" sm="12" xs="12" lg="12" xl="12" align="center" justify="center">
          <v-row no-gutters justify="center">
            <v-col cols="12" sm="1" xs="1" lg="2" xl="2" align="center">
              <v-img class="point" src="../assets/point.png" />
            </v-col>
            <v-col cols="12" sm="11" xs="12" lg="4" xl="4" align="left">
              <v-card flat class="card-content">
                <v-card-text class="text-font">
                  <div>
                    {{ $t(`content-education.students[1]`) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="1" xs="12" lg="2" xl="2" align="center">
              <v-img class="point" src="../assets/point.png" />
            </v-col>
            <v-col cols="12" sm="11" xs="12" lg="4" xl="4" align="left">
              <v-card flat class="card-content">
                <v-card-text class="text-font">
                  <div>
                    {{ $t(`content-education.students[5]`) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" sm="1" xs="12" lg="2" xl="2" align="center">
              <v-img class="point" src="../assets/point.png" />
            </v-col>
            <v-col cols="12" sm="12" xs="12" lg="4" xl="4" align="left">
              <v-card flat class="card-content">
                <v-card-text class="text-font">
                  <div>
                    {{ $t(`content-education.students[2]`) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="1" xs="12" lg="2" xl="2" align="center">
              <v-img class="point" src="../assets/point.png" />
            </v-col>
            <v-col cols="12" sm="11" xs="12" lg="4" xl="4" align="left">
              <v-card flat class="card-content">
                <v-card-text class="text-font">
                  <div>
                    {{ $t(`content-education.students[6]`) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" sm="1" xs="12" lg="2" xl="2" align="center">
              <v-img class="point" src="../assets/point.png" />
            </v-col>
            <v-col cols="12" sm="11" xs="12" lg="4" xl="4" align="left">
              <v-card flat class="card-content">
                <v-card-text class="text-font">
                  <div>
                    {{ $t(`content-education.students[3]`) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="1" xs="12" lg="2" xl="2" align="center">
              <v-img class="point" src="../assets/point.png" />
            </v-col>
            <v-col cols="12" sm="11" xs="12" lg="4" xl="4" align="left">
              <v-card flat class="card-content">
                <v-card-text class="text-font">
                  <div>
                    {{ $t(`content-education.students[7]`) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" sm="1" xs="12" lg="2" xl="2" align="center">
              <v-img class="point" src="../assets/point.png" />
            </v-col>
            <v-col cols="12" sm="11" xs="12" lg="4" xl="4" align="left">
              <v-card flat class="card-content">
                <v-card-text class="text-font">
                  <div>
                    {{ $t(`content-education.students[4]`) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="1" xs="12" lg="2" xl="2" align="center">
              <v-img class="point" src="../assets/point.png" />
            </v-col>
            <v-col cols="12" sm="11" xs="12" lg="4" xl="4" align="left">
              <v-card flat class="card-content">
                <v-card-text class="text-font">
                  <div>
                    {{ $t(`content-education.students[8]`) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-row no-gutters align="left">
          <v-col cols="12" sm="12" xs="12" lg="12" xl="12">
            <v-img class="education-section-tree-left" src="../assets/student_tree_left.png" />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-container>
</template>
<script lan="ts">
import Vue from "vue";

const Students = Vue.extend({
  data: () => ({
    show: true,
  }),

  name: "Students",
});

export default Students;
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";

.student-page {
  width: 100% !important;
  max-width: 100% !important;
  height: 100% !important;
  padding: 0px !important;
  .student-title {
    margin-top: 5%;
    margin-bottom: -9%;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: #272727;
  }
  .education-section-tree-top {
    position: relative;
    float: left;
    max-width: 426px;
    margin-left: -1%;
    margin-bottom: -20%;
  }
  .student-page-gallery {
    max-width: 100% !important;
    .student-img {
      width: 100% !important;
    }
    .img2 {
      height: 65%;
    }
    .img1 {
      height: 85%;
    }
    .img-size {
      max-width: 90%;
      margin-top: 10%;
    }
    .img-size2 {
      max-width: 90%;
      margin-top: -4%;
      margin-bottom: -10%;
    }
    .small-img-row1 {
      height: 50%;
      margin-top: -5%;
    }
    .small-img-row2 {
      height: 50%;
      margin-top: -49%;
    }
  }
  .student-page-gallery-below {
    max-width: 100% !important;
    margin-top: -16% !important;
    .student-img {
      width: 100% !important;
    }
    .img2-below {
      height: 100%;
    }
    .img1-below {
      height: 100%;
    }
    .img-size-below {
      max-width: 90%;
      margin-top: 10%;
    }
    .img-size2-below {
      max-width: 90%;
      margin-bottom: -10%;
    }
    .small-img-row1-below {
      height: 86%;
      width: 109%;
      margin-top: -4%;
      .img2-row1-below {
        height: 56%;
      }
    }
    .small-img-row2-below {
      height: 50%;
      margin-top: -49%;
    }
    .show-less-btn {
      margin-top: 13%;
    }
  }
  .education-content {
    background-color: #f5f5f5;
    position: relative;
    max-width: 100% !important;
    width: 100%;
    margin-top: 10% !important;
    margin-bottom: 7%;
    .content-title {
      margin-top: 5%;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 49px;
      color: #272727;
    }
    .content-section {
      background: #f5f5f5;
      max-width: 75%;
      margin-left: 15%;
    }
    .content-col {
      margin-top: -1%;
    }
    .card-content {
      background: #f5f5f5;
    }
    .point {
      max-width: 46px !important;
      margin-bottom: 27%;
    }
    .education-section-tree-right {
      position: relative;
      float: right;
      max-width: 25%;
      margin-top: -17%;
    }
    .education-section-tree-left {
      position: relative;
      float: left;
      max-width: 426px;
      margin-left: -1%;
      margin-bottom: -11%;
    }
    .text-font {
      color: #575757;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 140%;
    }
  }
}
</style>
