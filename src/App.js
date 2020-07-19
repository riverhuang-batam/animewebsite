import React, {Component} from 'react';
import {Container} from 'reactstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TopAnimePages from  './pages/topanimepages/topanimepages'
import Review from './components/review/review'
import Navbars from './components/navbar/navbar'
class App extends Component {
  
    render() {
      
        return (
          <Router>
            <Container>
              <Navbars/>
              
            <Switch>
              <Route exact path='/' component={TopAnimePages}/>
              <Route exact path='/animereview/:Id' component={Review}/>
            </Switch>
            </Container>
          </Router>
        );
    }
}

export default App;
