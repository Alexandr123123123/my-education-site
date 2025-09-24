import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Landing from './components/Landing/Landing'
import Project from './components/Project/Project'
import Portfolio from './components/Portfolio/Portfolio'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import Sector from './components/Sector/Sector'
import Company from './components/Company/Company'
import Careers from './components/Careers/Careers'
import Community from './components/Community/Community'
import Newsroom from './components/Newsroom/Newsroom'
import ContactUs from './components/ContactUs/ContactUs'

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* сюда будет подставляться содержимое каждого Route */}
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/my-education-site" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="company" element={<Company />} />
            <Route path="audio/visual-systemen" element={<Sector />} />
            <Route path="what-we-do" element={<WhatWeDo />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="careers" element={<Careers />} />
            <Route path="community" element={<Community />} />
            <Route path="newsroom" element={<Newsroom />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="project" element={<Project />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
