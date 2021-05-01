<template>
  <v-row>
    <v-col cols="6"><form-entraxe /></v-col>
    <v-col cols="6"><form-input-dimension-bord /></v-col>
  </v-row>
</template>
<script>
import FormEntraxe from "./entaxe-edge/FormEntraxe";
import FormInputDimensionBord from "./entaxe-edge/FormInputDimensionBord";
export default {
  components: { FormEntraxe, FormInputDimensionBord },
};
</script>

<style lang='scss'>
</style>