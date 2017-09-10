import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import Pokedex from './containers/Pokedex'

const App = () => (
  <Router>
    <div className='wrapper'>
      <Header />
      <div className='container flex-1'>
        <Route exact path='/' component={Pokedex} />
        <Route exact path='/:category' component={Pokedex} />
      </div>
    </div>
  </Router>
)

export default App
