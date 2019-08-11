import React, { Component } from 'react';

export default class App extends Component {
state = {
  count: 0
}

onCount = () => {
  this.setState (
    {count: this.state.count +1}
  )
  }

shouldComponentUpdate(nextPorps, nextState) {
    return (nextState.count%10!==0);
}

componentDidUpdate () {
  this.resetCount();
}

resetCount = () => {
   setTimeout(()=>{
      this.setState (
        {count: 0}
      )
   }, 5000);
   
 }

  render () {
    let {count}=this.state;
    
    return (    
      <div>    
        <button onClick = {this.onCount} > Click me! </button>
        <h3>Количество кликов {count} шт. </h3>
      </div>
    );
  }
}

