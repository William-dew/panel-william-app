<template>
  <v-form class="FormInputDimension">
    <v-row>
      <v-col cols="6">
        <v-text-field
          type="number"
          v-model.number="x"
          v-on:input="update"
          label="dim. Circuit"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          type="number"
          v-model.number="y"
          v-on:input="update"
          label="dim. Circuit"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
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
