import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home/Home'
import Index from '../News'
import Header from '../header'

const App = () => (
  <div>
    <Header />

    <main>
      <Route exact path='/' component={Home} />
      <Route exact path='/news' component={Index} />
    </main>
  </div>
)

export default App
