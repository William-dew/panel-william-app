<template>
  <div class="entraxe">
    <v-text-field
      type="number"
      v-model.number="x"
      v-on:input="update"
      min="0"
      label="Entre poses"
    ></v-text-field>
  </div>
</template>

<script>
import store from "../../store";
import { eventBus } from "../main";
import { mix } from "../numberPose";

export default {
  name: "FormEntraxe",
  data: () => ({
    x: "2",
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
}
</style>