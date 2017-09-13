import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import Pokedex from './containers/Pokedex'
import Category from './containers/Category'

const App = () => (
  <Router>
    <div className='wrapper'>
      <Header />
      <div className='container flex-1'>
        <Route exact path='/' component={Pokedex} />
        <Route exact path='/category/:category' component={Category} />
      </div>
    </div>
  </Router>
)

export default App
