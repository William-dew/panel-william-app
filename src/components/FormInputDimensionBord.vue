<template>
  <div class="edge">
    <v-text-field
      type="number"
      v-model.number="x"
      v-on:input="update"
      label="Bord Panneau/Circuit"
    ></v-text-field>
  </div>
</template>

<script>
import store from "../../store";
import { mix } from "../numberPose";
import { eventBus } from "../main";

export default {
  data: () => ({
    x: 0,
  }),
  methods: {
    update() {
      store.commit("setBordPanneau", this.x);
      mix();
      eventBus.$emit("draw");
    },
  },
};
</script>

<style lang='scss'>
.edge {
  padding: 1rem;
}
</style>