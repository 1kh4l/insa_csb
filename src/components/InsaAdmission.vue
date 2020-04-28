<template>
  <v-container>
    <v-layout>
      <v-row align="center" justify="center">
        <v-col class="dense">
          <div>
            <v-card flat class="requirements">
              <v-card-title class="brown--text display-2">
                {{ $t("content-insa-admission.requirements[0]") }}
              </v-card-title>
              <v-card-text class="body-1 font-weight-black">
                <p class="text-justify">{{ $t("content-insa-admission.requirements[1]") }}</p>
                <p class="text-justify">{{ $t("content-insa-admission.requirements[2]") }}</p>
                <p class="text-justify">{{ $t("content-insa-admission.requirements[3]") }}</p>
              </v-card-text>
              <v-card-title class="brown--text display-2">
                {{ $t("content-insa-admission.how-to-apply[0]") }}
              </v-card-title>
              <v-card-text class="body-1 font-weight-black">
                <p class="text-justify">{{ $t("content-insa-admission.how-to-apply[1]") }}</p>
              </v-card-text>
              <v-row v-for="step in stepsAdmission" :key="step" align="center">
                <v-col>
                  <v-card
                    class="steps-cards"
                    max-width="500"
                    color="orange lighten-5"
                    justify="center"
                    shaped
                  >
                    <v-row align="space-around">
                      <v-avatar color="orange" class="ma-5" size="90" title>
                        <span class="white--text font-weight-medium">
                          {{ $t(`content-insa-admission.step-${step}[0]`) }}
                        </span>
                      </v-avatar>
                      <v-card-text class="body-1 font-weight-medium">
                        <div class="admission-step">
                          {{ $t(`content-insa-admission.step-${step}[1]`) }}
                        </div>
                      </v-card-text>
                    </v-row>
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
<script>
export default {
  name: "InsaAdmission",
  data: () => ({
    stepsAdmission: [1, 2, 3, 4, 5, 6],
    justify: ["space-between"],
  }),
};
</script>
<style lang="scss" scoped>
@import "../styles/settings.scss";
.admission-step {
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  max-width: 340px;
  margin-top: 20px;
  margin-bottom: 15px;
}
.v-card__text {
  width: unset;
}
.container {
  max-width: 1000px;
}
.steps-cards {
  left: 150px;
}
.v-application .ma-5 {
  margin: 25px !important;
}
</style>
