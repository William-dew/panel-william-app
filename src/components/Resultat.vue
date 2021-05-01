<template>
  <table class="resultat" border>
    <tr>
      <td>Nombre de poses</td>
      <td>{{ resultat }}</td>
    </tr>
    <tr>
      <td>Détail résultat</td>
      <td>{{ completResult }}</td>
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
      return store.state.resultatMix.resultat;
    },
    panneauUtil() {
      return store.state.input;
    },
    completResult() {
      return store.state.resultatMix;
    },
  },
};
</script>

<style lang='scss'>
.resultat {
  width: 800px;
}
</style>