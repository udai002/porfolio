import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-[100vh] bg-default  z-30 '>
      
      <Navbar />
    
    </div>
  )
}

export default App
