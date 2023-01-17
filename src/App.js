import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import SignUp from './components/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/Signup' element={<SignUp />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
