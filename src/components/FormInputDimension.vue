<template>
  <div class="FormInputDimension">
    <v-text-field
      type="number"
      v-model.number="x"
      v-on:input="update"
      label="Dimension circuit"
    ></v-text-field>
    <v-text-field
      type="number"
      v-model.number="y"
      v-on:input="update"
      label="Dimension circuit"
    ></v-text-field>
  </div>
</template>

<script>
import store from "../../store";
import { mix } from "../numberPose";
import { eventBus } from "../main";
export default {
  name: "FormInputDimension",
  data: () => ({
    x: "",
    y: "",
  }),

  methods: {
    update() {
      store.commit("setDimensionCircuit", { x: this.x, y: this.y });
      mix();
      eventBus.$emit("draw");
    },
  },
};
</script>
<style lang='scss'>
.FormInputDimension {
  padding: 1rem;
}
</style>