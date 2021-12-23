import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={ <Projects />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
