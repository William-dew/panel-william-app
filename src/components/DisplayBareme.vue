<template>
  <div class="display-bareme">
    <v-select :items="types" label="Type" v-model="type"></v-select>
    <v-radio-group v-model="finish">
      <v-radio label="HAL" value="hal"></v-radio>
      <v-radio label="Chimique" value="chemical"></v-radio>
    </v-radio-group>
    <v-text-field
      type="number"
      v-model="quantity"
      label="Quantité panneau"
      min="1"
      max="6"
    ></v-text-field>

    <h2>
      {{ dataPrice[this.type][this.finish][this.quantity] }} €
    </h2>
  </div>
</template>

<script>
import dataPrice from "../data";
export default {
  name: "DisplayBareme",

  data() {
    return {
      dataPrice,
      select: {},
      types: [
        {
          text: "Double Face",
          value: "df",
        },
        {
          text: "4 Couches",
          value: "mc4",
        },
        {
          text: "6 Couches",
          value: "mc6",
        },
        {
          text: "8 Couches",
          value: "mc8",
        },
      ],
      type: "df",
      finish: "hal",
      quantities: [
        {
          text: "1",
          value: 1,
        },
        {
          text: "2",
          value: 2,
        },
           {
          text: "3",
          value: 3,
        },
           {
          text: "4",
          value: 4,
        },
           {
          text: "5",
          value: 5,
        },
           {
          text: "6",
          value: 6,
        },
      ],
      quantity: 1,
    };
  },
};
</script>

<style lang="scss">
.display-bareme{
    padding:1rem;
    margin-top:1rem;
}
</style>
