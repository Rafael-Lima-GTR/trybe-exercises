import React from "react";

function leftClick() {
  console.log('Clicou no botão esquerdo!')
}

function centerClick() {
  console.log('Clicou no botão central!')
}

function rightClick() {
  console.log('Clicou no botão direito!')
}

class App extends React.Component {
  render (){
    return (
      <>
        <button onClick={leftClick}>Meu botão Esquerdo</button>
        <button onClick={centerClick}>Meu botão Central</button>
        <button onClick={rightClick}>Meu botão Direito</button>
      </>
    );
  }
  
}

export default App;
