import React from 'react'
import Hero from './Hero'
import Header from '../components/Header'
import Feature from './Feature'
import StepBySteps from './StepBySteps'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Feature />
            <StepBySteps />
        </div>
    )
}

export default LandingPage
