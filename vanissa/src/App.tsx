import './App.css'
import {Home} from './components/home'
import { Nav } from './components/nav'
import { Sidenav } from './components/sidebar'

function App() {

  return (
    <div className="flex flex-row w-full">
      <Sidenav />
      <div className='flex flex-col w-full'>
      <Nav />
      <Home />
      </div>
    </div>
  )
}

export default App
