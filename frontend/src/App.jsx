import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import './css/Navbar.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div>
      <Navbar/>
      
    </div>
    <div>
      <div className='fixed left-0'><Menubar/></div>
      <div><Home/></div>
   
    </div>
    </>
  )
}

export default App
