import { useContext } from 'react'
// import { MenuContext } from './MenuContext.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Landing from './components/Landing/Landing'
import Project from './components/Project/Project'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/company" element={<Project />} />
          <Route path="/what-we-do" element={<Project />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Project />} />
          <Route path="/community" element={<Project />} />
          <Route path="/contact-us" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
