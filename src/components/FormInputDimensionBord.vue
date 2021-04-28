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

export default {
  data: () => ({
    x: 0,
  }),
  methods: {
    update() {
      store.commit("setBordPanneau", this.x);
      console.log(store.state.input);
    },
  },
};
</script>

<style>
</style>