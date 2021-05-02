<template>
  <div class="dimensionPanel">
    <v-radio-group column v-model="selected">
      <v-radio label="500x600" value="A" v-on:click="update"></v-radio>
      <v-radio label="570x480" value="B" v-on:click="update"></v-radio>
      <v-radio label="580x510" value="C" v-on:click="update"></v-radio>
      <v-container class="dimensionPanel__custom">
        <v-row>
          <v-radio value="D" v-on:click="update"></v-radio>

          <v-col cols="5">
            <v-text-field
              type="number"
              v-model.number="x"
              v-on:input="update"
              max="650"
              min="0"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              type="number"
              v-model.number="y"
              v-on:input="update"
              max="600"
              min="0"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-radio-group>
  </div>
</template>

<script>
import store from "../../store";
import { mix } from "../numberPose";
import { eventBus } from "../main";

export default {
  name: "FormInputDimensionPanneau",
  data: () => ({
    x: "600",
    y: "500",
    selected: "A",
  }),
  methods: {
    update() {
      this.dimension();
      store.commit("setDimensionPanneau", { x: this.x, y: this.y });
      mix();
      eventBus.$emit("draw");
    },
    dimension() {
      switch (this.selected) {
        case "A":
          this.x = 600;
          this.y = 500;
          break;
        case "B":
          this.x = 570;
          this.y = 480;
          break;
        case "C":
          this.x = 580;
          this.y = 510;
          break;
      }
    },
  },
};
</script>
<style lang="scss">
.dimensionPanel {
  &__custom {
    margin-top: -1.7rem;
  }
}
</style>