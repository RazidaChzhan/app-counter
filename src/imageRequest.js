import React, { Component } from 'react';

export default class ImageRequest extends Component {

    state = {
        url:null
    }
    
componentDidMount () {
    console.log ("element was mounted");
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(resp => resp.json())
      .then(data => {
        console.log ('data', data)
        this.setState (
            {url: data[0].url }
        ) 
        let url = data[0].url;
        console.log('url', url);
      })
      .catch(error => console.log(error));
  }
    render() {
        return (
        <img src={this.state.url} alt={this.state.url}/>
      );
    }
  }
