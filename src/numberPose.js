import store from '../store';

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
        let numberInXRotation = Math.floor((espaceRestantX + entraxe) / (dimCiY + entraxe));
        let numberInYRotation = Math.floor((dimPanelUtilY + entraxe) / (dimCiX + entraxe));
        if (numberInYRotation === 0 || numberInXRotation === 0) {
            numberInYRotation = 0;
            numberInXRotation = 0;
        }
        if (!store.state.input.mix) {
            numberInXRotation = 0;
            numberInYRotation = 0;
        }

        const resultat = (numberInX * numberInY) + (numberInXRotation * numberInYRotation);
        store.commit('setResultat', { name: 'cas1', numberInX, numberInY, numberInYRotation, numberInXRotation, resultat });
        return resultat;

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

        if (!store.state.input.mix) {
            numberInXRotation = 0;
            numberInYRotation = 0;
        }
        const resultat = (numberInX * numberInY) + (numberInXRotation * numberInYRotation);
        store.commit('setResultat', { name: 'cas2', numberInX, numberInY, numberInYRotation, numberInXRotation, resultat });
        return resultat;


    }
    return (cas1() > cas2()) ? cas1() : cas2();
}

export { mix };

