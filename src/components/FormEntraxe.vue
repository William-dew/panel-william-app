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
import { eventBus } from "../main";
import { mix } from "../numberPose";

export default {
  name: "FormInputDimension",
  data: () => ({
    x: "",
  }),

  methods: {
    update() {
      store.commit("setEntraxe", this.x);
      mix();
      eventBus.$emit("draw");
    },
  },
};
</script>
<style>
</style>