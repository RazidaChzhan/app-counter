import React, { Component } from 'react';

export default class Counter extends Component {
 
  render() {
    let { count } = this.props;
    return (
      <h3>Количество кликов {count} шт. </h3>
    );
  }
}