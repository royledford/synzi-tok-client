import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import HomeContainer from './components/Views/Home/HomeContainer'
import VideoContainer from './components/Views/Video/VideoContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/call" component={VideoContainer} />
        </Switch>
      </Router>
    )
  }
}

export default App
