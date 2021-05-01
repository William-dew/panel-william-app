<template>
  <v-col cols="5" class="casse">
    <v-text-field
      type="number"
      v-model.number="x"
      v-on:input="update"
      min="0"
      label="Casse"
    ></v-text-field>
  </v-col>
</template>

<script>
import store from "../../store";
export default {
  name: "casse",
  data: () => ({ x: "" }),
  methods: {
    update() {
      store.commit("setCasse", this.x);
    },
  },
};
</script>

<style>
.casse {
  margin-left: 2rem;
}
</style>