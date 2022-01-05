import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={ <Projects />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Resume' element={<Resume />}/>
      </Routes>
    </Router>
  )
}

export default App
