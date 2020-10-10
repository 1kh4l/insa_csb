<template>
  <v-container>
    <v-img class="bg-img" src="@/assets/tree_right3.png" alt="tree"></v-img>
    <v-layout>
      <v-row align="center" justify="center">
        <v-col class="dense">
          <div>
            <v-card flat class="education-levels-offered mx-8 mx-md-auto" max-width="1480">
              <v-row justify="center">
                <v-col cols="12" md="6" lg="4" class="mr-lg-12">
                  <v-card flat>
                    <v-card-title class="card-title">
                      {{ $t("content-education.education-levels[0]") }}
                    </v-card-title>
                    <v-card-text class="card-text">
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[1]") }}
                      </p>
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[2]") }}
                      </p>
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[3]") }}
                      </p>
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[4]") }}
                      </p>
                    </v-card-text>
                    <v-card-title class="card-title">
                      {{ $t("content-education.education-levels[5]") }}
                    </v-card-title>
                    <v-card-text class="card-text">
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[6]") }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="auto" class="hidden-md-and-down">
                  <v-responsive max-height="666px">
                    <img src="@/assets/leaves.png" alt="leaves" contain />
                  </v-responsive>
                </v-col>
                <v-col cols="12" md="6" lg="5" class="ml-lg-16">
                  <v-card flat>
                    <v-card-title class="card-title">
                      {{ $t("content-education.education-levels[7]") }}
                    </v-card-title>
                    <v-card-text class="card-text">
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[8]") }}
                      </p>
                    </v-card-text>
                    <v-card-title class="card-title">
                      {{ $t("content-education.education-levels[9]") }}
                    </v-card-title>
                    <v-card-text class="card-text">
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[10]") }}
                      </p>
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[11]") }}
                      </p>
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[12]") }}
                      </p>
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[13]") }}
                      </p>
                      <p class="text-justify text">
                        {{ $t("content-education.education-levels[14]") }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
@import "../styles/settings.scss";
.education-levels-offered {
  margin-top: 120px;
  margin-bottom: 184px;
  font-family: "Montserrat", sans-serif !important;
  color: #272727;
  background: transparent;
  .v-card {
    background: transparent;
  }
}
.card-title {
  padding: 0;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  margin-bottom: 32px;
  word-break: break-word;
  margin-top: 60px;
  &:first-child {
    margin-top: 0;
  }
}
.card-text {
  padding: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  .text {
    margin-bottom: 28px;
    word-break: break-word;
    &:last-child {
      margin: 0;
    }
  }
}
.bg-img {
  position: absolute;
  top: 55px;
  right: 0;

  @media (max-width: 375px) {
    top: 10px;
    max-width: 124px;
    max-height: 89px;
  }
}
</style>
