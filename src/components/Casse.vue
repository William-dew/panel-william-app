<template>
  <div class="casse">
    <v-text-field
      type="number"
      v-model.number="x"
      v-on:input="update"
      min="0"
      label="% Casse"
    ></v-text-field>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "casse",
  data: () => ({ x: 15 }),
  methods: {
    update() {
      store.commit("setCasse", this.x);
    },
  },
};
</script>
