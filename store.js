import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        input: {
            dimCiX: '',
            dimCiY: '',
            dimPanelX: '',
            dimPanelY: '',
            entraxe: 2,
            bordPanneau: 15,
            dimPanelUtilX: '',
            dimPanelUtilY: '',

        },

        resultatNoMix: {},
        resultatMix: {
            name: '',
            nombre_en_x: 0,
            nombre_en_y: 0,
            espaceRestantX: '',
            dimension_panneau_x: '',
            dimension_panneau_y: '',
            nombrePoseXRotation: '',
            nombrePoseYRotation: '',
            resultat: '',
        },
    },

    mutations: {
        setBordPanneau(state, data) {
            if (data < 0) {
                data = 0;
            } else {
                state.input.bordPanneau = data;
            }
            if ((state.input.dimPanelX - 2 * (state.input.bordPanneau)) <= 0) {
                state.input.dimPanelUtilX = 0;
            } else {
                state.input.dimPanelUtilX = state.input.dimPanelX - 2 * (state.input.bordPanneau);
            }
            if ((state.input.dimPanelY - 2 * (state.input.bordPanneau)) <= 0) {
                state.input.dimPanelUtilY = 0;
            } else {
                state.input.dimPanelUtilY = state.input.dimPanelY - 2 * (state.input.bordPanneau);
            }

        },
        setDimensionCircuit(state, data) {
            if (data.x < data.y) {
                console.log('x est plus petit que y');
                state.input.dimCiX = data.y;
                state.input.dimCiY = data.x;
            } else {
                state.input.dimCiX = data.x;
                state.input.dimCiY = data.y;

                console.log('x est plus grans que Y');
            }
        },
        setDimensionPanneau(state, data) {
            if (data.x < data.y) {
                state.input.dimPanelX = data.y;
                state.input.dimPanelY = data.x;
            } else {
                state.input.dimPanelX = data.x;
                state.input.dimPanelY = data.y;
            }
            if ((state.input.dimPanelX - 2 * (state.input.bordPanneau)) <= 0) {
                state.input.dimPanelUtilX = 0;
            } else {
                state.input.dimPanelUtilX = state.input.dimPanelX - 2 * (state.input.bordPanneau);
            }
            if ((state.input.dimPanelY - 2 * (state.input.bordPanneau)) <= 0) {
                state.input.dimPanelUtilY = 0;
            } else {
                state.input.dimPanelUtilY = state.input.dimPanelY - 2 * (state.input.bordPanneau);
            }

        },
        setEntraxe(state, data) {
            state.input.entraxe = data;
        },
        setResultat(state, data) {
            state.resultatMix = data;
        }
    },

})

export default store;