<template>
  <canvas
    class="canvas"
    id="c"
    width="400"
    height="400"
    v-on:click="draw"
  ></canvas>
</template>

<script>
import store from "../../store";
import { eventBus } from "../main";

export default {
  name: "Canvas",
  methods: {
    draw() {
      let scale = 2;
      let origin = store.state.input.bordPanneau / scale;
      this.vueCanvas.clearRect(0, 0, 600, 600);
      this.vueCanvas.strokeRect(
        0,
        0,
        store.state.input.dimPanelX / scale,
        store.state.input.dimPanelY / scale
      );
      this.vueCanvas.strokeRect(
        origin,
        origin,
        store.state.input.dimPanelUtilX / scale,
        store.state.input.dimPanelUtilY / scale
      );

      if (store.state.resultatMix.name == "cas1") {
        console.log("cas1");
        let x = origin,
          y = origin;
        for (let i = 0; i < store.state.resultatMix.numberInY; i++) {
          for (let j = 0; j < store.state.resultatMix.numberInX; j++) {
            this.vueCanvas.fillRect(
              x,
              y,
              store.state.input.dimCiX / scale,
              store.state.input.dimCiY / scale
            );

            x += (store.state.input.entraxe + store.state.input.dimCiX) / scale;
          }
          x = origin;
          this.vueCanvas.fillRect(
            x,
            y,
            store.state.input.dimCiX / scale,
            store.state.input.dimCiY / scale
          );
          y += (store.state.input.entraxe + store.state.input.dimCiY) / scale;
        }
        if (
          store.state.resultatMix.numberInYRotation == 0 ||
          store.state.resultatMix.numberInXRotation == 0
        ) {
          return;
        }
        // affichage avec rotation
        y = origin;
        x =
          origin +
          (store.state.input.dimCiX * store.state.resultatMix.numberInX +
            store.state.input.entraxe * store.state.resultatMix.numberInX) /
            scale;
        for (let i = 0; i < store.state.resultatMix.numberInYRotation; i++) {
          for (let j = 0; j < store.state.resultatMix.numberInXRotation; j++) {
            this.vueCanvas.fillRect(
              x,
              y,
              store.state.input.dimCiY / scale,
              store.state.input.dimCiX / scale
            );
            x += (store.state.input.entraxe + store.state.input.dimCiY) / scale;
          }
          x =
            origin +
            (store.state.input.dimCiX * store.state.resultatMix.numberInX +
              store.state.input.entraxe * store.state.resultatMix.numberInX) /
              scale;

          this.vueCanvas.fillRect(
            x,
            y,
            store.state.input.dimCiY / scale,
            store.state.input.dimCiX / scale
          );
          y += (store.state.input.entraxe + store.state.input.dimCiX) / scale;
        }
      }
      if (store.state.resultatMix.name == "cas2") {
        let x = origin,
          y = origin;
        for (let i = 0; i < store.state.resultatMix.numberInY; i++) {
          for (let j = 0; j < store.state.resultatMix.numberInX; j++) {
            this.vueCanvas.fillRect(
              x,
              y,
              store.state.input.dimCiY / scale,
              store.state.input.dimCiX / scale
            );

            x += (store.state.input.entraxe + store.state.input.dimCiY) / scale;
          }
          x = origin;
          this.vueCanvas.fillRect(
            x,
            y,
            store.state.input.dimCiY / scale,
            store.state.input.dimCiX / scale
          );
          y += (store.state.input.entraxe + store.state.input.dimCiX) / scale;
        }
        if (
          store.state.resultatMix.numberInYRotation == 0 ||
          store.state.resultatMix.numberInXRotation == 0
        ) {
          return;
        }
        // affichage avec rotation
        y = origin;
        x =
          origin +
          (store.state.input.dimCiY * store.state.resultatMix.numberInX +
            store.state.input.entraxe * store.state.resultatMix.numberInX) /
            scale;
        for (let i = 0; i < store.state.resultatMix.numberInYRotation; i++) {
          for (let j = 0; j < store.state.resultatMix.numberInXRotation; j++) {
            this.vueCanvas.fillRect(
              x,
              y,
              store.state.input.dimCiX / scale,
              store.state.input.dimCiY / scale
            );
            x += (store.state.input.entraxe + store.state.input.dimCiX) / scale;
          }
          x =
            origin +
            (store.state.input.dimCiY * store.state.resultatMix.numberInX +
              store.state.input.entraxe * store.state.resultatMix.numberInX) /
              scale;

          this.vueCanvas.fillRect(
            x,
            y,
            store.state.input.dimCiX / scale,
            store.state.input.dimCiY / scale
          );
          y += (store.state.input.entraxe + store.state.input.dimCiY) / scale;
        }
      }
    },
  },

  created() {
    eventBus.$on("draw", () => {
      this.draw();
      console.log("j'ai executer draw()");
    });
  },
  mounted() {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    this.vueCanvas = ctx;
    this.vueCanvas.fillStyle = "rgb(100,0,0)";
  },
};
</script>

<style lang="scss">
.canvas {
  border: 2px solid red;
}
</style>