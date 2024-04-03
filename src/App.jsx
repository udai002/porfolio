import { useState } from 'react'
import {BrowserRouter , Routes  , Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-[100vh] bg-default  z-30 p-4 '>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
