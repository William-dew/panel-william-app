<template>
  <div>
    <div>toto {{ resultat }}</div>
    <div>panneau util{{ panneauUtil }}</div>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "Resultat",
  computed: {
    resultat() {
      return store.state.input.dimPanelUtilX;
    },
    panneauUtil() {
      return store.state.input;
    },
  },
};
</script>

<style>
</style>