<template>
  <div class="entraxe">
    <v-text-field
      type="number"
      placeholder="Entraxe"
      v-model.number="x"
      v-on:input="update"
      min="0"
    ></v-text-field>
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
<style lang='scss'>
.entraxe {
  padding: 1rem;
}
</style>