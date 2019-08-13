import React, { Component } from 'react';
import Counter from './Counter';
import ImageRequest from './imageRequest';

export default class App extends Component {
state = {
  count: 0
}

debounce = (callback, delay) => {
  let timerId;
  return (...args) => {
      timerId && clearTimeout(timerId);
      timerId = setTimeout(
          () => callback(...args),
          delay
      );
  }
};

onCount = () => {
  console.log(2);
  this.setState (
    {count: this.state.count +1}
  )
}

debounceOnCount = () => {
  console.log(1);
  this.debounce(this.onCount(), 3000);
}

componentWillMount () {
  console.log ("element will be mount");
}


componentWillUpdate () {
  console.log ("element was updated");
}

shouldComponentUpdate(nextPorps, nextState) {
    return (nextState.count%10!==0 || nextState.count===0);
}
componentDidUpdate(prevProps, prevState) {
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
    return (    
      <div>    
        {/* <button onClick = {this.onCount} > Click me! </button> */}
        <button onClick = {this.debounceOnCount} > Click me! </button>
        < Counter  count ={this.state.count}/>
        < ImageRequest />
      </div>          
   );
  }
}




