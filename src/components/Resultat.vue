<template>
  <v-simple-table id="resultat">
    <tr>
      <td>Nombre de poses:</td>

      <td>{{ resultat ? resultat : 0 }}</td>
    </tr>
    <tr>
      <td>Remplissage:</td>
      <td>{{ remplissage ? remplissage + "   %" : 0 }}</td>
    </tr>
    <tr>
      <td colspan="2" class="bar">
        <v-progress-linear
          v-bind:value="remplissage"
          color="blue"
          height="5"
        ></v-progress-linear>
      </td>
    </tr>

    <tr>
      <td>Quantité de panneaux:</td>
      <td>{{ isNaN(quantityPanel) ? 0 : quantityPanel }}</td>
    </tr>

    <tr>
      <td>coût unitaire:</td>
      <td>{{ isNaN(unitPrice) ? 0 : unitPrice + "€" }}</td>
    </tr>

    <!-- 
      Affichage du  store.state.input 
      <div>panneau util{{ panneauUtil }}</div> 
    -->
  </v-simple-table>
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
        (store.state.input.quantityPcbToDeliver /
          store.state.resultatMix.resultat) *
          1 +
          store.state.input.casse / 100
      );
    },
    unitPrice() {
      return (
        store.state.input.bareme / store.state.input.quantityPcbToDeliver
      ).toFixed(2);
    },
  },
};
</script>

<style lang='scss'>
#resultat {
  color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  td:not(.bar) {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }

  tr {
    height: 3rem;
  }
  tr:nth-child(3) {
    height: 1rem;
  }
}
</style>