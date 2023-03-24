import { useState } from 'react'
import './App.css'
import {Home} from './components/home'
import { Nav } from './components/nav'
import { Sidenav } from './components/sidebar'

function App() {

  return (
    <div className="App">
      <Sidenav />
      <Home />
      <Nav />
    </div>
  )
}

export default App
