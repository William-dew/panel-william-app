<template>
  <div class="wrapper">
    <b-card bg-variant="light" class="formulaire">
      <b-form-group label="Format :" v-slot="{ ariaDescribedby }">
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="A"
          >600 x 500 <b-icon-arrow-right></b-icon-arrow-right> DF</b-form-radio
        >
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="B"
          >570 x 480 <b-icon-arrow-right></b-icon-arrow-right> MC</b-form-radio
        >
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="C"
          >580 x 510 <b-icon-arrow-right></b-icon-arrow-right> MC</b-form-radio
        >
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="D"
          ><b-form inline>
            <b-form-input
              size="sm"
              min="15"
              type="number"
              v-model.number="form.panel.x"
              class="input mr-2"
            >
            </b-form-input>

            <b-form-input
              size="sm"
              type="number"
              min="15"
              v-model.number="form.panel.y"
              class="input"
            ></b-form-input>
          </b-form>
        </b-form-radio>
      </b-form-group>
      <b-form inline class="mb-2">
        <b-form-group id="input-dimension-circuit" label="Circuit:">
          <b-form-input
            type="number"
            step="0.1"
            v-model.number="form.circuit.x"
            v-on:input="drawRect"
            class="mr-2 input"
          ></b-form-input>

          <b-form-input
            type="number"
            step="0.1"
            v-on:input="drawRect"
            v-model.number="form.circuit.y"
            class="input"
          ></b-form-input>
        </b-form-group>
      </b-form>
      <b-form inline>
        <b-form-group id="input-entrepose" label="entrepose">
          <b-form-input
            v-model.number="form.entrepose"
            type="number"
            step="0.1"
            min="0"
            v-on:input="drawRect"
            class="mr-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-marge-fabrication" label="casse">
          <b-input-group append="%">
            <b-form-input
              v-model.number="form.marge"
              type="number"
              min="0"
            ></b-form-input>
          </b-input-group>
        </b-form-group> </b-form
      ><b-form inline>
        <b-form-group id="input-quantite" label="qté à livrer">
          <b-form-input
            v-model.number="form.quantiteALivrer"
            type="number"
            min="0"
            class="mr-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="prix-total" label="barème">
          <b-input-group append="€">
            <b-form-input
              v-model.number="form.prixTotal"
              step="0.01"
              type="number"
              min="0"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-form>
    </b-card>
    <b-card id="resultat" bg-variant="light" text-variant="white">
      <table class="table">
        <tr>
          <th>Nombre de poses:</th>
          <td
            v-if="
              this.form.resultat.resultat > 0 &&
              this.form.circuit.x &&
              this.form.circuit.y
            "
          >
            {{ this.form.resultat.resultat }}
          </td>
        </tr>
        <tr>
          <th>Remplissage:</th>
          <td v-if="remplissage">{{ remplissage }} %</td>
        </tr>
        <tr>
          <th>Quantité de ci commandé:</th>
          <td>{{ this.form.quantiteALivrer }}</td>
        </tr>
        <tr>
          <th>Quantité de ci lancé:</th>
          <td>{{ quantiteALancer }}</td>
        </tr>
        <tr>
          <th>
            Quantité de panneau<span v-if="calculQuantiteDePanneau() > 1"
              >x</span
            >
            :
          </th>
          <td>{{ calculQuantiteDePanneau() }}</td>
        </tr>
        <tr>
          <th>Minimum quantité/prix:</th>
          <td>{{ this.form.resultat.resultat }}</td>
        </tr>
        <tr>
          <th>Prix par ci:</th>
          <td>{{ prixCircuit | euro }}</td>
        </tr>
      </table>
    </b-card>
    <b-card id="canvas" bg-variant="light">
      <canvas id="c" width="400" height="310"></canvas>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Form",
  components: {},
  computed: {
    quantiteALancer() {
      return Math.ceil(this.form.quantiteALivrer * (1 + this.form.marge / 100));
    },
    remplissage() {
      return Math.round(
        ((this.form.circuit.x *
          this.form.circuit.y *
          this.calculNombreDePose().resultat) /
          (this.form.panelUtil.x * this.form.panelUtil.y)) *
          100
      );
    },
    prixCircuit() {
      return this.form.quantiteALivrer > 0
        ? Math.round((this.form.prixTotal / this.form.quantiteALivrer) * 100) /
            100
        : 0;
    },
  },
  filters: {
    euro(price) {
      return `${price}€`;
    },
  },
  data() {
    return {
      selected: "A",
      form: {
        panel: {
          x: 600,
          y: 500,
        },
        circuit: {
          x: "",
          y: "",
        },
        panelUtil: {
          x: "",
          y: "",
        },
        entrepose: 2,
        marge: 15,
        quantiteALivrer: "",
        resultat: {
          choix: 0,
          resultat: 1,
          nombre_de_pose_X: 0,
          nombre_de_pose_Y: 0,
          nombre_de_pose_X_rotation: 0,
          nombre_de_pose_Y_rotation: 0,
          entreposes: 0,
        },
        quantiteDePanneau: "",
        prixTotal: "",
      },
    };
  },
  methods: {
    calculQuantiteDePanneau() {
      return this.form.resultat.resultat > 0
        ? Math.ceil(this.quantiteALancer / this.form.resultat.resultat)
        : 0;
    },
    dimensionUtil() {
      switch (this.selected) {
        case "A":
          this.form.panel.x = 600;
          this.form.panel.y = 500;
          break;
        case "B":
          this.form.panel.x = 570;
          this.form.panel.y = 480;
          break;
        case "C":
          this.form.panel.x = 580;
          this.form.panel.y = 510;
          break;
        case "D":
          if (this.form.panel.x < this.form.panel.y) {
            [this.form.panel.x, this.form.panel.y] = [
              this.form.panel.y,
              this.form.panel.x,
            ];
          }
          break;
        default:
          break;
      }

      return (
        (this.form.panelUtil.x = this.form.panel.x - 30),
        (this.form.panelUtil.y = this.form.panel.y - 30)
      );
    },
    dimensionCircuit() {
      if (this.form.circuit.x < this.form.circuit.y) {
        [this.form.circuit.x, this.form.circuit.y] = [
          this.form.circuit.y,
          this.form.circuit.x,
        ];
      }
      return this.form.circuit.x, this.form.circuit.y;
    },
    calculNombreDePose() {
      this.dimensionUtil();
      this.dimensionCircuit();
      this.form.resultat =
        this.calcul1().resultat < this.calcul2().resultat
          ? this.calcul2()
          : this.calcul1();
      this.drawRect();
      return this.form.circuit.x > 0 && this.form.circuit.y > 0
        ? this.form.resultat
        : 0;
    },
    calcul1() {
      // en x
      const nbPoseX = Math.floor(
        (this.form.panelUtil.x + this.form.entrepose) /
          (this.form.circuit.x + this.form.entrepose)
      );
      // en y

      const nbPoseY = Math.floor(
        (this.form.panelUtil.y + this.form.entrepose) /
          (this.form.circuit.y + this.form.entrepose)
      );
      // calcul espace restant en longueur (X)
      const espaceRestant =
        this.form.panelUtil.x -
        (nbPoseX * this.form.circuit.x + nbPoseX * this.form.entrepose);
      // remplissage espace restant en x

      const nbPoseDansEspaceRestantenX = Math.floor(
        (espaceRestant + this.form.entrepose) /
          (this.form.circuit.y + this.form.entrepose)
      );
      const nbPoseRotationEnY = Math.floor(
        (this.form.panelUtil.y + this.form.entrepose) /
          (this.form.circuit.x + this.form.entrepose)
      );
      const nbPoseRotation = nbPoseDansEspaceRestantenX * nbPoseRotationEnY;

      // calcul final nb de poses:
      const resultat = nbPoseX * nbPoseY + nbPoseRotation;
      const resultatObjet1 = {
        choix: 1,
        resultat,
        nombre_de_pose_X: nbPoseX,
        nombre_de_pose_Y: nbPoseY,
        nombre_de_pose_X_rotation: nbPoseDansEspaceRestantenX,
        nombre_de_pose_Y_rotation: nbPoseRotationEnY,
        entreposes: this.form.entrepose,
      };

      return resultatObjet1;
    },
    calcul2() {
      // en x
      const nbPoseX = Math.floor(
        (this.form.panelUtil.x + this.form.entrepose) /
          (this.form.circuit.y + this.form.entrepose)
      );
      // en y

      const nbPoseY = Math.floor(
        (this.form.panelUtil.y + this.form.entrepose) /
          (this.form.circuit.x + this.form.entrepose)
      );

      // calcul espace restant en largeur (y)
      const espaceRestant =
        this.form.panelUtil.y -
        (nbPoseY * this.form.circuit.x + nbPoseY * this.form.entrepose);

      // remplissage espace restant en x

      const nbPoseDansEspaceRestantenY = Math.floor(
        (espaceRestant + this.form.entrepose) /
          (this.form.circuit.y + this.form.entrepose)
      );
      const nbPoseRotationEnX = Math.floor(
        (this.form.panelUtil.x + this.form.entrepose) /
          (this.form.circuit.x + this.form.entrepose)
      );
      const nbPoseRotation = nbPoseDansEspaceRestantenY * nbPoseRotationEnX;

      // calcul final nb de poses:
      const resultat = nbPoseX * nbPoseY + nbPoseRotation;
      const resultatObjet2 = {
        choix: 2,
        resultat,
        nombre_de_pose_X: nbPoseX,
        nombre_de_pose_Y: nbPoseY,
        nombre_de_pose_X_rotation: nbPoseRotationEnX,
        nombre_de_pose_Y_rotation: nbPoseDansEspaceRestantenY,
        entreposes: this.form.entrepose,
      };

      return resultatObjet2;
    },
    drawRect() {
      const scale = 1.5;
      if (!this.form.circuit.x == "" && !this.form.circuit.y == "") {
        // clear canvas
        this.vueCanvas.clearRect(0, 0, 500, 500);
        if (this.form.resultat.choix == 1) {
          let x = 0,
            y = 0;
          for (let i = 0; i < this.form.resultat.nombre_de_pose_Y; i++) {
            for (let j = 0; j < this.form.resultat.nombre_de_pose_X; j++) {
              this.vueCanvas.fillRect(
                x,
                y,
                this.form.circuit.x / scale,
                this.form.circuit.y / scale
              );
              x +=
                (this.form.resultat.entreposes + this.form.circuit.x) / scale;
            }
            x = 0;
            this.vueCanvas.fillRect(
              x,
              y,
              this.form.circuit.x / scale,
              this.form.circuit.y / scale
            );
            y += (this.form.resultat.entreposes + this.form.circuit.y) / scale;
          }
          if (
            this.form.resultat.nombre_de_pose_Y_rotation == 0 ||
            this.form.resultat.nombre_de_pose_X_rotation == 0
          ) {
            return;
          }
          // affichage avec rotation
          y = 0;
          x =
            (this.form.circuit.x * this.form.resultat.nombre_de_pose_X +
              this.form.resultat.entreposes *
                this.form.resultat.nombre_de_pose_X) /
            scale;
          for (
            let i = 0;
            i < this.form.resultat.nombre_de_pose_Y_rotation;
            i++
          ) {
            for (
              let j = 0;
              j < this.form.resultat.nombre_de_pose_X_rotation;
              j++
            ) {
              this.vueCanvas.fillRect(
                x,
                y,
                this.form.circuit.y / scale,
                this.form.circuit.x / scale
              );
              x +=
                (this.form.resultat.entreposes + this.form.circuit.y) / scale;
            }
            x =
              (this.form.circuit.x * this.form.resultat.nombre_de_pose_X +
                this.form.resultat.entreposes *
                  this.form.resultat.nombre_de_pose_X) /
              scale;

            this.vueCanvas.fillRect(
              x,
              y,
              this.form.circuit.y / scale,
              this.form.circuit.x / scale
            );
            y += (this.form.resultat.entreposes + this.form.circuit.x) / scale;
          }
        }

        if (this.form.resultat.choix == 2) {
          let x = 0,
            y = 0;
          for (let i = 0; i < this.form.resultat.nombre_de_pose_Y; i++) {
            for (let j = 0; j < this.form.resultat.nombre_de_pose_X; j++) {
              this.vueCanvas.fillRect(
                x,
                y,
                this.form.circuit.y / scale,
                this.form.circuit.x / scale
              );
              x +=
                (this.form.resultat.entreposes + this.form.circuit.y) / scale;
            }
            x = 0;
            this.vueCanvas.fillRect(
              x,
              y,
              this.form.circuit.y / scale,
              this.form.circuit.x / scale
            );
            y += (this.form.resultat.entreposes + this.form.circuit.x) / scale;
          }
          if (
            this.form.resultat.nombre_de_pose_Y_rotation == 0 ||
            this.form.resultat.nombre_de_pose_X_rotation == 0
          ) {
            return;
          }
          // affichage avec rotation
          y =
            (this.form.circuit.x * this.form.resultat.nombre_de_pose_Y +
              this.form.resultat.entreposes *
                this.form.resultat.nombre_de_pose_Y) /
            scale;

          x = 0;
          for (
            let i = 0;
            i < this.form.resultat.nombre_de_pose_Y_rotation;
            i++
          ) {
            for (
              let j = 0;
              j < this.form.resultat.nombre_de_pose_X_rotation;
              j++
            ) {
              this.vueCanvas.fillRect(
                x,
                y,
                this.form.circuit.x / scale,
                this.form.circuit.y / scale
              );
              x +=
                (this.form.resultat.entreposes + this.form.circuit.x) / scale;
            }
            x =
              (this.form.circuit.x * this.form.resultat.nombre_de_pose_X +
                this.form.resultat.entreposes *
                  this.form.resultat.nombre_de_pose_X) /
              scale;

            this.vueCanvas.fillRect(
              x,
              y,
              this.form.circuit.x / scale,
              this.form.circuit.y / scale
            );
            x += (this.form.resultat.entreposes + this.form.circuit.x) / scale;
          }
        }
      }
    },
    resetResultat() {
      this.form.resultat.nombre_de_pose_X = 0;
      this.form.resultat.nombre_de_pose_Y = 0;
      this.form.resultat.nombre_de_pose_X_rotation = 0;
      this.form.resultat.nombre_de_pose_Y_rotation = 0;
    },
  },
  mounted() {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    this.vueCanvas = ctx;
    this.vueCanvas.fillStyle = "rgb(200,0,0)";
    this.form.resultat.resultat = 0;
  },
};
</script>
<style lang='scss' scoped >
.wrapper {
  display: flex;
  justify-content: center;
  .formulaire {
    width: 337px;
    input {
      width: 90px;
    }
  }
  #resultat {
    width: 350px;
  }
}
</style>