<template>
  <v-app>
    <v-app-bar app color="secondary">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <form-input-dimension />
      <form-input-dimension-panneau />
      <form-input-dimension-bord />
      <form-entraxe />
      <resultat />
      <Canvas />
    </v-main>
  </v-app>
</template>

<script>
import Canvas from "./components/Canvas.vue";
import FormEntraxe from "./components/FormEntraxe.vue";
import FormInputDimension from "./components/FormInputDimension.vue";
import FormInputDimensionBord from "./components/FormInputDimensionBord.vue";
import FormInputDimensionPanneau from "./components/FormInputDimensionPanneau.vue";
import Resultat from "./components/Resultat.vue";

export default {
  name: "App",

  components: {
    FormInputDimension,
    FormInputDimensionPanneau,
    Resultat,
    FormInputDimensionBord,
    FormEntraxe,
    Canvas,
  },

  data: () => ({
    //
  }),
};
</script>
