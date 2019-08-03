<template>
    <v-toolbar-title class="headline">
        <v-container justify-center>
            <v-layout row align-center>
                <v-flex md1 xs1>
                    <img class="insa-logo" src="./../assets/insa_logo.png">
                </v-flex>
                <v-flex md11 xs11>
                    <div :class="{'ma-0': $vuetify.breakpoint.smAndDown}">
                        <span>INSA</span>
                        <span class="font-weight-light">
                            ~ Instituto Nuestra Señora de la Asunción
                        </span>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-toolbar-title>
</template>

<script>

export default {
    data: () => ({
        //
    }),
};
</script>

<style>
.insa-logo {
    width: 80%;
    padding-top: 5px;
}
.ma-0 {
    font-size: 0.5em;
}
</style>
