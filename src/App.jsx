import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Dino from './Components/Dino'
import DinoIndex from './Components/DinoIndex'
import NewDino from './Components/NewDino'
import EditDino from './Components/EditDino'

function App() {

  return (
    <div>
      <Router>
        <NavBar/>
        <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dinos' element={<DinoIndex/>} />
          <Route path='/dinos/:id' element={<Dino/>} />
          <Route path='/dinos/new' element={<NewDino/>} />
          <Route path='/dinos/:id/edit' element={<EditDino/>} />
        </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
