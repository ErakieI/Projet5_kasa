import React from 'react'
import Navbar from '../components/navbar'
import HousingInfos from '../components/housingInfos'
import Footer from '../components/footer'
import '../assets/style/index.scss'

function HousingPage({ locations }) {
  return (
    <div className="home">
      <Navbar />
      <HousingInfos locations={locations} />
      <Footer />
    </div>
  )
}

export default HousingPage
