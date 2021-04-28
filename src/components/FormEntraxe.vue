<template>
  <div>
    <input
      type="number"
      placeholder="Entraxe"
      v-model.number="x"
      v-on:input="update"
      min="0"
    />
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "FormInputDimension",
  data: () => ({
    x: "",
  }),

  methods: {
    update() {
      store.commit("setEntraxe", this.x);
    },
  },
};
</script>
<style>
</style>