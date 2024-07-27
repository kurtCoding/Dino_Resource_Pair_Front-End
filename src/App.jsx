import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Dino from './Components/Dino'
import DinoIndex from './Components/DinoIndex'
import NewDino from './Components/NewDino'

function App() {

  return (
    <div>
      <Router>
        <NavBar/>
        <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dino/dinoindex' element={<DinoIndex/>} />
          <Route path='/dino' element={<Dino/>} />
          <Route path='/dino/newdino' element={<NewDino/>} />
        </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
