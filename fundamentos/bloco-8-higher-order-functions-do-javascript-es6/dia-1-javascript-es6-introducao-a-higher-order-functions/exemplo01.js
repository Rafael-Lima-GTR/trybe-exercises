// const wakeUp = () => { return 'Acordando!!'; }

// const breakFast = () => { return 'Bora tomar café!!'; }

// const goToSleep = () => { return 'Partiu dormir!!'; }

// const doingThings = (callback) => console.log(callback());

// doingThings(breakFast);
// doingThings(goToSleep);
// doingThings(wakeUp);

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });