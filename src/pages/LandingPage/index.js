import React from 'react'
import Hero from './Hero'
import Header from '../components/Header'
import Feature from './Feature'
import StepBySteps from './StepBySteps'
import Testimoni from './Testimoni'
import Pricing from './Pricing'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Feature />
            <StepBySteps />
            <Testimoni />
            <Pricing />
            <Footer />
        </div>
    )
}

export default LandingPage
