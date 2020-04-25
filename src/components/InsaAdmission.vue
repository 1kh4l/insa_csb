<template>
  <v-container>
    <v-layout>
      <v-row>
        <v-col class="dense">
          <div class="insa-admission" id="insa-admission">
            <span class="brown--text display-2">
              {{ $t("How to apply?") }}
            </span>
            <p class="text-justify">
              {{ $t("content-insa-admission.how-to-apply[0]") }}
            </p>
          </div>
          <v-card shaped>
            <v-row>
              <v-avatar color="orange" class="ma-3" size="64" title>
                <span class="white--text font-weight-medium">
                  {{ $t("content-insa-admission.step-1[0]") }}
                </span>
              </v-avatar>
              <v-card-text class="text-justify">
                <div class="comment-body">
                  {{ $t("content-insa-admission.step-1[1]") }}
                </div>
              </v-card-text>
            </v-row>
          </v-card>
          <v-row>
            <v-col>
              <v-card class="steps" shaped>
                <v-avatar color="orange" class="ma-3" size="64" title>
                  <span class="white--text font-weight-medium">
                    {{ $t("content-insa-admission.step-2[0]") }}
                  </span>
                </v-avatar>
                <v-card-text class="text-center">
                  <div class="comment-body">
                    {{ $t("content-insa-admission.step-2[1]") }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card class="steps" shaped>
                <v-avatar color="orange" class="ma-3" size="64" title>
                  <span class="white--text font-weight-medium">
                    {{ $t("content-insa-admission.step-3[0]") }}
                  </span>
                </v-avatar>
                <v-card-text class="text-">
                  <div class="comment-body">
                    {{ $t("content-insa-admission.step-3[1]") }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card class="steps" shaped>
                <v-avatar color="orange" class="ma-3" size="64" title>
                  <span class="white--text font-weight-medium">
                    {{ $t("content-insa-admission.step-4[0]") }}
                  </span>
                </v-avatar>
                <v-card-text class="text-">
                  <div class="comment-body">
                    {{ $t("content-insa-admission.step-4[1]") }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card class="steps" shaped>
                <v-avatar color="orange" class="ma-3" size="64" title>
                  <span class="white--text font-weight-medium">
                    {{ $t("content-insa-admission.step-5[0]") }}
                  </span>
                </v-avatar>
                <v-card-text class="text-">
                  <div class="comment-body">
                    {{ $t("content-insa-admission.step-5[1]") }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card class="steps" shaped>
                <v-avatar color="orange" class="ma-3" size="64" title>
                  <span class="white--text font-weight-medium">
                    {{ $t("content-insa-admission.step-6[0]") }}
                  </span>
                </v-avatar>
                <v-card-text class="text-">
                  <div class="comment-body">
                    {{ $t("content-insa-admission.step-6[1]") }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
@import "../styles/settings.scss";

.steps {
  justify: flex-end;
}
.comment-bodt {
  justify: flex-end;
}
.item {
  align-self: flex-start;
}
</style>
