<template>
  <v-app>
    <v-app-bar app color="primary lighten-1">
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/William-dew/panel-william-app"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="principal">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="input">
            <form-input-dimension-panneau />
            <form-input-dimension />
            <entraxe-edge />
            <v-row>
              <quantity-pcb />
              <casse />
            </v-row>
          </v-col>
          <v-col cols="12" md="4"><resultat /></v-col>
          <v-col cols="12" md="4"><Canvas /></v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>William-App</strong>
        </v-col>
      </v-row></v-footer
    >
  </v-app>
</template>

<script>
import Canvas from "./components/Canvas.vue";
import FormInputDimension from "./components/FormInputDimension.vue";
import FormInputDimensionPanneau from "./components/FormInputDimensionPanneau.vue";
import Resultat from "./components/Resultat.vue";
import EntraxeEdge from "./components/entraxe-edge.vue";
import QuantityPcb from "./components/quantityPcb.vue";
import Casse from "./components/Casse.vue";

export default {
  name: "App",

  components: {
    FormInputDimension,
    FormInputDimensionPanneau,
    Resultat,
    Canvas,
    EntraxeEdge,
    QuantityPcb,
    Casse,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.principal {
  .input {
    border: 2px solid green;
  }
}
</style>
