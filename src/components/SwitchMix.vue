<template>
  <v-switch v-model="switch1" label="mix" v-on:click="update"></v-switch>
</template>

<script>
import store from "../../store";
import { mix } from "../numberPose";
import { eventBus } from "../main";

export default {
  name: "switchMix",
  data() {
    return {
      switch1: true,
    };
  },
  methods: {
    update() {
      store.commit("setMix", this.switch1);
      mix();
      eventBus.$emit("draw");
    },
  },
};
</script>

<style>
</style>