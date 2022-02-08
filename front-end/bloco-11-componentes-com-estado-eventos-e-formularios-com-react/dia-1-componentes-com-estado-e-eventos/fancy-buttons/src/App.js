import React from "react";

class App extends React.Component {
  constructor(){
    super()
    this.leftClick = this.leftClick.bind(this);
    this.centerClick = this.centerClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  leftClick() {
    console.log('Clicou no botão esquerdo!')
  }
  
  centerClick() {
    console.log('Clicou no botão central!')
  }
  
  rightClick() {
    console.log('Clicou no botão direito!')
  }


  render (){
    return (
      <>
        <button onClick={this.leftClick}>Meu botão Esquerdo</button>
        <button onClick={this.centerClick}>Meu botão Central</button>
        <button onClick={this.rightClick}>Meu botão Direito</button>
      </>
    );
  }
  
}

export default App;
