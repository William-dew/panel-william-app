<template>
  <div cols="5" class="quantity">
    <v-text-field
      type="number"
      v-model.number="x"
      v-on:input="update"
      min="0"
      label="Quantité à livrer"
    ></v-text-field>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "quantityPcb",
  data: () => ({ x: 1 }),
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
}
</style>