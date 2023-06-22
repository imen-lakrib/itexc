import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/nav/NavBar'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Faq from './components/faq/Faq'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Faq/>
     
    </>
  )
}

export default App
