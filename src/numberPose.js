import store from '../store';

export default {
    noMix(dimCi1, dimCi2, dimPanel1, dimPanel2, entraxe) {
        let dimCiX = dimCi1;
        let dimCiY = dimCi2;
        if (dimCi1 < dimCi2) {
            dimCiX = dimCi2;
            dimCiY = dimCi1;
        }
        const cas1 = {
            name: 'cas1',
            numberInX: Math.floor((dimPanel1 + entraxe) / (dimCiX + entraxe)),
            numberInY: Math.floor((dimPanel2 + entraxe) / (dimCiY + entraxe)),
            resultat: Math.floor((dimPanel1 + entraxe) / (dimCi1 + entraxe)) * Math.floor((dimPanel2 + entraxe) / (dimCi2 + entraxe)),
        }
        const cas2 = {
            name: 'cas2',
            numberInX: Math.floor((dimPanel1 + entraxe) / (dimCiY + entraxe)),
            numberInY: Math.floor((dimPanel2 + entraxe) / (dimCiX + entraxe)),
            resultat: Math.floor((dimPanel1 + entraxe) / (dimCi2 + entraxe)) * Math.floor((dimPanel2 + entraxe) / (dimCi1 + entraxe)),
        }
        store.commit('updateResultat', cas2);
        return (cas1.resultat < cas2.resultat) ? cas2 : cas1;
    },
    mix() {

        console.log('store en x:', store.state.dimensionCircuit.x);
        console.log('toto', { ...store.state });


        let dimCiX = store.state.dimensionCircuit.x;
        let dimCiY = store.state.dimensionCircuit.y;
        let dimPanel1 = store.state.dimensionPanneau.x;
        let dimPanel2 = store.state.dimensionPanneau.y;
        let entraxe = store.state.entraxe;
        if (dimPanel1 <= 0 || dimPanel2 <= 0) {
            dimPanel1 = 0;
            dimPanel2 = 0;
        }
        if (dimPanel1 < dimPanel2) {
            [dimPanel1, dimPanel2] = [dimPanel2, dimPanel1];
        }
        if (dimCiX < dimCiY) {
            [dimCiX, dimCiY] = [dimCiY, dimCiX]
        }


        const cas1 = function () {
            let numberInX = Math.floor((dimPanel1 + entraxe) / (dimCiX + entraxe));
            let numberInY = Math.floor((dimPanel2 + entraxe) / (dimCiY + entraxe));
            if (numberInX <= 0 || numberInY <= 0) {
                numberInX = 0;
                numberInY = 0;
            }
            // calcul dimension restante en numberInX
            const espaceRestantX = dimPanel1 - (numberInX * (dimCiX + entraxe));
            let nombrePoseXRotation = Math.floor((espaceRestantX + entraxe) / (dimCiY + entraxe));
            let nombrePoseYRotation = Math.floor((dimPanel2 + entraxe) / (dimCiX + entraxe));
            if (nombrePoseYRotation === 0 || nombrePoseXRotation === 0) {
                nombrePoseYRotation = 0;
                nombrePoseXRotation = 0;
            }

            const resultat = numberInX * numberInY + nombrePoseXRotation + nombrePoseYRotation;
            return {
                name: 'cas1',
                nombre_en_x: numberInX,
                nombre_en_y: numberInY,
                espaceRestantX,
                dimension_panneau_x: dimPanel1,
                dimension_panneau_y: dimPanel2,
                nombrePoseXRotation: nombrePoseXRotation,
                nombrePoseYRotation,
                resultat,
            }
        }
        const cas2 = function () {
            let numberInX = Math.floor((dimPanel1 + entraxe) / (dimCiY + entraxe));
            let numberInY = Math.floor((dimPanel2 + entraxe) / (dimCiX + entraxe));
            if (numberInX <= 0 || numberInY <= 0) {
                numberInX = 0;
                numberInY = 0;
            }

            // calcul dimension restante en numberInX
            const espaceRestantY = dimPanel2 - (numberInY * (dimCiX + entraxe));
            let nombrePoseYRotation = Math.floor((espaceRestantY + entraxe) / (dimCiX + entraxe));
            let nombrePoseXRotation = Math.floor((dimPanel1 + entraxe) / (dimCiY + entraxe));
            if (nombrePoseYRotation === 0 || nombrePoseXRotation === 0) {
                nombrePoseYRotation = 0;
                nombrePoseXRotation = 0;
            }
            const resultat = numberInX * numberInY + nombrePoseXRotation + nombrePoseYRotation;

            return {
                name: 'cas2',
                nombre_en_x: numberInX,
                nombre_en_y: numberInY,
                espaceRestantY,
                dimension_panneau_x: dimPanel1,
                dimension_panneau_y: dimPanel2,
                nombrePoseXRotation: nombrePoseXRotation,
                nombrePoseYRotation,
                resultat,

            }
        }
        console.log(cas1().resultat, cas2().resultat);
        return (cas1().resultat > cas2().resultat) ? (store.commit("setresultatMix", cas1())) : (store.commit("setresultatMix", cas2()))
    }
}


