const wakeUp = () => { return 'Acordando!!'; }

const breakFast = () => { return 'Bora tomar café!!'; }

const goToSleep = () => { return 'Partiu dormir!!'; }

const doingThings = (callback) => {
    console.log(callback());
};

doingThings(breakFast);
doingThings(goToSleep);
doingThings(wakeUp);