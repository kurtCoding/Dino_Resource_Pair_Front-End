import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Dino from './Components/Dino'

function App() {

  return (
    <div>
      <Router>
        <NavBar/>
        <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dino' element={<Dino/>} />
        </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
