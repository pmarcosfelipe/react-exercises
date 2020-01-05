import React, { Component } from 'react';

export default class Contador extends Component {
  state = {
    numero: 0
  };

  incrementar = () => {
    this.alterarNumero(1);
  };

  decrementar = () => {
    this.alterarNumero(-1);
  };

  alterarNumero = diferenca => {
    this.setState({ numero: this.state.numero + diferenca });
  };

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.incrementar}>Inc</button>
        <button onClick={this.decrementar}>Dec</button>
        <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
        <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
      </div>
    );
  }
}

// constructor(props) {
//   super(props);
//   this.incrementar = this.incrementar.bind(this);
// }
