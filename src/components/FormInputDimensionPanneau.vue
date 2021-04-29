<template>
  <div>
    <input
      type="number"
      placeholder="dimension P X"
      v-model.number="x"
      v-on:input="update"
    />
    <input
      type="number"
      placeholder="dimension P Y"
      v-model.number="y"
      v-on:input="update"
    />
  </div>
</template>

<script>
import store from "../../store";
import { mix } from "../numberPose";

export default {
  name: "FormInputDimensionPanneau",
  data: () => ({
    x: "",
    y: "",
  }),
  methods: {
    update() {
      store.commit("setDimensionPanneau", { x: this.x, y: this.y });
      mix();
    },
  },
};
</script>
<style>
</style>