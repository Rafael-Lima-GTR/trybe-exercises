import React from "react";

class App extends React.Component {
  constructor(){
    super()
    this.leftClick = this.leftClick.bind(this);
    this.state = {
      numeroDeCliques01:0,
      numeroDeCliques02:0,
      numeroDeCliques03:0
    }
    this.centerClick = this.centerClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  leftClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques01: estadoAnterior.numeroDeCliques01 + 1
    }))
    console.log('Clicou no botão esquerdo!')
  }
  
  centerClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques02: estadoAnterior.numeroDeCliques02 + 1
    }))
    console.log('Clicou no botão central!')
  }
  
  rightClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques03: estadoAnterior.numeroDeCliques03 + 1
    }))
    console.log('Clicou no botão direito!')
  }


  render (){
    return (
      <>
        <button onClick={this.leftClick}>Meu botão Esquerdo {this.state.numeroDeCliques01}</button>
        <button onClick={this.centerClick}>Meu botão Central {this.state.numeroDeCliques02}</button>
        <button onClick={this.rightClick}>Meu botão Direito {this.state.numeroDeCliques03}</button>
      </>
    );
  }
  
}

export default App;
