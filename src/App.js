import React, { Component } from 'react';
import Counter from './Counter';

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
    return (nextState.count%10!==0 || nextState.count===0);
}
componentDidUpdate(prevProps, prevState) {
  // console.log('prevState', prevState);
  this.resetCount(prevState);
}

resetCount = prevState => { 
clearTimeout(this.timerId);
    this.timerId=setTimeout(prevState => {
    console.log(prevState); 
    this.setState({ count: 0 });
  }, 5000);
};



  render () {
    // let {count}=this.state;
    
    return (    
      <div>    
        <button onClick = {this.onCount} > Click me! </button>
        < Counter  count ={this.state.count}/>
      </div>
    );
  }
}

