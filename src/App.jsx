// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Footer from './components/footer'
import About from './components/about'
import Contact from './components/contact'
import Portfolio from './components/portfolio'
import Friend from './components/friend'

const App = () => {


  return (
  <>
    <div className="">
      <Header />
      <Home />
      <About />
      <Contact />
      <Portfolio />
      <Friend />
      <Footer />

    </div>
  </>
  
  )
}

export default App
