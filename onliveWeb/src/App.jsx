import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AboutSection from './Components/AboutSection'
import TechSection from './Components/TechSection'
import OurServices from './Components/OurServices'
import InfoBoxes from './Components/InfoBoxes'
import RefreshIcon from './Components/RefreshIcon' 
import OurProcess from './Components/OurProcess'
import OurClients from './Components/OurClients'
import PostGrid from './Components/PostGrid'
import ServicesHeader from './Components/ServicesHeader'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutSection/>
      <TechSection/>
      <OurServices/>
      <InfoBoxes/>
      <RefreshIcon/> 
      <OurProcess/>
      <OurClients/>
      <PostGrid/>
      <ServicesHeader/>
      <Footer/> 
         </>
  )
}

export default App
