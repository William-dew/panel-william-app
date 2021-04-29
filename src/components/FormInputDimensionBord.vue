<template>
  <div>
    <input
      type="number"
      v-model.number="x"
      v-on:input="update"
      placeholder="bord panneau"
      min="0"
    />
  </div>
</template>

<script>
import store from "../../store";
import { mix } from "../numberPose";

export default {
  data: () => ({
    x: 0,
  }),
  methods: {
    update() {
      store.commit("setBordPanneau", this.x);
      mix();
    },
  },
};
</script>

<style>
</style>