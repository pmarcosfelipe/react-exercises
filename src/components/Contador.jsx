import React, { Component } from 'react';

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.incrementar = this.incrementar.bind(this);
  }

  incrementar() {
    this.props.numero++;
  }

  render() {
    return (
      <div>
        <div>Número: {this.props.numero}</div>
        <button onClick={this.incrementar}>Inc</button>
        <button>Dec</button>
      </div>
    );
  }
}
