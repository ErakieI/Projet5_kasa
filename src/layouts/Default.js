import {Outlet} from 'react-router-dom';
import Navbar from '../components/navbar'
import React from 'react'
import Footer from '../components/footer'
const LayoutBlank = () => {

  return (
    <>
      <Navbar />
      <main>
        <Outlet/>
      </main>
      <Footer />

    </>
  )
}

export default LayoutBlank;