import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      anime:{}
    }
    this.getAnime();
  }
  
  getAnime = async() =>{
    const api_call= await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    const response = await api_call.json()
    console.log(response)
  }
  const
    render() {
        return (
                <div>
                  
                </div>            
        );
    }
}

export default App;
