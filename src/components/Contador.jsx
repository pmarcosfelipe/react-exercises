import React, { Component } from 'react';

export default class Contador extends Component {
  state = {
    numero: 0
  };

  incrementar = () => {
    this.setState({ numero: this.state.numero + 1 });
  };

  decrementar = () => {
    this.setState({ numero: this.state.numero - 1 });
  };

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.incrementar}>Inc</button>
        <button onClick={this.decrementar}>Dec</button>
      </div>
    );
  }
}

// constructor(props) {
//   super(props);
//   this.incrementar = this.incrementar.bind(this);
// }
