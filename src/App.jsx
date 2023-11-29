import React from 'react'
import './App.css';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

function App() {

  return (
    <>
      <main className='main'>
        <Home />
        <Services />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </>
  )
}

export default App;
