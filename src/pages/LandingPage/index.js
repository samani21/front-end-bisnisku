import React from 'react'
import Hero from './Hero'
import Header from '../components/Header'
import Feature from './Feature'
import StepBySteps from './StepBySteps'
import Testimoni from './Testimoni'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Feature />
            <StepBySteps />
            <Testimoni />
        </div>
    )
}

export default LandingPage
