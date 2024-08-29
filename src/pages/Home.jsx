import React from 'react'
import Header from '../components/Header'
import SlideShow from '../components/SlideShow'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Header/>
        <SlideShow/>
        <Features/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
