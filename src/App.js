import { useContext } from 'react'
// import { MenuContext } from './MenuContext.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Landing from './components/Landing/Landing'
import Project from './components/Project/Project'
import Portfolio from './components/Portfolio/Portfolio'
import WhatWeDo from './components/WhatWeDo/WhatWeDo.js'
import Sector from './components/Sector/Sector.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/my-education-site" element={<Landing />} />
          <Route path="/my-education-site/company" element={<Sector />} />
          <Route path="/my-education-site/what-we-do" element={<WhatWeDo />} />
          <Route path="/my-education-site/portfolio" element={<Portfolio />} />
          <Route path="/my-education-site/careers" element={<Project />} />
          <Route path="/my-education-site/community" element={<Project />} />
          <Route path="/my-education-site/contact-us" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
