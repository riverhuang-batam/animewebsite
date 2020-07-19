import React, {useState, useEffect} from 'react';
import AnimeList from '../../components/animelist/animelist'
import axios from 'axios'
import Search from '../../components/search/search'
const TopAnimePages = () => {
  const [animes, setAnimes] = useState({
    anime: [],
    searchAnime: '',
    rate: null,
    searchedAnime: []
  })
  const [searchAnime, setSearchedAnime] = useState('')
  
  const getAnimeData = () => {
//     if(searchAnime){
// axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchAnime}&page=1`)
//     .then(datas => setAnimes({anime: datas.data.results})
//         .map(
//         data => console.log(data)
//     )
//     )
//     .catch(err => console.log(err))
//     }
    // if(!searchAnime){
      axios.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(users => 
        {console.log(users)
        setAnimes({anime: users.data.top})
      })
      .catch(err => console.log(err))
    // }
    
  }
  const searchHandle = (e) => {
    setSearchedAnime(e.target.value)
}
  const searchSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchAnime}&page=1`)
    .then(datas => setAnimes({anime: datas.data.results})
        .map(
        data => console.log(data)
    )
    )
    .catch(err => {
      
      console.log(err)
    })
}

  useEffect(() => {
    getAnimeData()
  }, [])
    
    
        return (
          <React.Fragment>
          <h1 className="text-center">Top 50 popular Anime</h1>
          <Search searchHandle={searchHandle} searchSubmit={searchSubmit} searchAnime={searchAnime}/>
                  <AnimeList animes={animes.anime}/>
                  </React.Fragment>
        );
    
}

export default TopAnimePages;