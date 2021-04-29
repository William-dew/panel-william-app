<template>
  <table class="resultat">
    <tr>
      <td>Nombre de poses</td>
      <td>{{ resultat }}</td>
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
      return store.state.resultatMix;
    },
    panneauUtil() {
      return store.state.input;
    },
  },
};
</script>

<style lang='scss'>
.resultat {
  width: 300px;
}
</style>