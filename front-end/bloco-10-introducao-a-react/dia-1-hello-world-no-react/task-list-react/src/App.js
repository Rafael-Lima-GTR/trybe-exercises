import './App.css';
import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar banho', 'Tomar café', 'Escovar os dentes', 'Ir ao trabalho'];

class App extends Component {
  render() {
    return (
      <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
    );
  }
}

export default App;
