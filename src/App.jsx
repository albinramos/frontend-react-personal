import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';


function App() {

  return (
    <>
      <main className='main'>
        <Header />
        <Home />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default App;
