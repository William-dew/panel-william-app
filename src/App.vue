<template>
  <v-app>
    <v-app-bar app color="primary lighten-1">
      <div class="d-flex align-center">
        <v-toolbar-title>Panellisation</v-toolbar-title>
      </div>
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
      <v-row>
        <v-col cols="12" md="6" lg="3" class="input">
          <v-card elevation="10">
            <form-input-dimension-panneau />
            <form-input-dimension />
            <form-entraxe />
            <form-input-dimension-bord />
            <quantity-pcb />
            <casse />
            <bareme />
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="2"
          ><v-card elevation="10"><resultat /></v-card
        ></v-col>
        <v-col md="12" lg="7">
          <v-card elevation="10" id="cardcanvas">
            <Canvas />
            <SwitchMix id="switch-mix" /> </v-card
        ></v-col>
      </v-row>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>William-dew</strong>
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
import QuantityPcb from "./components/quantityPcb.vue";
import Casse from "./components/Casse.vue";
import FormEntraxe from "./components/FormEntraxe.vue";
import FormInputDimensionBord from "./components/FormInputDimensionBord.vue";
import Bareme from "./components/Bareme.vue";
import SwitchMix from "./components/SwitchMix.vue";
import { eventBus } from "./main";
import { mix } from "./numberPose";

export default {
  name: "App",
  components: {
    FormInputDimension,
    FormInputDimensionPanneau,
    Resultat,
    Canvas,
    QuantityPcb,
    Casse,
    FormEntraxe,
    FormInputDimensionBord,
    Bareme,
    SwitchMix,
  },
  mounted() {
    eventBus.$emit("draw");
    mix();
  },
};
</script>
<style lang="scss">
.principal {
  margin: 6vh 50px;
}
.input > * {
  padding: 1rem;
}
#switch-mix {
  position: absolute;
  top: 0;
  left: 600px;
}
</style>
