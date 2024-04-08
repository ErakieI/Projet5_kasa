import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import Error from './pages/error'
import About from './pages/about'
import HousingPage from './pages/housingPage'
import locationsData from './data/cards.json'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<HousingPage locations={locationsData} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
