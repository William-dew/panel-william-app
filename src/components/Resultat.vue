<template>
  <table class="resultat table">
    <tr>
      <td>Nombre de poses</td>

      <td>{{ resultat ? resultat : 0 }}</td>
    </tr>
    <tr>
      <td>Remplissage</td>
      <td>{{ remplissage ? remplissage + "   %" : 0 }}</td>
    </tr>
    <tr>
      <td>Quantité de panneaux</td>
      <td>{{ isNaN(quantityPanel) ? 0 : quantityPanel }}</td>
    </tr>
    <div>panneau util{{ panneauUtil }}</div>
  </table>
</template>

<script>
import store from "../../store";
export default {
  name: "Resultat",
  computed: {
    resultat() {
      return store.state.input.dimCiX && store.state.input.dimCiY
        ? store.state.resultatMix.resultat
        : 0;
    },
    panneauUtil() {
      return store.state.input;
    },
    remplissage() {
      return Math.floor(
        (store.state.input.dimCiX *
          store.state.input.dimCiY *
          store.state.resultatMix.resultat *
          100) /
          (store.state.input.dimPanelUtilX * store.state.input.dimPanelUtilY)
      );
    },
    quantityPanel() {
      return Math.ceil(
        store.state.input.quantityPcbToDeliver /
          store.state.resultatMix.resultat
      );
    },
  },
};
</script>

<style lang='scss'>
td {
  width: 90%;
  border-bottom: 1px grey solid;
}
td {
  margin-bottom: 2rem;
}
.resultat {
  border: 1px solid blue;
  padding: 1rem;
}
</style>