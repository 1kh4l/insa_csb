<template>
  <v-container>
    <v-row>
      <v-col cols="30" md="8">
        <div class="contact-card" id="contact">
          <v-card class="card-contact">
            <div class="brown text-center">
              <v-layout column align-center>
                <v-card-title class="display-1 white--text">
                  {{ $t("header.contact") }}
                </v-card-title>
              </v-layout>
            </div>
            <v-card-text class="body-2">
              <v-card-title>
                <v-icon large left>
                  mdi-phone
                </v-icon>
                <span class="title font-dark">
                  {{ $t("content-contact.telephones[0]") }} ~
                  {{ $t("content-contact.telephones[1]") }}
                </span>
              </v-card-title>
              <v-card-title>
                <v-icon large left>
                  mdi-map-marker
                </v-icon>
                <span class="title font-dark">
                  {{ $t("content-contact.direction[0]") }}
                </span>
              </v-card-title>
              <v-card-title>
                <v-icon large left>
                  mdi-calendar-month
                </v-icon>
                <span class="text-left">{{ $t("content-contact.public-attention[0]") }} </span>
                <v-card-text>
                  <div class="headline">{{ $t("content-contact.days-and-hours[0]") }}</div>
                </v-card-text>
              </v-card-title>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
      <v-col cols="6" md="4"></v-col>
    </v-row>
  </v-container>
</template>
