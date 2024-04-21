import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import MovingCompanies from './Components/MovingCompanies/MovingCompanies'
import Testimonials from './Components/Testimonials/Testimonials'
import Faqs from './Components/Faqs/Faqs'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='landing-page'>
      <Navbar />
      <Hero />
      <MovingCompanies />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  )
}

export default App