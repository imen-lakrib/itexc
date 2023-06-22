import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/nav/NavBar'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Hero/>
    <Features/>
     
    </>
  )
}

export default App
