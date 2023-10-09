import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Body from './components/Body'
import './Respons.css'
import Invoices from './components/Invoices'






function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <div className='main-body'>
        
        <NavBar/>
        <Body/>
   
        
      </div>
      <div className='inv'>
        
      </div>
    </div>
  )
}

export default App
