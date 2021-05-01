<template>
  <div class="FormInputDimension">
    <input
      type="number"
      placeholder="dimension X"
      v-model.number="x"
      v-on:input="update"
    />
    <input
      type="number"
      placeholder="dimension Y"
      v-model.number="y"
      v-on:input="update"
    />
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
  background-color: aliceblue;
  display: inline;
  margin: 1rem;
}
</style>