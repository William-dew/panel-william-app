<template>
  <v-col cols="5" class="quantity">
    <v-text-field
      type="number"
      v-model.number="x"
      v-on:input="update"
      min="0"
      label="Quantité à livrer"
    ></v-text-field>
  </v-col>
</template>

<script>
import store from "../../store";
export default {
  name: "quantityPcb",
  data: () => ({ x: "" }),
  methods: {
    update() {
      store.commit("setQuantityPcbToDeliver", this.x);
    },
  },
};
</script>

<style>
.quantity {
  color: red;
  margin-left: 1rem;
}
</style>