<template>
  <div class="bareme">
    <v-text-field
      type="number"
      v-model.number="x"
      v-on:input="update"
      min="0"
      label="€ Barème"
    ></v-text-field>
  </div>
</template>
<script>
import store from "../../store";
export default {
  name: "bareme",
  data: () => ({ x: 0 }),
  methods: {
    update() {
      store.commit("setBareme", this.x);
    },
  },
};
</script>
