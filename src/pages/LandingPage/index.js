import React from 'react'
import LandingPageStyle from '@/components/landingPage.js/body'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Register from './Register'
import Testimony from './Testimony'
import Theme from './Theme'
import Pricing from './Pricing'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <div>
            <LandingPageStyle />
            <Header />
            <Hero />
            <Features />
            <Register />
            <Testimony />
            <Theme />
            <Pricing />
            <Footer />
        </div >
    )
}

export default LandingPage
