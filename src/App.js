import React, {Component} from 'react';
import {Container} from 'reactstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TopAnimePages from  './pages/topanimepages/topanimepages'
import Navbars from './components/navbar/navbar'
class App extends Component {
  
    render() {
      
        return (
          <Router>
            <Container>
              <Navbars/>
              <h1 className="text-center">Top 50 popular Anime</h1>
            <Switch>
              <Route exact path='/' component={TopAnimePages}/>
            </Switch>
            </Container>
          </Router>
        );
    }
}

export default App;
