<template>
  <v-container class="student-life-page">
    <div>
      <v-img
        class="student-life-img"
        src="https://d2461yysjut9f6.cloudfront.net/photos/cultural_week_1.jpg"
      />
    </div>
    <v-layout>
      <v-row align="center" justify="center">
        <v-col class="dense">
          <div>
            <v-card class="benefits-card" flat>
              <v-card-title class="brown--text display-2">
                {{ $t("content-life-stu.benefits[0]") }}
              </v-card-title>
              <v-card-text class="body-1 font-weight-black">
                <p class="text-justify">{{ $t("content-life-stu.benefits[1]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[2]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[3]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[4]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[5]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[6]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[7]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[8]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[9]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[10]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[11]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.benefits[12]") }}</p>
              </v-card-text>
              <v-card-text class="body-1 font-weight-black">
                <p class="text-justify">{{ $t("content-life-stu.guaranteed[0]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.guaranteed[1]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.guaranteed[2]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.guaranteed[3]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.guaranteed[4]") }}</p>
                <p class="text-justify">{{ $t("content-life-stu.guaranteed[5]") }}</p>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<style>
.student-life-img {
  width: 100%;
  mask-image: url("../assets/mask1.svg");
  mask-size: cover;
  mask-position: left bottom;
  mask-repeat: no-repeat;
  max-height: 500px;
}
.student-life-page {
  width: 100% !important;
  max-width: 100% !important;
  height: 100% !important;
  padding: 0px !important;
}
.benefits-card {
  left: 150px;
}
</style>
