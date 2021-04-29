import store from '../store';


const noMix = function (dimCi1, dimCi2, dimPanel1, dimPanel2, entraxe) {
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
};
const mix = function () {
    const { dimCiX, dimCiY, entraxe, dimPanelUtilX, dimPanelUtilY } = store.state.input;

    const cas1 = function () {
        let numberInX = Math.floor((dimPanelUtilX + entraxe) / (dimCiX + entraxe));
        let numberInY = Math.floor((dimPanelUtilY + entraxe) / (dimCiY + entraxe));
        if (numberInX <= 0 || numberInY <= 0) {
            numberInX = 0;
            numberInY = 0;
        }
        // calcul dimension restante en numberInX
        const espaceRestantX = dimPanelUtilX - (numberInX * (dimCiX + entraxe));
        let nombrePoseXRotation = Math.floor((espaceRestantX + entraxe) / (dimCiY + entraxe));
        let nombrePoseYRotation = Math.floor((dimPanelUtilY + entraxe) / (dimCiX + entraxe));
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
            nombrePoseXRotation: nombrePoseXRotation,
            nombrePoseYRotation,
            resultat,
        }
    }
    const cas2 = function () {
        let numberInX = Math.floor((dimPanelUtilX + entraxe) / (dimCiY + entraxe));
        let numberInY = Math.floor((dimPanelUtilY + entraxe) / (dimCiX + entraxe));
        if (numberInX <= 0 || numberInY <= 0) {
            numberInX = 0;
            numberInY = 0;
        }

        // calcul dimension restante en numberInX
        const espaceRestantY = dimPanelUtilY - (numberInY * (dimCiX + entraxe));
        let numberInYRotation = Math.floor((espaceRestantY + entraxe) / (dimCiX + entraxe));
        let numberInXRotation = Math.floor((dimPanelUtilX + entraxe) / (dimCiY + entraxe));
        if (numberInYRotation === 0 || numberInXRotation === 0) {
            numberInYRotation = 0;
            numberInXRotation = 0;
        }
        const resultat = numberInX * numberInY + numberInXRotation * numberInYRotation;
        store.commit('setResultat', { numberInX, numberInY, numberInYRotation, numberInXRotation, resultat });


    }
    cas1();
    cas2();
}
export { noMix, mix };

