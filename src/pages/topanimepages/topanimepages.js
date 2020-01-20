import React, {Component} from 'react';
import AnimeList from '../../components/animelist/animelist'

class TopAnimePages extends Component {
  constructor(){
    super();
    this.state={
      animes:[]
    }
  }
  
    componentDidMount(){
  fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
  .then(res => 
    res.json()
  )
  .then(users => 
    {console.log(users)
    this.setState({animes: users.top})}
    
  );
    }
  
    render() {
      const {animes} = this.state;
        return (
          
                  <AnimeList animes={animes}/>
                
        );
    }
}

export default TopAnimePages;