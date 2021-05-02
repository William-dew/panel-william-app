import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        input: {
            dimCiX: '',
            dimCiY: '',
            dimPanelX: 600,
            dimPanelY: 500,
            entraxe: 2,
            bordPanneau: 15,
            dimPanelUtilX: 570,
            dimPanelUtilY: 470,
            quantityPcbToDeliver: '1',
            casse: '15',
            bareme: 0,
            mix: true,

        },
        resultatNoMix: {},
        resultatMix: {
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
                state.input.dimCiX = data.y;
                state.input.dimCiY = data.x;
            } else {
                state.input.dimCiX = data.x;
                state.input.dimCiY = data.y;
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
        },
        setQuantityPcbToDeliver(state, data) {
            state.input.quantityPcbToDeliver = data;
        },
        setCasse(state, data) {
            state.input.casse = data;
        },
        setBareme(state, data) {
            state.input.bareme = data;
        },
        setMix(state, data) {
            state.input.mix = data;
        }

    },

})

export default store;